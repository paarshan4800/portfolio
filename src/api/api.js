import axios from "axios";

export const url_sendMail = "send-mail";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const apiSendMail = async (data) => {
  try {
    const response = await api.post(`${url_sendMail}`, {
      email: data.email,
      name: data.name,
      message: data.message,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
