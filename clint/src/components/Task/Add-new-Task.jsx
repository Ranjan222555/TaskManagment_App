import React, { useContext } from "react";
import Commondialog from "../common-dialog/common-dialog";
import { addNewTaskControl } from "@/config/config";

function AddnewTask({
  showDialog,
  setshowDialog,
  currentEditId,
  handleSubmit,
  taskFormData,
  setcurrentEditId,
}) {
  return (
    <Commondialog
      formControls={addNewTaskControl}
      showDialog={showDialog}
      onOpenChange={() => {
        setshowDialog(false);
        currentEditId ? taskFormData.reset() : null;
        setcurrentEditId(null);
      }}
      title={currentEditId ? "Edit Task" : "Post New Task"}
      btnText={"Add"}
      handleSubmit={handleSubmit}
      formData={taskFormData}
    />
  );
}

export default AddnewTask;
