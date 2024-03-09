const home = async (req, res) => {
  try {
    res.status(200).send("Harikrishnan Prasnnakumar");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home };
