export default function loginValidate(values) {
  const error = {};

  const email = values.email;
  const password = values.password;

  if (!email) {
    error.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    error.email = "Invalid email address";
  }

  if (!password) {
    error.password = "Required";
  }
  return error;
}
