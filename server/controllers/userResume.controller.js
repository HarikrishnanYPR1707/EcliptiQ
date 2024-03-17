const userResumeData = require("../models/resumeData.model.js");

const addUserData = async (req, res) => {
  try {
    const Data = req.body;
    const resumeData = await userResumeData.create(Data);

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

const getUserData = async () => {
  try {
    const { email } = req.body;
    const resumeData = await userResumeData.find({ email });

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
