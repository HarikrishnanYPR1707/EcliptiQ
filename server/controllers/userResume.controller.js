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

const getUserData = async () => {
  try {
    const { userEmail } = req.body;
    const resumeData = await ResumeData.find({ userEmail });

    res.status(200).json({
      success: true,
      message: "Resume data added successfully",
      data: resumeData,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { addUserData, getUserData };
