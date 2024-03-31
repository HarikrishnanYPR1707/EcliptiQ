import axios from "axios";
import { BASEURL } from "@/assets/API/api";

const updateResumeTemplateRoute = async () => {
  try {
    const response = await axios.put(
      `${BASEURL}/api/updateResumeTemplateRoute`,
      {
        id: currentResumeId,
        templateRoute: "/templates/bk/elr",
      },
    );

    console.log("Resume Template Route Updated!!!", response.data);
  } catch (error) {
    // console.log(error.toJSON());
    console.log(error);
  }
};

const fetchData = (currentResumeId, setResumeData) => {
  try {
    const response = axios
      .get(`${BASEURL}/api/getSingleData?id=${currentResumeId}`)
      .then((res) => setResumeData(res.data.data[0].data));
    // console.log(response);
  } catch (error) {
    // console.log(error.toJSON());
    console.log(error);
  }
};

module.exports = { updateResumeTemplateRoute, fetchData };
