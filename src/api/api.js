import axios from "axios";
import dotenv from "dotenv";
export const url_sendMail = "send-mail";
export const url_wakeUp = "wake-up";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_PATH || "http://localhost:5000/",
});

export const apiSendMail = async (data) => {
  try {
    const response = await api.post(`${url_sendMail}`, {
      email: data.email,
      name: data.name,
      message: data.message,
      recaptcha: data.recaptcha,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const apiWakeUp = () => {
  try {
    const response = api.get(`${url_wakeUp}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
