const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    imageUrl: String,
    text: String,
    url: String,
  });
  
  const Certificate = mongoose.model('Certificate', certificateSchema);

  module.exports = Certificate;


//   const Certificate = require('./Certificate');

// const certificates = [
//   {
//     imageUrl: 'https://res.cloudinary.com/drwr2gaks/image/upload/v1689678671/Portfolio/Certificates/JAVA8OJA_u17ibl.png',
//     text: 'Java Certified Foundations Associate',
//     url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=2AE652035B9AA36D5BF13FCC38FC5EC2BAC7DE502B2FF03309AAF47F9D5C4312'
//   },
//   {
//     imageUrl: 'https://res.cloudinary.com/drwr2gaks/image/upload/v1689678671/Portfolio/Certificates/image_mxwbyu.png',
//     text: 'Microsoft Certified: Azure Fundamentals',
//     url: 'https://www.credly.com/badges/289e63a0-5477-4a24-b1a0-432012c1ba17?source=linked_in_profile'
//   },
//   {
//     imageUrl: 'https://res.cloudinary.com/drwr2gaks/image/upload/v1689678671/Portfolio/Certificates/image_1_aaryrd.png',
//     text: 'AWS Certified Cloud Practitioner',
//     url: 'https://www.credly.com/badges/54b513ed-dcd2-474c-9044-0294a2edd029/linked_in_profile'
//   }
// ];


// Certificate.insertMany(certificates)
//   .then(() => {
//     console.log('Certificates created successfully');
//   })
//   .catch((error) => {
//     console.error('Error creating certificates:', error);
//   });