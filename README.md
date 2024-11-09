# next-js-blog-website
Internship assignment
Blog Admin Dashboard
A full-stack blog management system built using Next.js, Tailwind CSS, Node.js, and SQL. This application provides an admin dashboard for managing blog posts, including creating, editing, deleting, and publishing blog content with SEO-friendly metadata.

Project Overview
This Blog Admin Dashboard allows administrators to create and manage blog posts with support for images, videos, SEO fields, and tags. The published blogs are viewable on a responsive blog page.

Features
Admin Dashboard
Create New Blog Post: Add title, content, images, videos, SEO metadata (meta title, description, tags), and publish status.
Edit Blog Post: Update any field in an existing post, including content, media, and SEO metadata.
Delete Blog Post: Remove blog posts directly from the admin dashboard.
Post List: View all posts with titles, status, and creation dates; filter posts by status (published or draft).
Blog Display Page
Fetch and display blog content with media.
SEO metadata for search engine optimization.
Optional display of related posts or tags.
Responsiveness
Fully responsive and optimized for mobile, tablet, and desktop.
Tech Stack
Frontend: Next.js, Tailwind CSS
Backend: Node.js, Express.js
Database: SQL (MySQL, PostgreSQL, or SQLite)
Database Schema
The blog data is stored in a SQL database table with fields:

id, title, content, image_url, video_url, meta_title, meta_description, tags, status (published/draft)
Development Guidelines
Backend (Node.js & SQL)
Set up an Express server for CRUD operations on blog posts.
Connect to an SQL database to store blog data.
API Routes:
POST /api/blogs: Create a new blog post.
PUT /api/blogs/
: Update an existing blog post.
DELETE /api/blogs/
: Delete a blog post.
GET /api/blogs/
: Retrieve a blog post for display.
Frontend (Next.js & Tailwind CSS)
Admin Dashboard: A responsive dashboard for managing blog posts.
Blog Display Page: Dynamic pages for each blog post, including SEO optimization using the <Head> component.
Optional Enhancements
Rich text editor for blog content.
Admin authentication.
Image uploads using services like Cloudinary.
Pagination for blog list.
Getting Started
Prerequisites
Node.js and npm
SQL database (e.g., MySQL, PostgreSQL)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/blog-admin-dashboard.git
cd blog-admin-dashboard
Install dependencies for both frontend and backend:

bash
Copy code
npm install
Set up the SQL database with the provided schema:

Database Table Fields: id, title, content, image_url, video_url, meta_title, meta_description, tags, status
Run the SQL script to initialize tables.
Configure environment variables for database connection and other settings.

Start the backend server:

bash
Copy code
node server.js
Start the frontend:

bash
Copy code
npm run dev
Deployment
Deploy the project to a platform like Vercel (for Next.js frontend) and another platform for the Node.js backend if needed.

Screenshots
(Include screenshots of the dashboard and blog display page)

License
This project is licensed under the MIT License.
