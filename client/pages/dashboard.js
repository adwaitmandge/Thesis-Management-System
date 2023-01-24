import dynamic from "next/dynamic";
// import Table from "../components/table";
import homeStyles from "../styles/Home.module.css";
import ProgressBar from "../components/progress-bar";
import LinearWithValueLabel from "../components/linearprogresswithlabel";
import Link from "next/link";
import Todolist from "../components/Todolist";

const Dashboard = () => {
  return (
    <div className="flex w-[100%] ">
      <Todolist />
    </div>
  );
};
export default Dashboard;