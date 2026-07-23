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
];