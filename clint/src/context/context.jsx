import { CallUserAuthApi } from "@/service/service";
import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export const TaskManagerContext = createContext(null);

function TaskManagerProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(false);
  const [taskList, settaskList] = useState([]);
  const [currentEditId, setcurrentEditId] = useState(null);

  const taskFormData = useForm({
    defaultValues: {
      title: "",
      description: "",
      status: "",
      priority: "",
    },
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifyUsercookie = async () => {
      const data = await CallUserAuthApi();
      if (data?.userInfo) {
        setUser(data?.userInfo);
      }
      return data?.success
        ? navigate(
            location.pathname === "/auth" || location.pathname === "/"
              ? "/tasks/list"
              : `${location.pathname}`
          )
        : navigate("/auth");
    };
    verifyUsercookie();
  }, [navigate, location.pathname]);

  return (
    <TaskManagerContext.Provider
      value={{
        loading,
        setloading,
        taskList,
        settaskList,
        user,
        setUser,
        taskFormData,
        currentEditId,
        setcurrentEditId,
      }}
    >
      {children}
    </TaskManagerContext.Provider>
  );
}

export default TaskManagerProvider;
