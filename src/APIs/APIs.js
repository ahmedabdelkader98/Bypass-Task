import axios from 'axios';

const axiosheaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const CreateUser_API = (axiosdata) => {
  const axiosfetch = axios({
    method: 'post',
    url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_ZBsguvUdVqweSUaf3nllT1tgtlsXFv0`,
    headers: axiosheaders,
    data: axiosdata,
  });
  return axiosfetch;
};

export const Login_API = (axiosdata) => {
  const axiosfetch = axios({
    method: 'post',
    // url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=/users/FbTfAYWuyItriaFO4UfL`,
    url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_ZBsguvUdVqweSUaf3nllT1tgtlsXFv0`,
    headers: axiosheaders,
    data: axiosdata,
  });
  return axiosfetch;
};
