const registerForm = {
  username: ['this field is required', 'username must be atleast 3 characters'],
  password: ['this field is required', 'password must be atleast 5 characters'],
  confirm: [],
  email: ['this field is required', 'email is not valid'],
  full_name: ['full name must be atleast 2 characters '],
};

const loginForm = {
  username: ['this field is required'],
  password: ['this field is required'],
};
export {registerForm, loginForm};
