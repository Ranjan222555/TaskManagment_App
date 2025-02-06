import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./Pages/auth/authpage";
import TaskPage from "./Pages/task/taskpage";
import ScrumBordPage from "./Pages/Scrum-Bord/scrum-bordpage";
import CommonLayout from "./components/common-Layout/Common-layout";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/tasks" element={<CommonLayout />}>
        <Route path="list" element={<TaskPage />} />
        <Route path="ScrumBord" element={<ScrumBordPage />} />
      </Route>
    </Routes>
  );
}

export default App;
