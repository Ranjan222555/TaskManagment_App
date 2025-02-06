import Commoncard from "@/components/common-Card/common-card";
import { ScrumBordOption } from "@/config/config";
import { TaskManagerContext } from "@/context/context";
import { getAllTaskApi, updateTaskApi } from "@/service/service";
import { Fragment, useContext, useEffect } from "react";

function ScrumBordPage() {
  const { user, taskList, settaskList, setloading } =
    useContext(TaskManagerContext);

  async function fetchListofTask() {
    setloading(true);
    const response = await getAllTaskApi(user?._id);

    if (response?.success) {
      settaskList(response?.taskList);
      setloading(false);
    }
  }

  function onDragStart(event, gettaskid) {
    event.dataTransfer.setData("id", gettaskid);
    console.log(event.dataTransfer);
  }

  async function updatetaskByStatus(getTask) {
    await updateTaskApi(getTask);
    await fetchListofTask();
  }
  function onDrop(event, getcurrentstatus) {
    const getDragTaskId = event.dataTransfer.getData("id");

    let findCurrentTask = taskList.find(
      (item) => item._id.toString() === getDragTaskId
    );

    findCurrentTask = {
      ...findCurrentTask,
      status: getcurrentstatus,
    };

    updatetaskByStatus(findCurrentTask);
  }

  function renderTodBystatus() {
    const taskStatus = {
      todo: [],
      inprogress: [],
      blocked: [],
      review: [],
      done: [],
    };

    // taskList.forEach((taskitem) => {
    //   const status = taskitem.ststus?.toLowerCase().replace(/\s+/g, "");

    //   console.log(taskStatus[status]);

    //   console.log("Task item status:", taskitem.status);
    //   console.log("Normalized status:", status);
    //   console.log(
    //     "Does taskStatus contain this key?",
    //     taskStatus.hasOwnProperty(status)
    //   );
    // });

    taskList?.forEach((taskitem) => {
      const status = taskitem.status?.toLowerCase().replace(/\s+/g, ""); // Normalize status

      if (taskStatus.hasOwnProperty(status)) {
        taskStatus[status].push(
          <div
            onDragStart={
              status !== "done"
                ? (event) => onDragStart(event, taskitem._id)
                : null
            }
            className="mb-3"
            draggable={status !== "done" ? true : false}
            key={taskitem._id}
          >
            <Commoncard
              extraStyle={status === "done" ? " line-through" : ""}
              title={taskitem?.title}
              description={taskitem?.status}
            />
          </div>
        );
      } else {
        console.warn(`Unexpected task status: "${taskitem.status}"`);
      }
    });

    return taskStatus;
  }

  useEffect(() => {
    if (user !== null) fetchListofTask();
  }, [user]);

  return (
    <Fragment>
      <div className="grid grid-cols-5 gap-2 h-full ">
        {ScrumBordOption.map((item) => (
          <div
            className="border border-[#3333] rounded overflow-auto"
            key={item.id}
            onDrop={(event) => onDrop(event, item.id)}
            onDragOver={(event) => event.preventDefault()}
          >
            <div className="px-1 py-3 text-center bg-black border-none mb-3">
              <h3 className="text-white font-extrabold text-2xl">
                {item.label}
              </h3>
            </div>
            <div className="p-3">{renderTodBystatus()[item.id]}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
export default ScrumBordPage;
