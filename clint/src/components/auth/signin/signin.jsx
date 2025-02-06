import CommonForm from "@/components/common-form/Common-form";
import { signINFormcontrols } from "@/config/config";
import { useToast } from "@/hooks/use-toast";
import { CallLoginUserApi } from "@/service/service";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const formData = useForm({
    defaultValues: {
      email: "",
      Password: "",
    },
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  async function handleSubmit(getdata) {
    const data = await CallLoginUserApi(getdata);

    if (data?.success) {
      toast({
        title: "Login Done!!",
        description: "Welcome Back",
      });
      navigate("/tasks/list");
    }
  }

  return (
    <div>
      <CommonForm
        form={formData}
        handleSubmit={handleSubmit}
        formControls={signINFormcontrols}
        btnText={"Sign IN"}
      />
    </div>
  );
}
export default SignIn;
