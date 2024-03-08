export const validateEmail = (email) => {
  console.log("email" + email);
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};