const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const UserModel = require('./models/User');
const ProjectModel = require('./models/Project');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: [
    "http://localhost:3000",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/admin").then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

// Default route
app.get('/', (req, res) => {
  res.send('Auth server');
});

// Register route
app.post('/register', async (req, res) => {
  try {
    const { name, email, photo, password } = req.body;

    if (!name || !email || !password || !photo) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new UserModel({
      name,
      email,
      photo,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully.', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Login route
app.post('/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exist.' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    res.status(200).json({
      message: 'AdminLogin successful.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        photo: user.photo,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Project CRUD Operations

// Create a new project
app.post('/projects', async (req, res) => {
  try {
    const { title, description, buttonTitle, image, tags, isLatest } = req.body;

    if (!title || !image ) {
      return res.status(400).json({ message: 'Required fields are missing.' });
    }

    const newProject = new ProjectModel({
      title,
      description,
      buttonTitle,
      image,
      tags: tags || [],
      isLatest,
    });

    await newProject.save();
    res.status(201).json({ 
      message: 'Project created successfully.',
      project: newProject 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Get all projects
app.get('/projects', async (req, res) => {
  try {
    const projects = await ProjectModel.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Get a single project by ID
app.get('/projects/:id', async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found.' });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Update a project
app.put('/projects/:id', async (req, res) => {
  try {
    const { title, description, buttonTitle, image, tags, isLatest } = req.body;
    
    const updatedProject = await ProjectModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        buttonTitle,
        image,
        tags,
        isLatest,
      },
      { new: true , runValidators: true}
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    res.status(200).json({ 
      message: 'Project updated successfully.',
      project: updatedProject 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Delete a project
app.delete('/projects/:id', async (req, res) => {
  try {
    const deletedProject = await ProjectModel.findByIdAndDelete(req.params.id);
    
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found.' });
    }

    res.status(200).json({ 
      message: 'Project deleted successfully.',
      project: deletedProject 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});



// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
