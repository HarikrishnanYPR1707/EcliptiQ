const mongoose = require("mongoose");

const resumeSchema = mongoose.Schema({
  personalDetails: {
    jobTitle: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    website: String,
  },
  professionalSummary: String,
  education: {
    college: String,
    degree: String,
    place: String,
    startDate: String,
    endDate: String,
    description: String,
  },
  experience: {
    experience1: {
      jobTitle: String,
      employer: String,
      place: String,
      startDate: String,
      endDate: String,
      description: String,
    },
    experience2: {
      jobTitle: String,
      employer: String,
      place: String,
      startDate: String,
      endDate: String,
      description: String,
    },
    experience3: {
      jobTitle: String,
      employer: String,
      place: String,
      startDate: String,
      endDate: String,
      description: String,
    },
  },
  relevantCourses: String,
  certification: String,
  project: {
    project1: {
      title: String,
      description: String,
      position: String,
    },
    project2: {
      title: String,
      description: String,
      position: String,
    },
  },
  socialLink: {
    link1: {
      label: String,
      link: String,
    },
    link2: {
      label: String,
      link: String,
    },
    link3: {
      label: String,
      link: String,
    },
    link4: {
      label: String,
      link: String,
    },
  },
  skills: String,
  language: String,
});

module.exports = mongoose.model("resumeData", resumeSchema);
