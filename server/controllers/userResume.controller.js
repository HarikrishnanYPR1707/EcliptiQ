const ResumeData = require("../models/resumeData.model.js");

const addUserData = async (req, res) => {
  try {
    const Data = req.body;
    const resumeData = await ResumeData.create(Data);

    res.status(200).json({
      success: true,
      message: "New Resume data added successfully",
      data: resumeData,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getUserSingleData = async (req, res) => {
  try {
    const { id } = req.query;
    console.log("--------------------------------------");
    console.log(id);
    console.log("--------------------------------------");

    const resumeData = await ResumeData.find({ _id: id });
    res.status(200).json({
      success: true,
      message: "Resume data fetched successfully",
      data: resumeData,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getUserData = async (req, res) => {
  try {
    const { userEmail } = req.query;
    console.log("--------------------------------------");
    console.log(userEmail);
    console.log("--------------------------------------");

    const resumeData = await ResumeData.find({ userEmail });

    res.status(200).json({
      success: true,
      message: "Resume data fetched successfully",
      data: resumeData,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const updateUserSingleData = async (req, res) => {
  try {
    const { id, data } = req.body;
    console.log("--------------------------------------");
    console.log(id);
    console.log(data);
    console.log("--------------------------------------");

    const updateResponse = await ResumeData.updateOne(
      { _id: id },
      { $set: { data: data } }
    );
    res.status(200).json({
      success: true,
      message: "Data updated successfully!!!!",
      data: updateResponse,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  addUserData,
  getUserData,
  getUserSingleData,
  updateUserSingleData,
};
