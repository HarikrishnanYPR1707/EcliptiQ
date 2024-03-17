const addUserData = async (req, res) => {
  try {
    // const resumeData = await userResumeData.create(req.body);

    const resumeData = req.body;

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

// export default getUserData = async () => {
//   try {
//   } catch (error) {}
// };

module.exports = { addUserData };
