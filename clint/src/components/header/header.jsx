import { TaskManagerContext } from "@/context/context";
import { useToast } from "@/hooks/use-toast";
import { CallLogOutApi } from "@/service/service";
import { LogOut } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { setUser } = useContext(TaskManagerContext);
  const navigate = useNavigate();
  const { toast } = useToast();

  async function handleLogout() {
    const response = await CallLogOutApi();

    if (response?.success) {
      toast({
        title: "LogOut Done!!",
        description: "Back Soon",
      });
      setUser(null);
      navigate("/auth");
    }
  }

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto h-16 ">
        <div className="flex h-[64px] items-center w-full justify-between">
          <div className="w-auto">
            <h1>Task Manager</h1>
          </div>
          <div className="flex gap-4">
            <Link className="text-black text-xl font-bold" to={"/tasks/list"}>
              Tasks
            </Link>
            <Link
              className="text-black text-xl font-bold"
              to={"/tasks/ScrumBord"}
            >
              ScrumBord
            </Link>
          </div>
          <div>
            <LogOut
              onClick={handleLogout}
              color="#000"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
