import axios from "axios";

export const CallRegisterUserApi = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/user/register",
    formData,
    { withCredentials: true }
  );
  return response?.data;
};
export const CallLoginUserApi = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/user/login",
    formData,
    { withCredentials: true }
  );
  return response?.data;
};
export const CallUserAuthApi = async () => {
  const response = await axios.post(
    "http://localhost:5000/api/user/auth",
    {},
    { withCredentials: true }
  );

  return response?.data;
};
export const CallLogOutApi = async (req, res) => {
  const response = await axios.post(
    "http://localhost:5000/api/user/logout",
    {},
    { withCredentials: true }
  );

  return response?.data;
};

export const addNewTaskApi = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/tasks/add-new-task",
    formData
  );
  return response?.data;
};
export const getAllTaskApi = async (getcurrentid) => {
  const response = await axios.get(
    `http://localhost:5000/api/tasks/get-all-tasks/${getcurrentid}`
  );
  return response?.data;
};
export const updateTaskApi = async (formData) => {
  const response = await axios.put(
    `http://localhost:5000/api/tasks/update-tasks`,
    formData
  );
  return response?.data;
};
export const deleteTaskApi = async (getcurrentTaskid) => {
  const response = await axios.delete(
    `http://localhost:5000/api/tasks/delete-tasks/${getcurrentTaskid}`
  );
  return response?.data;
};
