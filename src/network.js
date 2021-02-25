import axios from "axios";
const URL = "https://l74lgvn0k5.execute-api.us-west-1.amazonaws.com/prod";

export const getAllProfiles = async () => {
  const res = await axios.get(`${URL}/profile`);
  const data = await res.data;
  return data;
};
