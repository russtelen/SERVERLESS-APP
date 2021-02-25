import axios from "axios";
const URL = "https://l74lgvn0k5.execute-api.us-west-1.amazonaws.com/prod";

export const getAllProfiles = async () => {
  const res = await axios.get(`${URL}/profile`);
  const data = await res.data;
  return data;
};

export const createProfile = async ({ firstName, lastName }) => {
  const res = await axios({
    method: "post",
    url: `${URL}/profile`,
    data: {
      fname: firstName,
      lname: lastName,
    },
  });
  return res;
};