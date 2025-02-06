import React from "react";
import Commoncard from "../common-Card/common-card";
import CommonButton from "../common-button/Common-button";

function TaskItem({
  item,
  taskFormData,
  handleDeletetask,
  setshowDialog,
  setcurrentEditId,
}) {
  return (
    <Commoncard
      title={item?.title}
      description={item?.status}
      footercontent={
        <div className="flex w-full justify-between items-center ">
          <CommonButton
            onClick={() => {
              setshowDialog(true);
              setcurrentEditId(item?._id);
              taskFormData.setValue("title", item?.title);
              taskFormData.setValue("description", item?.description);
              taskFormData.setValue("status", item?.status);
              taskFormData.setValue("priority", item?.priority);
            }}
            buttontext={"Edit"}
          />
          <CommonButton
            onClick={() => handleDeletetask(item?._id)}
            buttontext={"Delete"}
          />
        </div>
      }
    />
  );
}

export default TaskItem;
