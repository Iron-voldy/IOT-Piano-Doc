# Test Cases for Tea Weight Scale System Prototype

Test cases are essential to ensure that the **Tea Weight Scale System Prototype** works as expected. Below are some critical test cases that cover various aspects of the system, including the hardware, data flow, and frontend functionality.



## **Functional Test Cases**

### **Test Case 1: Measure Weight and Display on LCD**
- **Description**: Ensure that the system correctly measures the tea weight and displays it on the LCD screen.
- **Preconditions**: The tea is placed on the scale, and the system is powered on.
- **Test Steps**:
  1. Place a known weight of tea on the load cell.
  2. Check the value displayed on the LCD screen.
- **Expected Result**: The displayed weight should match the actual weight of the tea with an acceptable margin of error.

---

### **Test Case 2: Button Press to Send Data**
- **Description**: Validate that pressing the button sends the measured weight to the backend.
- **Preconditions**: The weight is displayed on the LCD screen.
- **Test Steps**:
  1. Press the button after placing tea on the scale.
  2. Monitor the serial monitor or server logs for confirmation.
- **Expected Result**: The weight should be successfully sent to the backend server, and the LED should light up to indicate success.

---

### **Test Case 3: Saving Weight with Employee ID**
- **Description**: Ensure that the supervisor can save the measured weight along with the employee ID via the frontend.
- **Preconditions**: The system is connected to Wi-Fi, and the weight is displayed on the frontend.
- **Test Steps**:
  1. Enter a valid employee ID in the frontend.
  2. Press the "Save" button after fetching the weight.
  3. Check the database for the saved record.
- **Expected Result**: The weight and employee ID should be saved in the database, and a confirmation message should be displayed on the frontend.

---

### **Test Case 4: View Final Weight Records**
- **Description**: Verify that the final weight records are displayed correctly in the frontend.
- **Preconditions**: The database has stored records.
- **Test Steps**:
  1. Navigate to the "View Weights" page in the frontend.
  2. Check the table for weight records.
- **Expected Result**: The table should display correct employee IDs, weight values, and timestamps.

---

## **Error Handling Test Cases**

### **Test Case 5: Handle Missing Wi-Fi Connection**
- **Description**: Ensure that the system handles the absence of a Wi-Fi connection gracefully.
- **Preconditions**: The system is powered on without Wi-Fi connectivity.
- **Test Steps**:
  1. Power on the system with no Wi-Fi network available.
  2. Try to send the weight data.
- **Expected Result**: The system should continuously try to reconnect to the Wi-Fi network and display an error on the serial monitor.

---

### **Test Case 6: Handle Invalid Employee ID Input**
- **Description**: Verify that the system handles invalid or empty employee ID entries.
- **Preconditions**: The weight is displayed, but no employee ID is entered.
- **Test Steps**:
  1. Leave the Employee ID field empty.
  2. Press the "Save" button.
- **Expected Result**: The frontend should display an error message indicating that the Employee ID is required.

---

### **Test Case 7: Invalid Weight Value Handling**
- **Description**: Ensure that the system correctly handles invalid weight values (e.g., negative values or zero).
- **Preconditions**: The Arduino or frontend is set to send an invalid weight.
- **Test Steps**:
  1. Simulate a weight of zero or a negative number.
  2. Try to save the weight.
- **Expected Result**: The system should reject invalid weights and display an error message.

---

## **Performance Test Cases**

### **Test Case 8: Time to Send Weight Data**
- **Description**: Measure how long it takes to send weight data to the backend after pressing the button.
- **Preconditions**: The system is connected to Wi-Fi and functioning normally.
- **Test Steps**:
  1. Place a weight on the scale.
  2. Press the button and record the time.
  3. Measure the time from button press to successful data transmission.
- **Expected Result**: The weight data should be sent within a reasonable time frame (e.g., 1-2 seconds).

---

### **Test Case 9: Database Query Performance for Viewing Records**
- **Description**: Test how quickly the system retrieves weight records from the database.
- **Preconditions**: The database has a large number of saved records.
- **Test Steps**:
  1. Navigate to the "View Weights" page.
  2. Measure the time taken to display the weight records.
- **Expected Result**: The records should be retrieved and displayed within a reasonable time frame.

---

## **User Interface (UI) Test Cases**

### **Test Case 10: Responsive Design of Frontend UI**
- **Description**: Ensure that the frontend is responsive and works well on different screen sizes.
- **Preconditions**: The frontend UI is deployed and accessible.
- **Test Steps**:
  1. Open the frontend on various devices (desktop, tablet, mobile).
  2. Check that the layout adjusts correctly on different screen sizes.
- **Expected Result**: The frontend should be fully responsive, with a usable layout on all device sizes.

---

## **Security Test Cases**

### **Test Case 11: Prevent SQL Injection**
- **Description**: Test that the system is protected against SQL injection attacks.
- **Preconditions**: The system should have a backend receiving weight data.
- **Test Steps**:
  1. Attempt to input malicious SQL code into the Employee ID field (e.g., `'; DROP TABLE save_weights; --`).
  2. Submit the form.
- **Expected Result**: The system should reject the input, and the database should remain unaffected.

---

## **Integration Test Cases**

### **Test Case 12: Arduino to Backend Communication**
- **Description**: Ensure smooth communication between the Arduino and the backend server.
- **Preconditions**: The Arduino and backend server are configured correctly.
- **Test Steps**:
  1. Place a weight on the scale and press the button.
  2. Check the backend server logs to ensure the data is received and processed.
- **Expected Result**: The weight data should be successfully transmitted to the backend without errors.

---
