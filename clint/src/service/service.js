import axios from "axios";

export const CallRegisterUserApi = async (formData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/user/register`,
    formData,
    { withCredentials: true }
  );
  return response?.data;
};
export const CallLoginUserApi = async (formData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/user/login`,
    formData,
    { withCredentials: true }
  );
  return response?.data;
};
export const CallUserAuthApi = async () => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/user/auth`,
    {},
    { withCredentials: true }
  );

  return response?.data;
};
export const CallLogOutApi = async (req, res) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/user/logout`,
    {},
    { withCredentials: true }
  );

  return response?.data;
};

export const addNewTaskApi = async (formData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/tasks/add-new-task`,
    formData
  );
  return response?.data;
};
export const getAllTaskApi = async (getcurrentid) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/tasks/get-all-tasks/${getcurrentid}`
  );
  return response?.data;
};
export const updateTaskApi = async (formData) => {
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/api/tasks/update-tasks`,
    formData
  );
  return response?.data;
};
export const deleteTaskApi = async (getcurrentTaskid) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_URL}/api/tasks/delete-tasks/${getcurrentTaskid}`
  );
  return response?.data;
};
