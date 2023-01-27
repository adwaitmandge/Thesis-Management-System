import dynamic from "next/dynamic";
// import Table from "../components/table";
import Link from "next/link";
import StudentView from "../components/StudentView";
import { ChatState } from "../Context/ChatProvider";
import ProfessorView from "../components/ProfessorView";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { user } = ChatState();

  if (user?.role === "Professor") {
    return (
      <div className="flex w-[100%]">
        <ProfessorView />
      </div>
    );
  } else if (user?.role === "Student") {
    return (
      <div className="flex w-[100%] ">
        <StudentView />
      </div>
    );
  }
};
export default Dashboard;
