const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    createCertificates();
    createProjects();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const certificatesData = [
  {
    imageUrl: 'https://res.cloudinary.com/drwr2gaks/image/upload/v1689678671/Portfolio/Certificates/JAVA8OJA_u17ibl.png',
    text: 'Java Certified Foundations Associate',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=2AE652035B9AA36D5BF13FCC38FC5EC2BAC7DE502B2FF03309AAF47F9D5C4312',
  },
  {
    imageUrl: 'https://res.cloudinary.com/drwr2gaks/image/upload/v1689678671/Portfolio/Certificates/image_mxwbyu.png',
    text: 'Microsoft Certified: Azure Fundamentals',
    url: 'https://www.credly.com/badges/289e63a0-5477-4a24-b1a0-432012c1ba17?source=linked_in_profile',
  },
  {
    imageUrl: 'https://res.cloudinary.com/drwr2gaks/image/upload/v1689678671/Portfolio/Certificates/image_1_aaryrd.png',
    text: 'AWS Certified Cloud Practitioner',
    url: 'https://www.credly.com/badges/54b513ed-dcd2-474c-9044-0294a2edd029/linked_in_profile',
  },
];

const projectsData = [
  {
    imageUrl: 'https://res.cloudinary.com/drwr2gaks/image/upload/v1689679601/Portfolio/Projects/elev2_jsxjzb.png',
    text: 'ElevView is a website showcasing urban exploration (urbex) spots on a map. Users can explore various urbex locations and get information about them.',
    url: 'https://github.com/BPodlins/ElevatedView',
  },
  {
    imageUrl: 'https://res.cloudinary.com/drwr2gaks/image/upload/v1689679599/Portfolio/Projects/ToDo_bgptph.png',
    text: 'ToDoList is a task management application built with React. Users can create, update, and delete tasks, and mark them as completed.',
    url: 'https://github.com/BPodlins/TodoList',
  },
  {
    imageUrl: 'https://res.cloudinary.com/drwr2gaks/image/upload/v1689680628/Portfolio/Projects/Random_xwamnk.png',
    text: 'RandomWordsGame is a Java game that generates random sentences using words from the Polish dictionary. Players can have fun creating unique and quirky sentences.',
    url: 'https://github.com/BPodlins/RandomWordsGame',
  },
];

const Certificate = mongoose.model('Certificate', new mongoose.Schema({
  imageUrl: String,
  text: String,
  url: String,
}));

const Project = mongoose.model('Project', new mongoose.Schema({
  imageUrl: String,
  text: String,
  url: String,
  description: String,
}));

function createCertificates() {
  Certificate.insertMany(certificatesData)
    .then(() => {
      console.log('Certificates created successfully');
      createProjects();
    })
    .catch((error) => {
      console.error('Error creating certificates:', error);
      createProjects();
    });
}

function createProjects() {
  Project.insertMany(projectsData)
    .then(() => {
      console.log('Projects created successfully');
      mongoose.disconnect();
    })
    .catch((error) => {
      console.error('Error creating projects:', error);
      mongoose.disconnect();
    });
}
