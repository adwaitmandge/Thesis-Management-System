import react, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Link, useToast } from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";
import UploadModal from "../../components/miscellaneous/UploadModal";
import { supabase } from "../../config/supabaseClient";
import FeedbackModal from "../../components/miscellaneous/FeedbackModal";

const uploads = () => {
  const { user } = ChatState();
  const [bucketData, setBucketData] = useState([]);
  const router = useRouter();
  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [allThesis, setAllThesis] = useState([]);
  const [selectedThesis, setSelectedThesis] = useState({});
  const [thesis, setThesis] = useState({
    title: "",
    professor: "",
    student: "",
    path: "",
    status: "",
  });

  const sendFeedback = async (thesis, feedback) => {
    if (!feedback.title || !feedback.body) {
      console.log("The body or title is empty");
      return;
    }

    const body = {
      id: thesis._id,
      feedback,
    };

    try {
      const res = await fetch(
        "http://localhost:5000/api/professor/thesis/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(body),
        }
      );

      const data = await res.json()
      setShowFeedbackModal(false);
      setSelectedThesis({});
    } catch (err) {
      console.error(err.message);
    }
  };

  const downloadThesis = () => {};

  const statusHandler = () => {};

  const downloadFiles = async (fileName) => {
    try {
      console.log("Inside download files at the frontend");
      console.log("About to send a get request");

      const res = await fetch(
        `http://localhost:5000/api/uploads?fileName=${fileName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      console.log("After the req");
      console.log(res);

      const data = await res.json();

      console.log(data);
      toast({
        title: "File Downloaded",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.log("ERROR OCCURRED WHILE FETCHING FILES");
      console.log(error);
    }
  };

  const getDataFromBackend = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/professor/thesis", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await res.json();
      console.log(data);
      setAllThesis(data);
    } catch (err) {
      console.log("Error occurred while getting data from the backend");
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDataFromBackend();
  }, [user]);

  //   className="flex min-h-scree flex-col items-center justify-center py-2 "
  return (
    <>
      <div class="relative flex justify-center items-center overflow-x-auto rounded overflow-hidden shadow-lg m-3 mt-10 cursor-pointer">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Thesis Name
              </th>
              <th scope="col" class="px-6 py-3">
                student
              </th>
              <th scope="col" class="px-6 py-3">
                Professor
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Review
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {allThesis?.map((data) => {
              console.log("The thesis is", data);
              return (
                <tr
                  key={data._id}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <span onClick={downloadThesis}>{data.title}</span>
                  </th>
                  <td class="px-6 py-4">{data?.creator_student?.name}</td>
                  <td class="px-6 py-4">{data?.professor?.name}</td>
                  <td class="px-6 py-4">{data.status}</td>
                  <td
                    class="px-6 py-4"
                    onClick={() => {
                      setSelectedThesis(data);
                      setShowFeedbackModal(true);
                    }}
                  >
                    {user.role == "Student" ? "View Feedback" : "Send Feedback"}
                  </td>
                  <td
                    class="px-6 py-4 text-blue-600 hover:text-blue-800"
                    onClick={statusHandler}
                  >
                    Edit
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {showFeedbackModal && (
        <FeedbackModal
          thesis={selectedThesis}
          isVisible={showModal}
          sendFeedback={sendFeedback}
          onClose={() => {
            setShowFeedbackModal(false), setSelectedThesis({});
          }}
        />
      )}
    </>
  );
};

export default uploads;
