import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

export const getProducts = async () => {
  try {
    const { data } = await axios.get("all-goods");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const createOrder = async (data) => {
  try {
    const dataRes = await axios.post("user-data/order", data);
    return dataRes;
  } catch (err) {
    console.error(err);
  }
};
