import dynamic from "next/dynamic";
// import Table from "../components/table";
import Link from "next/link";
import StudentView from "../components/StudentView";
import { ChatState } from "../Context/ChatProvider";
import ProfessorView from "../components/ProfessorView";

const Dashboard = () => {
  const { user } = ChatState();

  if (0) {
    return (
      <div className="flex w-[100%]">
        <ProfessorView />
      </div>
    );
  }
  return (
    <div className="flex w-[100%] ">
      <StudentView />
    </div>
  );
};
export default Dashboard;
