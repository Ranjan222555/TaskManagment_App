import CommonForm from "../common-form/Common-form";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

function Commondialog({
  showDialog,
  onOpenChange,
  title,
  formControls,
  formData,
  handleSubmit,
  btnText,
}) {
  return (
    <Dialog open={showDialog} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-screen h-[490px] overflow-auto">
        <DialogTitle>{title}</DialogTitle>
        <div>
          <CommonForm
            formControls={formControls}
            form={formData}
            handleSubmit={handleSubmit}
            btnText={btnText}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Commondialog;
