const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { Sequelize, DataTypes } = require('sequelize');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT
  }
);


// Define Blog model
const Blog = sequelize.define('Blog', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  image_url: { type: DataTypes.STRING },
  video_url: { type: DataTypes.STRING },
  meta_title: { type: DataTypes.STRING },
  meta_description: { type: DataTypes.STRING },
  tags: { type: DataTypes.STRING },
  status: { type: DataTypes.ENUM('published', 'draft'), defaultValue: 'draft' },
});

// Sync database
sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

// CRUD routes
app.post('/blogs', async (req, res) => {
  const blog = await Blog.create(req.body);
  res.json(blog);
});

app.get('/blogs', async (req, res) => {
  const blogs = await Blog.findAll();
  res.json(blogs);
});

app.get('/blogs/:id', async (req, res) => {
  const blog = await Blog.findByPk(req.params.id);
  res.json(blog);
});

app.put('/blogs/:id', async (req, res) => {
  const updatedBlog = await Blog.update(req.body, { where: { id: req.params.id } });
  res.json(updatedBlog);
});

app.delete('/blogs/:id', async (req, res) => {
  await Blog.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
