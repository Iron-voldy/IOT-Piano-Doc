## User Workflow

1. **Tea Plucker Weighs Tea**: The tea plucker places the harvested tea on the weight machine.
2. **Weight Measurement**: The load cell and HX711 module measure the weight and display it on the LCD screen.
3. **Supervisor Verification**: The supervisor verifies the weight and enters the employee ID (empid) into the web interface. The weight cannot be altered by the supervisor.
4. **Data Saving**: Once verified, the system sends the weight and employee ID to the backend server, where the data is stored in the database.

## Data Workflow

- **Weight Measurement**: Weight is measured by the load cell connected to an HX711 module and sent to the system.
- **Data Input**: Supervisor enters the employee ID and confirms the weight.
- **Data Storage**: Weight and empid are sent to the server via HTTP POST, where it is saved in a MySQL database.
- **Data Retrieval**: The system retrieves the latest weight records from the database to display in the web interface.
