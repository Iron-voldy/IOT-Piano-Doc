# Debugging for Tea Weight Scale System Prototype

Debugging is a critical step in ensuring that the **Tea Weight Scale System Prototype** runs smoothly, identifying and fixing issues in both the hardware and software components. Below are some strategies and steps for effective debugging.


## **Common Debugging Issues**

### 1. **Wi-Fi Connection Issues**
   - **Symptoms**: The system is unable to connect to the Wi-Fi network or loses the connection intermittently.
   - **Potential Causes**:
     - Incorrect Wi-Fi credentials.
     - Poor signal strength.
     - Hardware issues with the Wi-Fi module.
   - **Debugging Steps**:
     - Ensure that the correct SSID and password are used.
     - Use the **Serial Monitor** to check connection status messages.
     - Move the system closer to the router or Wi-Fi source to improve signal strength.
     - Add a reconnect logic in the code to attempt reconnecting if the connection is lost.

   **Example Code for Reconnection**:
   ```cpp
   if (WiFi.status() != WL_CONNECTED) {
       Serial.println("Reconnecting to WiFi...");
       WiFi.begin(ssid, password);
   }
   ```

### 2. **Incorrect Weight Measurements**
   - **Symptoms**: The weight displayed on the LCD is inaccurate or fluctuates.
   - **Potential Causes**:
     - Incorrect calibration of the load cell.
     - Loose connections between the load cell and HX711 module.
     - External interference affecting the load cell readings.
   - **Debugging Steps**:
     - Re-calibrate the load cell and adjust the **calibration factor**.
     - Check the wiring to ensure all connections are secure.
     - Shield the load cell and HX711 module from external electrical noise or vibrations.
   
   **Calibration Code**:
   ```cpp
   scale.set_scale(calibration_factor);  // Adjust the calibration factor
   scale.tare();  // Reset the scale to zero
   ```

### 3. **Failure to Send Data to Server**
   - **Symptoms**: Weight data is not reaching the server after pressing the button, or the server responds with an error.
   - **Potential Causes**:
     - Incorrect server URL or endpoint.
     - Issues with the HTTP request format.
     - Network issues preventing the POST request from being sent.
   - **Debugging Steps**:
     - Check the **Serial Monitor** for server response or HTTP error codes.
     - Ensure that the server URL is correct and reachable.
     - Use `httpResponseCode` in the code to handle errors and retries.

   **Example Debug Code**:
   ```cpp
   int httpResponseCode = http.POST(payload);
   if (httpResponseCode > 0) {
       String response = http.getString();
       Serial.println("Server Response: " + response);
   } else {
       Serial.println("Error in sending POST request. HTTP Code: " + String(httpResponseCode));
   }
   ```

### 4. **Button Press Not Registered**
   - **Symptoms**: The button press does not trigger any actions, or multiple presses are registered in quick succession.
   - **Potential Causes**:
     - The button is not wired correctly.
     - Button debounce issues causing multiple presses to be detected.
   - **Debugging Steps**:
     - Check the wiring to ensure the button is correctly connected to the correct GPIO pin and ground.
     - Add a debounce delay in the code to prevent multiple presses from being registered.

   **Example Debounce Code**:
   ```cpp
   if (digitalRead(BUTTON_PIN) == LOW) {
       delay(300);  // Debounce delay
       // Proceed with action
   }
   ```

### 5. **Data Not Saved to the Database**
   - **Symptoms**: Data is sent to the server, but it does not appear in the database.
   - **Potential Causes**:
     - Server-side issues with the PHP script or database connection.
     - SQL errors preventing data from being inserted.
   - **Debugging Steps**:
     - Check the server logs and enable error reporting in the PHP script (`ini_set('display_errors', 1);`).
     - Verify the SQL query being executed by printing it to the logs.
     - Ensure that the database credentials are correct and the `save_weights` table exists.

   **Example Debugging in PHP**:
   ```php
   if ($stmt->execute()) {
       echo "Weight recorded successfully";
   } else {
       echo "Error: " . $stmt->error;
   }
   ```

---

## **Tools for Debugging**

### 1. **Serial Monitor (Arduino IDE)**
   - Use the **Serial Monitor** in the Arduino IDE to print out messages for debugging.
   - Insert `Serial.println()` statements throughout the code to monitor the flow of the program, especially for:
     - Wi-Fi connection status.
     - Weight readings from the load cell.
     - HTTP request and response handling.
     - Button presses and actions.

   **Example**:
   ```cpp
   Serial.println("Connecting to WiFi...");
   Serial.println("Current Weight: " + String(weight, 2) + " kg");
   ```

### 2. **Server Logs**
   - Enable logging on your PHP server to track incoming requests and database interactions.
   - Check the server logs to see if the data is received correctly and if any SQL errors are occurring during insertion.

### 3. **PHP Error Reporting**
   - Enable error reporting in PHP to catch issues with database connections or SQL execution:
   ```php
   ini_set('display_errors', 1);
   ini_set('display_startup_errors', 1);
   error_reporting(E_ALL);
   ```

### 4. **Multimeter and Oscilloscope**
   - Use a **multimeter** to check for proper voltage levels across the load cell, HX711, and other hardware components.
   - An **oscilloscope** can help identify electrical noise or fluctuations that could be affecting sensor readings.

---

## **Debugging Workflow**

1. **Identify the Issue**:
   - Reproduce the issue consistently.
   - Document the symptoms and potential causes.

2. **Check Logs and Outputs**:
   - Use the **Serial Monitor** or **server logs** to identify any errors or unexpected behaviors.
   - Capture any error codes or messages for further investigation.

3. **Isolate the Problem**:
   - Test individual components to isolate the issue (e.g., check if the button works independently, test Wi-Fi separately).

4. **Fix and Test**:
   - Apply the fix and retest the system to ensure the issue is resolved.

5. **Document the Fix**:
   - Keep a record of the issue and the fix for future reference.

---

## **Debugging Example: Wi-Fi Connection Failure**

### **Scenario**: The system fails to connect to Wi-Fi.
1. **Symptom**: The system continuously prints "Connecting to Wi-Fi..." in the Serial Monitor but never successfully connects.
2. **Step-by-Step Debugging**:
   - **Check the Wi-Fi credentials**: Ensure that the SSID and password are correct.
   - **Signal Strength**: Check if the system is too far from the Wi-Fi router.
   - **Code**: Use the `WiFi.status()` function to print out error codes for further debugging.

   **Example Debug Output**:
   ```cpp
   Serial.println("WiFi connection failed. Error Code: " + String(WiFi.status()));
   ```

