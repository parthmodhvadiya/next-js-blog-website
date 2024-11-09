import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../../components/Layout';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [tags, setTags] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/blogs/${id}`)
        .then(response => {
          const { title, content, meta_title, meta_description, tags } = response.data;
          setTitle(title);
          setContent(content);
          setMetaTitle(meta_title);
          setMetaDescription(meta_description);
          setTags(tags);
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedPost = { title, content, meta_title: metaTitle, meta_description: metaDescription, tags };
    try {
      await axios.put(`http://localhost:5000/blogs/${id}`, updatedPost);
      router.push('/admin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Edit Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-3 rounded-md shadow-sm" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea className="w-full border p-3 rounded-md shadow-sm" value={content} onChange={(e) => setContent(e.target.value)} required />
        <input className="w-full border p-3 rounded-md shadow-sm" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
        <textarea className="w-full border p-3 rounded-md shadow-sm" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />
        <input className="w-full border p-3 rounded-md shadow-sm" value={tags} onChange={(e) => setTags(e.target.value)} />
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md shadow-sm hover:bg-blue-600">Update Post</button>
      </form>
    </Layout>
  );
};

export default EditPost;
