export const LOGIN_PRESSED = 'LOGIN_PRESSED';
export const LOGOUT_PRESSED = 'LOGOUT_PRESSED';
export const IS_DARK_MODE = 'IS_DARK_MODE';
export const PUSH_STATUS = 'PUSH_STATUS';



export const loginPressed = (emailId) => (
{
  type: LOGIN_PRESSED,
  payload: {emailId}
});

export const logoutPressed = () => (
{
  type: LOGOUT_PRESSED,
});

export const isDarkMode = (darkMode) => (
{
  type: IS_DARK_MODE,
  payload: {darkMode}
});

export const pushStatus = (value) => (
  {
    type: PUSH_STATUS,
    payload: {value}
  });

    