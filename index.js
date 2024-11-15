const express = require('express');
const mongoose = require('mongoose');
const todosRoutes = require('./routes/todos');

const app = express();
const PORT = 3001;
const MONGO_URI = 'mongodb+srv://roshini:abcd1234@cluster0.8srcd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/todos', todosRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
