# Frontend UI for Tea Weight Scale System

The frontend UI for the **Tea Weight Scale System** allows supervisors to interact with the system by entering employee IDs, viewing weight records, and reviewing the saved data. The frontend will have a clean, simple, and responsive design built using **HTML**, **Tailwind CSS**, and **JavaScript**.

### Key Features of the Frontend:
1. **Add Collection Page**: Allows the supervisor to add a new tea weight record and employee ID.
2. **Final Weights Table Page**: Displays the saved weight records, including employee ID, weight, and timestamp.

Below is the design and implementation of the frontend UI.

---

## **Add Collection Page**

This page will allow the supervisor to input the employee ID and view the measured tea weight. The supervisor can save the weight data after confirming it.

#### **HTML Code for Add Collection Page**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tea Weight Collection</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-green-100 min-h-screen flex flex-col">
    <header class="bg-green-600 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo and Title -->
            <h1 class="text-2xl sm:text-3xl font-bold">Tea Collector v.3</h1>

            <!-- Main Navigation -->
            <nav class="hidden sm:flex space-x-4" id="navMenu">
                <a href="index.html" class="hover:bg-green-700 px-3 py-2 rounded">Add Collection</a>
                <a href="weights.html" class="hover:bg-green-700 px-3 py-2 rounded">View Weights</a>
            </nav>
        </div>
    </header>
    
    <main class="flex-grow p-4 sm:p-6">
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6">
            <div class="space-y-4 mb-4">
                <!-- Employee ID Input -->
                <div class="flex flex-col sm:flex-row sm:items-center">
                    <label for="empId" class="text-green-700 font-semibold mb-1 sm:mb-0 sm:mr-2 sm:w-20">Emp ID</label>
                    <div class="flex flex-grow">
                        <input type="text" id="empId" class="border rounded px-2 py-1 flex-grow mr-2">
                    </div>
                </div>
                
                <!-- Weight Display -->
                <div class="flex flex-col sm:flex-row sm:items-center">
                    <label for="weight" class="text-green-700 font-semibold mb-1 sm:mb-0 sm:mr-2 sm:w-20">Weight</label>
                    <input type="text" id="weight" class="border rounded px-2 py-1 flex-grow" readonly>
                </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex justify-end space-x-2 mb-4">
                <button onclick="fetchWeight()" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Get Weight</button>
                <button id="saveBtn" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save</button>
            </div>
        </div>
    </main>

    <!-- Script for fetching weight from Arduino -->
    <script>
        async function fetchWeight() {
            try {
                // Simulate getting weight from the Arduino
                const weight = 15.67; // Replace with actual data from the backend
                document.getElementById('weight').value = weight.toFixed(2) + ' kg';
            } catch (error) {
                console.error('Error fetching weight:', error);
            }
        }

        document.getElementById('saveBtn').addEventListener('click', () => {
            const empId = document.getElementById('empId').value;
            const weight = document.getElementById('weight').value;
            
            if (empId && weight) {
                // Send data to server for saving
                alert(`Saving Employee ID: ${empId} with Weight: ${weight}`);
            } else {
                alert('Please enter Employee ID and get the weight');
            }
        });
    </script>
</body>
</html>
```

### **Explanation**:
1. **Employee ID Input**: This field allows the supervisor to enter the employee ID.
2. **Weight Display**: The weight field shows the weight fetched from the Arduino and is read-only.
3. **Buttons**:
   - "Get Weight": Simulates fetching weight data from the system.
   - "Save": Saves the weight data along with the employee ID to the server.

---

## **Final Weights Table Page**

This page shows a table with all the saved weights, employee IDs, and timestamps retrieved from the server or database.

#### **HTML Code for Final Weights Page**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Final Weights</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-green-100 min-h-screen flex flex-col">
    <header class="bg-green-600 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo and Title -->
            <h1 class="text-2xl sm:text-3xl font-bold">Tea Weight Records</h1>

            <!-- Main Navigation -->
            <nav class="hidden sm:flex space-x-4">
                <a href="index.html" class="hover:bg-green-700 px-3 py-2 rounded">Add Collection</a>
                <a href="weights.html" class="hover:bg-green-700 px-3 py-2 rounded">View Weights</a>
            </nav>
        </div>
    </header>

    <main class="flex-grow p-4 sm:p-6">
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6">
            <h2 class="text-xl font-semibold text-green-700 mb-4">Final Weight Records</h2>

            <!-- Table to display saved weights -->
            <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                    <thead>
                        <tr class="bg-green-200">
                            <th class="border border-green-300 px-4 py-2 text-green-700">Employee ID</th>
                            <th class="border border-green-300 px-4 py-2 text-green-700">Weight (kg)</th>
                            <th class="border border-green-300 px-4 py-2 text-green-700">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody id="weightsTableBody">
                        <!-- Table rows will be dynamically inserted here -->
                    </tbody>
                </table>
            </div>
        </div>
    </main>

    <script>
        // Sample data (replace with actual data from the server)
        const weightsData = [
            { empId: 'EMP001', weight: 12.45, timestamp: '2024-09-24 12:30:00' },
            { empId: 'EMP002', weight: 13.70, timestamp: '2024-09-24 13:00:00' }
        ];

        // Function to load weights into the table
        function loadWeights() {
            const tableBody = document.getElementById('weightsTableBody');
            weightsData.forEach(data => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="border border-green-300 px-4 py-2">${data.empId}</td>
                    <td class="border border-green-300 px-4 py-2">${data.weight.toFixed(2)} kg</td>
                    <td class="border border-green-300 px-4 py-2">${data.timestamp}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        window.onload = loadWeights;
    </script>
</body>
</html>
```

### **Explanation**:
1. **Final Weight Records Table**: Displays a table with employee IDs, weight values, and timestamps.
2. **JavaScript**:
   - Sample data is dynamically inserted into the table (you can replace this with actual server data).

---

### **Summary of the Frontend**

The frontend for the **Tea Weight Scale System** is designed to be simple and user-friendly:
- **Add Collection Page**: Allows users to input employee IDs, fetch weights from the system, and save the data.
- **Final Weights Table Page**: Provides a detailed view of all recorded weights, employee IDs, and timestamps.

