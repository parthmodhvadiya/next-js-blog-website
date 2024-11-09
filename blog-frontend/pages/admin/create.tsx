import { useState, FC } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

const CreatePost: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [metaTitle, setMetaTitle] = useState<string>('');
  const [metaDescription, setMetaDescription] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
      meta_title: metaTitle,
      meta_description: metaDescription,
      tags,
    };

    try {
      await axios.post('http://localhost:5000/blogs', newPost);
      router.push('/admin');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Create New Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="w-full border p-3 rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Content</label>
            <textarea
              className="w-full border p-3 rounded-md"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Meta Title</label>
            <input
              type="text"
              className="w-full border p-3 rounded-md"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Meta Description</label>
            <textarea
              className="w-full border p-3 rounded-md"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              rows={3}
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Tags</label>
            <input
              type="text"
              className="w-full border p-3 rounded-md"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
            Create Post
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreatePost;
