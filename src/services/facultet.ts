import axios from "axios";
import { Facultiet } from "../types";

const API_ROOT = "https://ca-api.witharts.kz";

export const getFaculties = () => {
  return axios.get<Facultiet[]>(API_ROOT + "/faculties").then((res) => {
    return res.data;
  });
};

export const getFacultiet = (id: string) => {
  return axios
    .get<Facultiet>(`${API_ROOT}/faculties/${id}`)
    .then((res) => res.data);
};

export const createFacultiet = (data: Partial<Facultiet>) => {
  return axios
    .post<Facultiet>(`${API_ROOT}/faculties`, data)
    .then((res) => res.data);
};

export const editFacultiet = (id: string, data: Partial<Facultiet>) => {
  return axios
    .put<Facultiet>(`${API_ROOT}/faculties/${id}`, data)
    .then((res) => res.data);
};

export const deleteFacultiet = (id: string) => {
  return axios
    .delete<Facultiet>(`${API_ROOT}/faculties/${id}`)
    .then((res) => res.data);
};
