export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export function validatePassword(password: string) {
  const check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})/;
  if (password.match(check)) {
    return check.test(password);
  } else {
    return check.test(password);
  }
}

export function validateLength(string: string) {
  return string.length > 6;
}
