import CommonForm from "@/components/common-form/Common-form";
import { signUPFormcontrols } from "@/config/config";
import { useToast } from "@/hooks/use-toast";
import { CallRegisterUserApi } from "@/service/service";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const formData = useForm({
    defaultValues: {
      name: "",
      email: "",
      Password: "",
    },
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  async function handleSubmit(getdata) {
    const data = await CallRegisterUserApi(getdata);

    console.log(data);

    if (data?.success) {
      toast({
        title: "User register done!!",
        description: "Welcome",
      });
      navigate("/tasks/list");
    } else {
      toast({
        title: "Error",
        description: "Something wrong",
      });
    }
  }

  return (
    <div>
      <CommonForm
        form={formData}
        handleSubmit={handleSubmit}
        formControls={signUPFormcontrols}
        btnText={"Sign Up"}
      />
    </div>
  );
}
export default SignUp;
