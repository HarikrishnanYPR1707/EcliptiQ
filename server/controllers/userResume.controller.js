const addUserData = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

    res.send(data.personalDetails);
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
