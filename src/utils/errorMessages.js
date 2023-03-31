const registerForm = {
  username: ['this field is required', 'username must be atleast 3 characters'],
  password: ['this field is required', 'password must be atleast 8 characters'],
  confirm: ['this field is required'],
  email: ['this field is required', 'email is not valid'],
  full_name: [],
};

const loginForm = {
  username: ['this field is required', 'username must be atleast 3 characters'],
  password: ['this field is required', 'password must be atleast 8 characters'],
};
export {registerForm, loginForm};
