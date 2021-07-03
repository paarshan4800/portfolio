export const validateContactForm = (name, email, message) => {
  if (name.length === 0) {
    return {
      status: false,
      message: "Invalid Name",
    };
  }

  if (email.length === 0 || !validateEmail(email)) {
    return {
      status: false,
      message: "Invalid Email",
    };
  }

  if (message.length === 0) {
    return {
      status: false,
      message: "Invalid Message",
    };
  }

  return {
    status: true,
  };
};

const validateEmail = (email) => {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
};
