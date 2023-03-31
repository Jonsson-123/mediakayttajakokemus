const registerValidators = {
  username: ['required', 'minStringLength:3'],
  password: ['required', 'minStringLength:8'],
  confirm: ['required'],
  email: ['required', 'isEmail'],
  full_name: [],
};

const loginValidators = {
  username: ['required', 'minStringLength:3'],
  password: ['required', 'minStringLength:8'],
};
export {registerValidators, loginValidators};
