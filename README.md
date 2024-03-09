This project involves modifications and enhancements to the user interface (UI) of an existing application. Below is a summary of the tasks completed, ongoing tasks, and relevant API endpoints.

Completed Tasks:
Products Card: Design and implementation of product cards.
Login Form: Creation of a login form.
Loading Spinner Issue: Resolved issues related to loading spinner functionality.
Product Filter in Products Component Sidebar: Added product filtering feature.
React Toastify Integration: Incorporated toast notifications using React Toastify.
Order Detail Page: Developed a page for detailed order information for admin.
Save Login Info in LocalStorage: Implemented functionality to save login information locally.
Admin Dashboard Separate Routing: Segregated routing for admin dashboard.
Add/Delete Products in Dashboard: Enabled addition and deletion of products from the dashboard.
Product Details Page Related Products: Implemented related products section on product details page.
Show Welcome Message Before Submit Order: Displayed a welcome message before order submission.
Cart Product Image Sizing: Adjusted sizing of product images in the cart.
Responsive Design: Ensured responsiveness across various devices.
Eye-catching Images: Enhanced visual appeal with captivating images.
Slider Customization: Customized sliders for improved user experience.
Active Nav Items: Highlighted active navigation items.
Framer Motion Integration: Integrated Framer Motion for smoother animations.
Invoice Printing: Enabled printing of invoices in Genaret PDF.
Ongoing Tasks:
Password Hashing: Implementing password hashing for enhanced security.
Edit Products in Dashboard: Adding functionality to edit products from the dashboard.
Searching Products with Search Bar: Integrating search functionality using a search bar.
Cart Empty Toast Problem: Addressing issues related to empty cart notifications.
API Endpoints:
Product API:
Add Product: POST request to https://panda-backend.onrender.com/product/addProduct
Get Products: GET request to https://panda-backend.onrender.com/product/all
Delete Product: DELETE request to https://panda-backend.onrender.com/product/deleteProduct
User API:
Get User: GET request to https://panda-backend.onrender.com/users/getUser
Create User: POST request to https://panda-backend.onrender.com/users/register
Login User: POST request to https://panda-backend.onrender.com/users/login
Delete User: DELETE request to https://panda-backend.onrender.com/users/deleteUser/:id
Admin API:
Get Admin: GET request to https://panda-backend.onrender.com/admin/getAdmin
Create Admin: POST request to https://panda-backend.onrender.com/admin/admin
Login Admin: POST request to https://panda-backend.onrender.com/admin/loginAdmin
Order API:
Get Order: GET request to https://panda-backend.onrender.com/order/getOrder
Create Order: POST request to https://panda-backend.onrender.com/order/createOrder
Delete Order: DELETE request to https://panda-backend.onrender.com/order/deleteOrder/:id