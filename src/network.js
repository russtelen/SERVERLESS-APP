import axios from "axios";
const URL = "https://l74lgvn0k5.execute-api.us-west-1.amazonaws.com/prod";

export const getAllProfiles = async () => {
  const res = await axios.get(`${URL}/profile`);
  const data = await res.data;
  return data;
};

export const getProfile = async (id) => {
  const res = await axios.get(`${URL}/profile/${id}`);
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

export const deleteProfile = async (id) => {
  const res = await axios({
    method: "delete",
    url: `${URL}/profile/${id}`,
  });

  return res;
};

export const updateProfile = async (id, firstName, lastName) => {
  const res = await axios({
    method: "put",
    url: `${URL}/profile/${id}`,
    data: {
      fname: firstName,
      lname: lastName,
    },
  });

  return res;
};
