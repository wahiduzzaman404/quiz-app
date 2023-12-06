/* eslint-disable react/jsx-key */
import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who is the author of the Harry Potter book series?",
      answers: [
        {
          text: "J.R.R. Tolkien",
          correct: false,
        },
        {
          text: "J.K. Rowling",
          correct: true,
        },
        {
          text: "George R.R. Martin",
          correct: false,
        },
        {
          text: "Dan Brown",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is the no 1 all rounder in cricket?",
      answers: [
        {
          text: "Virat koli",
          correct: false,
        },
        {
          text: "M.Nabi",
          correct: false,
        },
        {
          text: "Shakib al Hasan",
          correct: true,
        },
        {
          text: "Jack kallis",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who is President of North Korea?",
      answers: [
        {
          text: "Shaikh Hasina",
          correct: false,
        },
        {
          text: "M.Nabi",
          correct: false,
        },
        {
          text: "Kim j. un",
          correct: true,
        },
        {
          text: "Modi",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What country has the highest life expectancy?",
      answers: [
        {
          text: "Hong Kong",
          correct: true,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Nepal",
          correct: false,
        },
        {
          text: "Croatia",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What character have both Robert Downey Jr. and Benedict Cumberbatch played?",
      answers: [
        {
          text: "Iron Man",
          correct: false,
        },
        {
          text: "Loki",
          correct: false,
        },
        {
          text: "Sherlock Holmes",
          correct: true,
        },
        {
          text: "Dr.Strange",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the largest ocean in the world?",
      answers: [
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Arctic Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "What is the official language of Brazil?",
      answers: [
        {
          text: "Spanish",
          correct: false,
        },
        {
          text: "Portuguese",
          correct: true,
        },
        {
          text: "French",
          correct: false,
        },
        {
          text: "English",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which continent is the most populous?",
      answers: [
        {
          text: "Asia",
          correct: true,
        },
        {
          text: "Africa ",
          correct: false,
        },
        {
          text: "Europe",
          correct: false,
        },
        {
          text: "North America",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who among the following player scores highest number of goals in Footbal World Cup?",
      answers: [
        {
          text: "Jurgen Klinsmann",
          correct: false,
        },
        {
          text: "Meradona",
          correct: false,
        },
        {
          text: "Miroslave Klose",
          correct: true,
        },
        {
          text: "Pele",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which of the following country hosted the first Football World Cup?",
      answers: [
        {
          text: "America",
          correct: false,
        },
        {
          text: "Argentina",
          correct: false,
        },
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "Uruguay",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "When was first official international football match was played?",
      answers: [
        {
          text: "1929",
          correct: false,
        },
        {
          text: "1872",
          correct: true,
        },
        {
          text: "1902",
          correct: false,
        },
        {
          text: "1870",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which country became the first nation to win the Football World Cup?",
      answers: [
        {
          text: "Uruguay",
          correct: true,
        },
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Argentina",
          correct: false,
        },
        {
          text: "Belgium",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "South Korea",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "Thailand",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;