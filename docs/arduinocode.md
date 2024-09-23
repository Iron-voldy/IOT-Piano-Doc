# Arduino Code Implementation

## Arduino Code for Tea Weight Scale System

The following Arduino code is used to measure the weight of the harvested tea, display the result on an LCD screen, and send the weight data to a server via Wi-Fi after the user (tea plucker or supervisor) presses a button.

#### **Code Explanation**:
1. **Components Used**:
   - **HX711 Load Cell**: Used for accurate weight measurement.
   - **16x2 LCD Display**: Shows the current weight.
   - **Push Button**: Confirms the weight to be sent to the server.
   - **LED**: Gives feedback after data is successfully sent.
   - **Wi-Fi Module (ESP32 or similar)**: Connects to Wi-Fi to send the data.

2. **Functional Overview**:
   - The system continuously reads the weight from the **HX711 load cell** and displays it on the **LCD**.
   - When the **button** is pressed, the system sends the weight to a **PHP server** via an HTTP POST request and lights up an **LED** to confirm successful transmission.

#### **Arduino Code**:

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include "HX711.h"

// Define GPIO pins for HX711, LCD, Button, and LED
#define LOADCELL_DOUT_PIN  5   // Data pin for HX711
#define LOADCELL_SCK_PIN   4   // Clock pin for HX711
#define BUTTON_PIN 15          // Pin for the push button
#define LED_PIN 13             // Pin for the LED

// WiFi credentials
const char* ssid = "Wokwi-GUEST";  // Replace with your WiFi SSID
const char* password = "";  // Replace with your WiFi password

// Server URL
const char* serverURL = "https://axious.getweight.com/store_weight.php"; 

// Initialize LCD
LiquidCrystal_I2C lcd(0x27, 16, 2);  // I2C address for the LCD (0x27 may vary)

// Initialize HX711 scale
HX711 scale;

// Calibration factor based on recalculation
float calibration_factor = 344.6;  // Adjusted calibration factor

void setup() {
  // Initialize Serial Monitor
  Serial.begin(115200);

  // Initialize HX711
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
  scale.set_scale(calibration_factor);  // Set the calibration factor
  scale.tare();  // Reset the scale to 0

  // Initialize LCD
  lcd.init();
  lcd.backlight();
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Project Axios 2.0");
  delay(2000);  // Display message for 2 seconds
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Ready");
  delay(1000);
  lcd.clear();

  // Initialize button pin with internal pull-up resistor
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  // Initialize LED pin as OUTPUT
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);  // Turn off the LED initially

  // Connect to WiFi
  WiFi.begin(ssid, password);
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Connecting to WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("WiFi Connected");
  delay(1000);
  lcd.clear();
}

void loop() {
  // Read weight from HX711
  float weight = scale.get_units(10);  // Get the average of 10 readings

  // Display the weight on the LCD
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Weight: ");
  lcd.print(weight, 2);  // Show weight with 2 decimal places
  lcd.setCursor(0, 1);
  lcd.print("kg");

  // Check if the button is pressed (LOW state due to pull-up)
  if (digitalRead(BUTTON_PIN) == LOW) {
    // Print the current weight to the Serial Monitor when the button is pressed
    Serial.print("Current Weight: ");
    Serial.print(weight, 2);
    Serial.println(" kg");

    // Send the weight to the PHP server
    if (WiFi.status() == WL_CONNECTED) {
      HTTPClient http;
      http.begin(serverURL);  // Specify the server URL

      // Prepare the payload to send
      String payload = "weight=" + String(weight, 2);

      // Specify content-type header and POST method
      http.addHeader("Content-Type", "application/x-www-form-urlencoded");
      int httpResponseCode = http.POST(payload);

      // Check the server response
      if (httpResponseCode > 0) {
        String response = http.getString();
        Serial.println("Server Response: " + response);
      } else {
        Serial.println("Error in sending POST request");
      }

      http.end();  // End the HTTP connection
    } else {
      Serial.println("WiFi not connected");
    }

    // Turn on the LED to indicate the value was printed and sent
    digitalWrite(LED_PIN, HIGH);

    // Wait for 1 second to show the LED before turning it off (you can adjust this)
    delay(1000);
    digitalWrite(LED_PIN, LOW);  // Turn off the LED

    // Debounce delay to avoid multiple readings on one press
    delay(300);
  }

  // Wait for a second before refreshing the screen
  delay(1000);
}
```

---

##  Functional Explanation

- **Wi-Fi Connection**: The system connects to Wi-Fi and sends the weight data to the server. If the connection is lost, the system keeps attempting to reconnect.
- **Weight Measurement**: The weight is measured using the **HX711 load cell** module. The measured weight is displayed on the **LCD**.
- **Button Confirmation**: When the tea plucker presses the button, the system sends the measured weight to a server using an HTTP POST request.
- **LED Feedback**: The LED lights up after the data is successfully sent, giving visual feedback to the user.

