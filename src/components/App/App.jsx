import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

export default function App() {
  // const handlClick = () => {
  //   console.log("ZMIACK");
  // };
  // __________________________________________
  // const [clicks, setClicks] = useState(0);

  // const updateClicks = () => {
  //   setClicks(clicks + 1);

  // };

  // const resetClicks = () => {
  //   setClicks(0);
  // };

  // _________________homework_________________________

  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem("feedback");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (type) => {
    if (type === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback({ ...feedback, [type]: feedback[type] + 1 });
    }
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      {/* // ____________classWork______________________________ */}
      {/* <button onClick={handlClick}>ЖМЯК</button>
      <button
        onClick={(e) => {
          console.log(e);
        }}
      >
        EVT
      </button> */}
      {/* _______________________ */}
      {/* <button onClick={updateClicks}>Clicks {clicks}</button>
      <button onClick={resetClicks}>Reset Clicks </button> */}
      {/* _______________________ */}
      {/* // ______________homework____________________________ */}
      <Description />
      <Options updateFeedback={updateFeedback} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} total={totalFeedback} />
      ) : (
        "not feedback yet"
      )}
    </>
  );
}
