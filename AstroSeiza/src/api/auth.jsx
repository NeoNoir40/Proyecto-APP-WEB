import axios from "./axios";


export const registerRequest = (user) => axios.post(`/users`, user);

export const loginRequest = (user) => axios.post(`/users/login`, user);

export const verifyTokenRequest = () => axios.get(`/users/verify`);


export const profile = () => axios.get(`/users/profile`);

export const loginRequestAdmin = (user) => axios.post(`/admin/login`, user);

export const verifyTokenRequestAdmin = () => axios.get(`/admin/verify`);


export const profileAdmin = () => axios.get(`/admin/profile`);

export const allUsers = () => axios.get(`/users`);


