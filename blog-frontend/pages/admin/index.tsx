import { useEffect, useState, FC } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  status: string;
  created_at: string;
  content: string
}

const AdminDashboard: FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`http://localhost:5000/blogs/${id}`);
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    }
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
          {/* <Link href="/admin/create">
            <a className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600">
              Create New Post
            </a>
          </Link> */}
          <Link href="/admin/create" className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600">
            
              Create New Post
            </Link>
        </div>

        <ul className="divide-y divide-gray-200">
          {blogs.map((blog) => (
            <li key={blog.id} className="flex justify-between items-center py-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
                <p className="text-gray-600">{blog.content}</p>
                <p className="text-gray-600">Status: {blog.status}</p>
                {/* <p className="text-gray-500 text-sm">Created on: {Date(blog.created_at)}</p> */}
              </div>
              <div className="space-x-4">
                {/* <Link href={`/admin/edit/${blog.id}`}>
                  <a className="text-blue-500 hover:underline">Edit</a>
                </Link> */}
                <Link href={`/admin/edit/${blog.id}`} className="text-blue-500 hover:underline">
                  Edit
                </Link>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleDelete(blog.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default AdminDashboard;