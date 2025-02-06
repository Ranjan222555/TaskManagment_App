import CommonButton from "@/components/common-button/Common-button";
import AddnewTask from "@/components/Task/Add-new-Task";
import TaskItem from "@/components/Task/task-Item";
import { Skeleton } from "@/components/ui/skeleton";
import { TaskManagerContext } from "@/context/context";
import { useToast } from "@/hooks/use-toast";
import {
  addNewTaskApi,
  deleteTaskApi,
  getAllTaskApi,
  updateTaskApi,
} from "@/service/service";
import { Fragment, useContext, useEffect, useState } from "react";

function TaskPage() {
  const [showDialog, setshowDialog] = useState(false);
  const {
    loading,
    setloading,
    taskList,
    settaskList,
    user,
    taskFormData,
    currentEditId,
    setcurrentEditId,
  } = useContext(TaskManagerContext);
  const { toast } = useToast();

  async function fetchListofTask() {
    setloading(true);
    const response = await getAllTaskApi(user?._id);

    if (response?.success) {
      settaskList(response?.taskList); // undefind showing
      setloading(false);
    }
  }
  async function handleSubmit(getdata) {
    const response =
      currentEditId !== null
        ? await updateTaskApi({
            ...getdata,
            _id: currentEditId,
            userId: user?._id,
          })
        : await addNewTaskApi({
            ...getdata,
            userId: user?._id,
          });

    if (response) {
      fetchListofTask();
      setshowDialog(false);
      taskFormData?.reset();
      setcurrentEditId(null);
      if (!currentEditId) {
        toast({
          title: "New Task Added",
          description: "Thank You",
        });
      } else {
        toast({
          title: "Edit Task Added",
          description: "Thank You",
        });
      }
    }
  }

  async function handleDeletetask(gettaskid) {
    const response = await deleteTaskApi(gettaskid);

    if (response?.success) {
      fetchListofTask();
      toast({
        title: "Task Deleted",
        description: "Create New One",
      });
    }
  }

  useEffect(() => {
    if (user !== null) fetchListofTask();
  }, [user]);

  if (loading) {
    return (
      <Skeleton
        className={"w-full h-[550px] rounded-[6px] bg-black opacity-50"}
      />
    );
  }

  return (
    <Fragment>
      <div className="mb-5">
        <CommonButton
          onClick={() => setshowDialog(true)}
          buttontext={"Add New Task"}
        />
      </div>
      <div className="mt-5 flex flex-col">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {taskList?.length > 0 ? (
            taskList.map((taskitem) => (
              <TaskItem
                key={taskitem._id}
                setshowDialog={setshowDialog}
                handleDeletetask={handleDeletetask}
                item={taskitem}
                setcurrentEditId={setcurrentEditId}
                taskFormData={taskFormData}
              />
            ))
          ) : (
            <h1>No Task Added !!</h1>
          )}
        </div>
      </div>
      <AddnewTask
        showDialog={showDialog}
        handleSubmit={handleSubmit}
        setshowDialog={setshowDialog}
        taskFormData={taskFormData}
        currentEditId={currentEditId}
        setcurrentEditId={setcurrentEditId}
      />
    </Fragment>
  );
}
export default TaskPage;
