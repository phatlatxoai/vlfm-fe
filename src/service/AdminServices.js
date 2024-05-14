import requests from "./httpService";
import qs from "qs";

const AdminServices = {
  registerAdmin: async (body) => {
    return requests.post("/admin/register", body);
  },

  loginAdmin: async (body) => {
    return requests.post(`User/Login`, body);
  },
  ChangePassword: async (id, body) => {
    return requests.post(`/admin/changePassword/${id}`, body);
  },

  forgetPassword: async (body) => {
    return requests.put("/admin/forget-password", body);
  },

  resetPassword: async (body) => {
    return requests.put("/admin/reset-password", body);
  },

  signUpWithProvider: async (body) => {
    return requests.post("/admin/signup", body);
  },

  addStaff: async (body) => {
    return requests.post("/admin/add", body);
  },
  getAllStaff: async (query) => {
    const queryString = query && qs.stringify(query, { encode: false });

    return requests.get(`/admin?${queryString ? queryString : ""}`);
  },
  getStaffById: async (id, body) => {
    return requests.post(`/admin/${id}`, body);
  },
  getStaffByRole: async (role) => {
    return requests.get(`/admin/${role}`);
  },

  updateStaff: async (id, body) => {
    return requests.put(`/admin/${id}`, body);
  },

  updateStaffStatus: async (id, body) => {
    return requests.put(`/admin/update-status/${id}`, body);
  },

  deleteStaff: async (id) => {
    return requests.delete(`/admin/${id}`);
  },
  getBalance: async () => {
    return requests.get(`/admin/balance`);
  },
};

export default AdminServices;
