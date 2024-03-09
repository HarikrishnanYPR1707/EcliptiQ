const userResumeDataController = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

    res.send(data.personalDetails);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { userResumeDataController };
