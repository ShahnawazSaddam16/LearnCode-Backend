module.exports = [
  {
    order: 1,
    title: "SELECT, WHERE, and Filtering Data",
    theory: "The SELECT statement retrieves data from a table. The WHERE clause filters rows based on conditions, and operators like AND, OR, and LIKE combine or refine those conditions.",
    code: `SELECT name, email
FROM users
WHERE age > 18 AND country = 'PK';`,
  },
  {
    order: 2,
    title: "JOINs Across Tables",
    theory: "JOINs combine rows from two or more tables based on a related column. INNER JOIN returns matching rows only, while LEFT JOIN returns all rows from the left table even without a match.",
    code: `SELECT orders.id, users.name
FROM orders
INNER JOIN users ON orders.user_id = users.id;`,
  },
  {
    order: 3,
    title: "RIGHT JOIN, FULL JOIN, and CROSS JOIN",
    theory: "RIGHT JOIN returns all rows from the right table even without a match. FULL JOIN returns all rows from both tables, matching where possible. CROSS JOIN produces the cartesian product of two tables.",
    code: `SELECT a.id, b.id
FROM table_a a
RIGHT JOIN table_b b ON a.ref_id = b.id;

SELECT a.id, b.id
FROM table_a a
FULL JOIN table_b b ON a.ref_id = b.id;

SELECT a.id, b.id
FROM table_a a
CROSS JOIN table_b b;`,
  },
  {
    order: 4,
    title: "Aggregate Functions",
    theory: "Aggregate functions perform a calculation on a set of rows and return a single value. Common ones are COUNT, SUM, AVG, MIN, and MAX.",
    code: `SELECT COUNT(*) AS total_users,
       AVG(age) AS avg_age,
       MAX(age) AS oldest,
       MIN(age) AS youngest
FROM users;`,
  },
  {
    order: 5,
    title: "GROUP BY and HAVING",
    theory: "GROUP BY groups rows sharing a value into summary rows, often used with aggregate functions. HAVING filters those grouped results, unlike WHERE which filters individual rows before grouping.",
    code: `SELECT country, COUNT(*) AS user_count
FROM users
GROUP BY country
HAVING COUNT(*) > 10;`,
  },
  {
    order: 6,
    title: "ORDER BY, LIMIT, and OFFSET",
    theory: "ORDER BY sorts the result set by one or more columns in ascending or descending order. LIMIT restricts the number of rows returned, and OFFSET skips a given number of rows, useful for pagination.",
    code: `SELECT name, age
FROM users
ORDER BY age DESC
LIMIT 10 OFFSET 20;`,
  },
  {
    order: 7,
    title: "INSERT, UPDATE, and DELETE",
    theory: "INSERT adds new rows to a table. UPDATE modifies existing rows matching a condition. DELETE removes rows matching a condition. Omitting WHERE affects every row in the table.",
    code: `INSERT INTO users (name, email, age, country)
VALUES ('Ali', 'ali@example.com', 25, 'PK');

UPDATE users
SET age = 26
WHERE email = 'ali@example.com';

DELETE FROM users
WHERE email = 'ali@example.com';`,
  },
  {
    order: 8,
    title: "CREATE TABLE and Data Types",
    theory: "CREATE TABLE defines a new table's structure, including column names and data types such as INT, VARCHAR, DATE, and BOOLEAN. Constraints like NOT NULL and DEFAULT can be attached to columns.",
    code: `CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  in_stock BOOLEAN DEFAULT TRUE,
  created_at DATE
);`,
  },
  {
    order: 9,
    title: "Constraints: PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK",
    theory: "Constraints enforce rules on table data. PRIMARY KEY uniquely identifies each row. FOREIGN KEY links to another table's primary key. UNIQUE ensures no duplicate values. CHECK enforces a condition on column values.",
    code: `CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  quantity INT CHECK (quantity > 0),
  email VARCHAR(100) UNIQUE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`,
  },
  {
    order: 10,
    title: "ALTER TABLE",
    theory: "ALTER TABLE changes an existing table's structure, allowing columns to be added, dropped, renamed, or modified without recreating the table.",
    code: `ALTER TABLE users ADD COLUMN phone VARCHAR(20);
ALTER TABLE users DROP COLUMN phone;
ALTER TABLE users RENAME COLUMN name TO full_name;
ALTER TABLE users MODIFY COLUMN age SMALLINT;`,
  },
  {
    order: 11,
    title: "Subqueries",
    theory: "A subquery is a query nested inside another query. It can appear in SELECT, WHERE, or FROM clauses and is used to compute intermediate results needed by the outer query.",
    code: `SELECT name
FROM users
WHERE id IN (
  SELECT user_id FROM orders WHERE quantity > 5
);`,
  },
  {
    order: 12,
    title: "Correlated Subqueries and EXISTS",
    theory: "A correlated subquery references columns from the outer query, so it runs once per outer row. EXISTS checks whether the subquery returns any rows and is often more efficient than IN for such checks.",
    code: `SELECT u.name
FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o WHERE o.user_id = u.id
);`,
  },
  {
    order: 13,
    title: "UNION and UNION ALL",
    theory: "UNION combines the results of two or more SELECT statements into a single result set, removing duplicates. UNION ALL does the same but keeps duplicates, making it faster.",
    code: `SELECT name FROM customers
UNION
SELECT name FROM suppliers;

SELECT name FROM customers
UNION ALL
SELECT name FROM suppliers;`,
  },
  {
    order: 14,
    title: "Common Table Expressions (CTEs)",
    theory: "A CTE, defined with WITH, creates a temporary named result set that can be referenced within a single query, improving readability for complex logic and enabling recursive queries.",
    code: `WITH high_value_orders AS (
  SELECT user_id, SUM(total) AS spent
  FROM orders
  GROUP BY user_id
  HAVING SUM(total) > 1000
)
SELECT u.name, h.spent
FROM users u
JOIN high_value_orders h ON u.id = h.user_id;`,
  },
  {
    order: 15,
    title: "Window Functions",
    theory: "Window functions perform calculations across a set of rows related to the current row without collapsing them into a single result, using the OVER clause with optional PARTITION BY and ORDER BY.",
    code: `SELECT name, department, salary,
       RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank,
       AVG(salary) OVER (PARTITION BY department) AS dept_avg
FROM employees;`,
  },
  {
    order: 16,
    title: "CASE Expressions",
    theory: "The CASE expression allows conditional logic directly within a query, returning different values based on which condition is met, similar to if-else logic in programming languages.",
    code: `SELECT name,
  CASE
    WHEN age < 13 THEN 'child'
    WHEN age BETWEEN 13 AND 19 THEN 'teen'
    ELSE 'adult'
  END AS age_group
FROM users;`,
  },
  {
    order: 17,
    title: "NULL Handling",
    theory: "NULL represents missing or unknown data. Comparisons with NULL using = or != always return unknown, so IS NULL and IS NOT NULL are used instead. COALESCE returns the first non-null value from a list.",
    code: `SELECT name, COALESCE(phone, 'N/A') AS phone
FROM users
WHERE phone IS NULL;`,
  },
  {
    order: 18,
    title: "String, Date, and Numeric Functions",
    theory: "SQL provides built-in functions to manipulate strings, dates, and numbers, such as CONCAT, UPPER, LOWER, SUBSTRING, NOW, DATEDIFF, ROUND, and ABS.",
    code: `SELECT CONCAT(UPPER(name), ' - ', email) AS label,
       DATEDIFF(NOW(), created_at) AS days_since_signup,
       ROUND(price, 1) AS rounded_price
FROM users, products;`,
  },
  {
    order: 19,
    title: "Indexes",
    theory: "An index is a data structure that speeds up data retrieval on a table at the cost of extra storage and slower writes. Indexes are commonly created on columns used in WHERE, JOIN, and ORDER BY clauses.",
    code: `CREATE INDEX idx_users_email ON users(email);
CREATE UNIQUE INDEX idx_users_username ON users(username);
DROP INDEX idx_users_email ON users;`,
  },
  {
    order: 20,
    title: "Views",
    theory: "A view is a virtual table based on the result of a stored query. It simplifies complex queries, provides an abstraction layer, and can restrict access to specific columns or rows.",
    code: `CREATE VIEW active_users AS
SELECT id, name, email
FROM users
WHERE is_active = TRUE;

SELECT * FROM active_users;`,
  },
  {
    order: 21,
    title: "Transactions and ACID",
    theory: "A transaction groups multiple statements so they execute as a single unit of work, following ACID properties: Atomicity, Consistency, Isolation, and Durability. COMMIT saves changes, and ROLLBACK undoes them.",
    code: `START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;`,
  },
  {
    order: 22,
    title: "Stored Procedures and Functions",
    theory: "Stored procedures are reusable blocks of SQL logic stored in the database and executed with CALL. User-defined functions return a single value and can be used inside other queries.",
    code: `DELIMITER $$
CREATE PROCEDURE GetUsersByCountry(IN countryCode VARCHAR(2))
BEGIN
  SELECT * FROM users WHERE country = countryCode;
END $$
DELIMITER ;

CALL GetUsersByCountry('PK');`,
  },
  {
    order: 23,
    title: "Triggers",
    theory: "A trigger is a stored procedure that automatically executes in response to an event such as INSERT, UPDATE, or DELETE on a specified table.",
    code: `CREATE TRIGGER before_user_delete
BEFORE DELETE ON users
FOR EACH ROW
INSERT INTO deleted_users_log (user_id, deleted_at)
VALUES (OLD.id, NOW());`,
  },
  {
    order: 24,
    title: "Normalization and Database Design",
    theory: "Normalization organizes data to reduce redundancy and improve integrity, following normal forms from 1NF through 3NF and beyond, each removing specific types of duplication and dependency issues.",
    code: `CREATE TABLE customers (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE addresses (
  id INT PRIMARY KEY,
  customer_id INT,
  street VARCHAR(150),
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);`,
  },
  {
    order: 25,
    title: "Set Operators: INTERSECT and EXCEPT",
    theory: "INTERSECT returns only the rows common to both queries. EXCEPT (or MINUS in some databases) returns rows from the first query that do not appear in the second.",
    code: `SELECT email FROM users
INTERSECT
SELECT email FROM newsletter_subscribers;

SELECT email FROM users
EXCEPT
SELECT email FROM newsletter_subscribers;`,
  },
];