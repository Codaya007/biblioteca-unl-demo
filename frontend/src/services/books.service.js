import axios from "axios";
const { API_BASEURL } = require("@/constants");

export const createBook = async (body, token) => {
  const url = `${API_BASEURL}/books`;

  const { data } = await axios.post(url, body, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};

export const updateBook = async (id, body, token) => {
  const url = `${API_BASEURL}/books/${id}`;

  const { data } = await axios.put(url, body, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};

export const deleteBook = async (id, token) => {
  const url = `${API_BASEURL}/books/${id}`;

  const { data } = await axios.delete(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};

export const getBooks = async (token, category) => {
  const url = `${API_BASEURL}/books`;

  const { data } = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};

export const getBook = async (id, token) => {
  const url = `${API_BASEURL}/books/${id}`;

  const { data } = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};
