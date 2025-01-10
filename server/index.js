const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const UserModel = require('./models/User');
const ProjectModel = require('./models/Project');
const TestimonialModel = require('./models/Testimonial');
const HeroBannerModel = require('./models/HeroBanner');
const PartnerGoalsModel = require('./models/PartnerGoals');
const Service = require("./models/Service");

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

// Create testimonial
app.post('/testimonials', async (req, res) => {
  try {
    const { companyName, description, authorName, profileImage } = req.body;

    if (!companyName || !description || !authorName || !profileImage) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newTestimonial = new TestimonialModel({
      companyName,
      description,
      authorName,
      profileImage
    });

    await newTestimonial.save();
    res.status(201).json({ 
      message: 'Testimonial created successfully.',
      testimonial: newTestimonial 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Get all testimonials
app.get('/testimonials', async (req, res) => {
  try {
    const testimonials = await TestimonialModel.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Update testimonial
app.put('/testimonials/:id', async (req, res) => {
  try {
    const { companyName, description, authorName, profileImage } = req.body;
    
    const updatedTestimonial = await TestimonialModel.findByIdAndUpdate(
      req.params.id,
      {
        companyName,
        description,
        authorName,
        profileImage
      },
      { new: true , runValidators: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found.' });
    }

    res.status(200).json({ 
      message: 'Testimonial updated successfully.',
      testimonial: updatedTestimonial 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Delete testimonial
app.delete('/testimonials/:id', async (req, res) => {
  try {
    const deletedTestimonial = await TestimonialModel.findByIdAndDelete(req.params.id);
    
    if (!deletedTestimonial) {
      return res.status(404).json({ message: 'Testimonial not found.' });
    }

    res.status(200).json({ 
      message: 'Testimonial deleted successfully.',
      testimonial: deletedTestimonial 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Create hero banner
app.post('/hero-banner', async (req, res) => {
  try {
    const { title, subTitle, buttonTitle, achievementTitles } = req.body;

    if (!title || !subTitle || !buttonTitle) {
      return res.status(400).json({ message: 'Required fields are missing.' });
    }

    const newHeroBanner = new HeroBannerModel({
      title,
      subTitle,
      buttonTitle,
      achievementTitles: achievementTitles || []
    });

    await newHeroBanner.save();
    res.status(201).json({ 
      message: 'Hero banner created successfully.',
      heroBanner: newHeroBanner 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Get all hero banners
app.get('/hero-banner', async (req, res) => {
  try {
    const heroBanners = await HeroBannerModel.find().sort({ createdAt: -1 });
    res.status(200).json(heroBanners);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Update hero banner
app.put('/hero-banner/:id', async (req, res) => {
  try {
    const { title, subTitle, buttonTitle, achievementTitles } = req.body;
    
    const updatedHeroBanner = await HeroBannerModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        subTitle,
        buttonTitle,
        achievementTitles
      },
      { new: true }
    );

    if (!updatedHeroBanner) {
      return res.status(404).json({ message: 'Hero banner not found.' });
    }

    res.status(200).json({ 
      message: 'Hero banner updated successfully.',
      heroBanner: updatedHeroBanner 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Delete hero banner
app.delete('/hero-banner/:id', async (req, res) => {
  try {
    const deletedHeroBanner = await HeroBannerModel.findByIdAndDelete(req.params.id);
    
    if (!deletedHeroBanner) {
      return res.status(404).json({ message: 'Hero banner not found.' });
    }

    res.status(200).json({ 
      message: 'Hero banner deleted successfully.',
      heroBanner: deletedHeroBanner 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Create partner goals
app.post('/partner-goals', async (req, res) => {
  try {
    const { title, description, statTitle1, statTitle2, stateValue1, stateValue2, brandsImage, selectLayout } = req.body;

    if (!title ) {
      return res.status(400).json({ message: 'Required fields are missing.' });
    }

    const newPartnerGoals = new PartnerGoalsModel({
      title,
      description,
      statTitle1,
      statTitle2,
      stateValue1,
      stateValue2,
      brandsImage,
      selectLayout
    });

    await newPartnerGoals.save();
    res.status(201).json({ 
      message: 'Partner goals created successfully.',
      partnerGoals: newPartnerGoals 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Get all partner goals
app.get('/partner-goals', async (req, res) => {
  try {
    const partnerGoals = await PartnerGoalsModel.find().sort({ createdAt: -1 });
    res.status(200).json(partnerGoals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Update partner goals
app.put('/partner-goals/:id', async (req, res) => {
  try {
    const { title, description, statTitle1, statTitle2, stateValue1, stateValue2, brandsImage, selectLayout } = req.body;
    
    const updatedPartnerGoals = await PartnerGoalsModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        statTitle1,
        statTitle2,
        stateValue1,
        stateValue2,
        brandsImage,
        selectLayout
      },
      { new: true }
    );

    if (!updatedPartnerGoals) {
      return res.status(404).json({ message: 'Partner goals not found.' });
    }

    res.status(200).json({ 
      message: 'Partner goals updated successfully.',
      partnerGoals: updatedPartnerGoals 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Delete partner goals
app.delete('/partner-goals/:id', async (req, res) => {
  try {
    const deletedPartnerGoals = await PartnerGoalsModel.findByIdAndDelete(req.params.id);
    
    if (!deletedPartnerGoals) {
      return res.status(404).json({ message: 'Partner goals not found.' });
    }

    res.status(200).json({ 
      message: 'Partner goals deleted successfully.',
      partnerGoals: deletedPartnerGoals 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});



// Create a new service
app.post('/services', async (req, res) => {
  try {
    const { serviceTitle, servicePartner, isLatest, image, selectLayout } = req.body;



    const newService = new Service({
      serviceTitle,
      servicePartner,
      isLatest,
      image,
      selectLayout
    });

    await newService.save();
    res.status(201).json({
      message: 'Service created successfully.',
      service: newService
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Get all services
app.get('/services', async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Update a service
app.put('/services/:id', async (req, res) => {
  try {
    const { serviceTitle, servicePartner, isLatest, image, selectLayout } = req.body;

    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      {
        serviceTitle,
        servicePartner,
        isLatest,
        image,
        selectLayout
      },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found.' });
    }

    res.status(200).json({
      message: 'Service updated successfully.',
      service: updatedService
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Delete a service
app.delete('/services/:id', async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);

    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found.' });
    }

    res.status(200).json({
      message: 'Service deleted successfully.',
      service: deletedService
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
