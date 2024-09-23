# Database Design


## Database Design Description

The following section describes the **database design** for the **Tea Weight Scale System Prototype**,This database design manages employees and records the tea weights collected by them, along with tracking orders made by employees.

**ER Diagram**: 

![ER](img/er.png)

### **1. Database Schema: `weight_db`**
The schema `weight_db` is created to manage all the database objects for the Tea Weight Scale System. This schema contains three key tables: `employees`, `save_weights`, and `order`.

---

### **2. Table: `employees`**

- **Purpose**: Stores information about the employees (e.g., tea pluckers).
- **Structure**:
  - `empid` (INT, AUTO_INCREMENT): The unique identifier for each employee. This is the **Primary Key** of the table.
  - `name` (VARCHAR(100)): The name of the employee. This field is optional (can be `NULL`).

- **Primary Key**:
  - `empid`: Ensures that each employee has a unique identifier.

```sql
CREATE TABLE IF NOT EXISTS `weight_db`.`employees` (
  `empid` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  PRIMARY KEY (`empid`)
) ENGINE = InnoDB;
```

---

### **3. Table: `save_weights`**

- **Purpose**: Stores the tea weight measurements for each employee and records the timestamp when the weight was recorded.
- **Structure**:
  - `id` (INT, AUTO_INCREMENT): A unique identifier for each weight record. This is the **Primary Key** of the table.
  - `weight_value` (FLOAT): The actual weight of the tea collected. This field is optional (can be `NULL`).
  - `timestamp` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP): The time when the weight was recorded.
  - `employees_empid` (INT): A foreign key that links to the `empid` field in the `employees` table, associating the recorded weight with the specific employee.

- **Primary Key**:
  - `id`: Uniquely identifies each weight entry.

- **Indexes and Foreign Keys**:
  - An **index** (`fk_weights_employees_idx`) is created on the `employees_empid` field to improve query performance.
  - A **Foreign Key Constraint** (`fk_weights_employees`) is established between the `employees_empid` field and the `empid` field of the `employees` table. This enforces referential integrity, ensuring that weight entries are only associated with valid employees.
  - **ON DELETE NO ACTION** and **ON UPDATE NO ACTION** ensure that no cascading operations are performed on weight records when an employee's record is updated or deleted.

```sql
CREATE TABLE IF NOT EXISTS `weight_db`.`save_weights` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `weight_value` FLOAT NULL,
  `timestamp` TIMESTAMP NULL DEFAULT current_timestamp(),
  `employees_empid` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_weights_employees_idx` (`employees_empid` ASC) VISIBLE,
  CONSTRAINT `fk_weights_employees`
    FOREIGN KEY (`employees_empid`)
    REFERENCES `weight_db`.`employees` (`empid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;
```

---

### **4. Table: `order`**

- **Purpose**: Stores information about the orders placed by employees, including the timestamp of the order and the employee who placed the order.
- **Structure**:
  - `id` (INT, AUTO_INCREMENT): A unique identifier for each order. This is the **Primary Key** of the table.
  - `timestamp` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP): The time when the order was placed.
  - `employees_empid` (INT): A foreign key that links to the `empid` field in the `employees` table, associating the order with the specific employee who placed it.

- **Primary Key**:
  - `id`: Uniquely identifies each order.

- **Indexes and Foreign Keys**:
  - An **index** (`fk_order_employees1_idx`) is created on the `employees_empid` field to optimize queries.
  - A **Foreign Key Constraint** (`fk_order_employees1`) is established between the `employees_empid` field and the `empid` field of the `employees` table. This ensures that orders are only associated with valid employees.
  - **ON DELETE NO ACTION** and **ON UPDATE NO ACTION** prevent cascading updates or deletes on the associated employee records.

```sql
CREATE TABLE IF NOT EXISTS `weight_db`.`order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `timestamp` TIMESTAMP NULL DEFAULT current_timestamp(),
  `employees_empid` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_order_employees1_idx` (`employees_empid` ASC) VISIBLE,
  CONSTRAINT `fk_order_employees1`
    FOREIGN KEY (`employees_empid`)
    REFERENCES `weight_db`.`employees` (`empid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;
```

---

## **Summary of Database Design**

- **Schema**: `weight_db`
  - Contains the tables `employees`, `save_weights`, and `order`.

- **Table Relationships**:
  - The `save_weights` and `order` tables are related to the `employees` table via **foreign keys**. Both tables store `employees_empid` as a reference to the primary key (`empid`) in the `employees` table.

- **Referential Integrity**:
  - Ensured by foreign key constraints, which maintain consistency between employee records and the weight/order data.

- **Indexing**:
  - Indexes are added on foreign key fields to optimize query performance when accessing related data (e.g., querying weight records for a specific employee).
