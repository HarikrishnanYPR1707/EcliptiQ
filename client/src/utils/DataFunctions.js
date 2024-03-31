import axios from "axios";
import { BASEURL } from "@/assets/API/api";

const updateResumeTemplateRoute = async (currentResumeId, route) => {
  try {
    const response = await axios.put(
      `${BASEURL}/api/updateResumeTemplateRoute`,
      {
        id: currentResumeId,
        templateRoute: route,
      },
    );

    console.log("Resume Template Route Updated!!!", response.data);
  } catch (error) {
    // console.log(error.toJSON());
    console.log(error);
  }
};

const fetchData = async (currentResumeId, setResumeData) => {
  try {
    const response = await axios
      .get(`${BASEURL}/api/getSingleData?id=${currentResumeId}`)
      .then((res) => setResumeData(res.data.data[0].data));
    // console.log(response);
  } catch (error) {
    // console.log(error.toJSON());
    console.log(error);
  }
};

export { updateResumeTemplateRoute, fetchData };
