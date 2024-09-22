# Get Started

Welcome to the **Tea Weight Scale System Prototype** This guide will walk you through setting up the system, from configuring the hardware to deploying the web interface and backend. Follow the steps below to get started.

## 1. Hardware Setup

### Required Components:
- **Dual Channel HX711**
- **Load Cell (20kg)**
- **Load Cell Bracket Optimus**
- **LCD 16×4**
- **Push Button, Resistor, LED x1**
- **Microcontroller** (ESP32/Arduino)

### Step-by-Step Guide:
1. **Assemble the Hardware**: Connect the load cell to the HX711 module. Use the following pin configurations:
   - **HX711 DOUT** → Microcontroller pin 5
   - **HX711 SCK** → Microcontroller pin 4
2. **LCD Display**: Wire the LCD to the microcontroller using I2C.
3. **Push Button and LED**: Connect the push button and LED for user interaction and feedback.
4. **Power Up**: Once everything is connected, power up your microcontroller.

### Testing the Hardware:
- Use basic Arduino or ESP32 sketches to test the load cell and LCD for proper functionality before proceeding with software.

---

## 2. Software Setup

### Prerequisites:
- **Node.js** (for frontend setup)
- **Vite.js** (for frontend development)
- **PHP** (for backend API)
- **MySQL** (for the database)

### Step 1: Frontend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/tea-weight-scale-system.git
   ```
   
2. **Navigate to the Frontend Directory**:
   ```bash
   cd tea-weight-scale-system/frontend
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The application will be served at `http://localhost:3000`.

5. **Build for Production**:
   If you need to create a production build, run:
   ```bash
   npm run build
   ```

### Step 2: Backend Setup

1. **Navigate to the Backend Directory**:
   ```bash
   cd tea-weight-scale-system/backend
   ```

2. **Configure the Database**:
   - Set up a MySQL database with the following structure:
     ```sql
     CREATE TABLE weights (
       id INT AUTO_INCREMENT PRIMARY KEY,
       weight_value DECIMAL(5,2),
       timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
     );
     ```
   
3. **Update the Database Credentials** in the `config.php` file:
   ```php
   $servername = "your_server";
   $dBUsername = "your_username";
   $dBPassword = "your_password";
   $dBName = "your_database_name";
   ```

4. **Run PHP Server**:
   If you're using a local server (e.g., XAMPP, MAMP):
   - Place the backend files in the `htdocs` or appropriate directory.
   - Ensure your server is running, and the backend API is accessible.

---

## 3. Connecting Frontend and Backend

Once both the frontend and backend are running:

1. **Frontend API Configuration**:
   - Update the frontend configuration to point to your backend API.
   - Edit the `frontend/src/config.js` file to reflect your backend server URL:
     ```javascript
     export const API_BASE_URL = "http://localhost/your-backend-directory/";
     ```

2. **Testing the Connection**:
   - Navigate to the "Add Collection" page in the frontend.
   - Test the "Get Weight" button, which should retrieve the latest weight data from the backend API.

---

## 4. First Use

### Step 1: Placing a Weight on the Scale
- Power on the weight scale.
- Place the harvested tea on the load cell to measure the weight.
- The weight will display on the LCD screen.

### Step 2: Verifying the Weight
- Navigate to the web interface.
- Enter the employee ID and confirm the displayed weight.

### Step 3: Saving the Weight
- Once confirmed, the weight and employee ID are saved in the database.
- You can view all saved entries on the **Final Weights Table** page.

---

## 5. Deploying the Project

### Frontend Deployment:
- Host the frontend build on a static file server such as **Netlify** or **Vercel**.
- Follow the deployment instructions for **Vite.js** projects.

### Backend Deployment:
- Deploy the PHP backend on any server that supports PHP (e.g., **Heroku**, **DigitalOcean**, or a shared hosting provider).
- Ensure the MySQL database is properly connected.

---

## 6. Troubleshooting

- **No Data on Display**: Check if the load cell is properly connected and the calibration factor is correct.
- **Frontend Not Connecting to Backend**: Ensure the correct API URL is set in the frontend configuration.
- **Database Connection Issues**: Verify that your database credentials are correct and the server is running.

---

If you follow these steps, you’ll have the **Tea Weight Scale System Prototype** up and running in no time! For any further assistance, check out our **Contact Us** page.

---
