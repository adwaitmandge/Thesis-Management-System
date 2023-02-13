import { useEffect, useState } from "react";
import { ChatState } from "../../../Context/ChatProvider";
import { useRouter } from "next/router";

const Feedback = () => {
  const { user } = ChatState();
  const router = useRouter();
  const {
    query: { id },
  } = router;

  console.log(id);

  const [allFeedbacks, setAllFeedbacks] = useState([]);

  const getFeedbacks = async () => {
    console.log("About to send a post request");
    try {
      const res = await fetch(
        `http://localhost:5000/api/thesis/feedback?id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
            id: id,
          },
        }
      );

      const data = await res.json();
      console.log(data);

      setAllFeedbacks(data);
    } catch (err) {
      console.log("Error occurred while getting feedbacks at the frontend");
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, [user, router.isReady]);

  return (
    <div className="m-2">
      {allFeedbacks?.map((feedback) => {
        return (
          <span
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow my-2 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {feedback.title}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {feedback.body}
            </p>
          </span>
        );
      })}
    </div>
  );
};

export default Feedback;
