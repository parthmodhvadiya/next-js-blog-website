# Blog Admin Dashboard

A full-stack blog management system built using Next.js, Tailwind CSS, Node.js, and SQL. This application provides an admin dashboard for managing blog posts, including creating, editing, deleting, and publishing blog content with SEO-friendly metadata.

## Project Overview

This Blog Admin Dashboard allows administrators to create and manage blog posts with support for images, videos, SEO fields, and tags. The published blogs are viewable on a responsive blog page.

## Features

### Admin Dashboard
- **Create New Blog Post**: Add title, content, images, videos, SEO metadata (meta title, description, tags), and publish status.
- **Edit Blog Post**: Update any field in an existing post, including content, media, and SEO metadata.
- **Delete Blog Post**: Remove blog posts directly from the admin dashboard.
- **Post List**: View all posts with titles, status, and creation dates; filter posts by status (published or draft).

### Blog Display Page
- Fetch and display blog content with media.
- SEO metadata for search engine optimization.
- Optional display of related posts or tags.

### Responsiveness
- Fully responsive and optimized for mobile, tablet, and desktop.

## Tech Stack
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: SQL (MySQL, PostgreSQL, or SQLite)

## Database Schema
The blog data is stored in a SQL database table with fields:
- `id`, `title`, `content`, `image_url`, `video_url`, `meta_title`, `meta_description`, `tags`, `status` (published/draft)

## Development Guidelines

### Backend (Node.js & SQL)
1. Set up an Express server for CRUD operations on blog posts.
2. Connect to an SQL database to store blog data.
3. API Routes:
   - **POST /api/blogs**: Create a new blog post.
   - **PUT /api/blogs/:id**: Update an existing blog post.
   - **DELETE /api/blogs/:id**: Delete a blog post.
   - **GET /api/blogs/:id**: Retrieve a blog post for display.

### Frontend (Next.js & Tailwind CSS)
1. **Admin Dashboard**: A responsive dashboard for managing blog posts.
2. **Blog Display Page**: Dynamic pages for each blog post, including SEO optimization using the `<Head>` component.

### Optional Enhancements
- Rich text editor for blog content.
- Admin authentication.
- Image uploads using services like Cloudinary.
- Pagination for blog list.

## Getting Started

### Prerequisites
- Node.js and npm
- SQL database (e.g., MySQL, PostgreSQL)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blog-admin-dashboard.git
   cd blog-admin-dashboard
