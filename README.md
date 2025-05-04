## NextJs NOTES:

- NextJs support a new form component which is used to automatically update URL search parameters and reduce the boilerplate code needed to achieve anything. (Example is in /components/SearchForm.tsx)

Project-Based Learning Journey: "Simple Inventory Management System"

Goal: Build a real backend app (Node.js + Express + MySQL) for managing Products, Users, Orders.

Week 1 (Days 1–7) – Setup & First Database

1. Install MySQL Server, Workbench, Node.js, and Express.
2. Create a Node.js + Express Starter Project (npm init, install express, mysql2).
3. Connect Node.js app to MySQL (use .env for DB credentials).
4. Create your MySQL Database: inventory_db.
5. Create your first Table: users (id, username, email, password).
6. Build basic routes:
   - POST /users → Add user to database.
   - GET /users → List all users.
7. Learn Basic SQL Queries by manually inserting users and retrieving them.

Week 2 (Days 8–14) – Products Management 8. Create products table (id, name, description, price, stock_quantity). 9. Create routes: - POST /products → Add a product. - GET /products → List products. - GET /products/:id → Get one product. 10. Add data validation (e.g., no empty names or negative prices). 11. Learn CRUD deeper: - Update a product (PUT /products/:id). - Delete a product (DELETE /products/:id). 12. Learn Filtering with SQL: - List products under specific price (GET /products?price_lte=500). 13. Use Postman to test your APIs.

Week 3 (Days 15–21) – Orders System & Relationships 14. Create orders table: - id, user_id, product_id, quantity, order_date. 15. Add Foreign Keys: - user_id references users(id). - product_id references products(id). 16. Create order routes: - POST /orders → Create an order (link user + product). - GET /orders → List all orders with JOIN (show user and product info). 17. Learn SQL JOIN: - SELECT orders.\*, users.username, products.name FROM orders JOIN users JOIN products. 18. Update inventory stock after order placed. 19. Bonus: If product stock is 0, prevent ordering.

Week 4 (Days 22–28) – Authentication + Deployment Ready 20. Add simple login system: - Hash password when creating user (bcryptjs). - Create login route: POST /login → Verify user. 21. Protect certain routes (only logged-in users can order). 22. Learn MySQL Transactions: - Make sure Order Creation + Stock Reduction happen together. 23. Learn how to backup your database (SQL dump). 24. Clean up code: use controllers, models, and routes folders. 25. Deploy app locally using free services (like Railway, Render). 26. Prepare small documentation for your project (README.md).

Bonus (Optional Days 29–40) – Extra Skills 27. Add Pagination to your products list. 28. Create Admin Panel (basic HTML or use Postman). 29. Learn MySQL Indexes: Optimize your queries. 30. Use Sequelize ORM instead of raw queries (optional). 31. Add filtering/sorting in GET endpoints (GET /products?sort=price_asc). 32. Learn Advanced SQL (Subqueries, Stored Procedures). 33. Build a simple frontend (HTML/CSS/JS) to interact with your API. 34. Deploy frontend and backend together. 35. Learn Docker (containerize your Node.js + MySQL app).
