/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from "react";
import useSound from "use-sound";


export default function Trivia({
    data,
    questionNumber,
    setQuestionNumber,
    setTimeOut,
  }) {

    const[question,setQuestion]=useState(null)
    const[selectedAnswer,setSelectedAnswer]=useState(null)
    const [className, setClassName] = useState("answer");
  

    useEffect(() => {
      setQuestion(data[questionNumber-1])

    },[data,questionNumber]);


    const delay = (duration, callback) => {
      setTimeout(() => {
        callback();
      }, duration);
    };
  


    const handleClick=(a)=>{
      setSelectedAnswer(a)
      setClassName('answer active')
      delay(3000,()=>{setClassName(a.correct ? "answer correct" : "answer wrong");})

      delay(6000,()=>{
        if(a.correct){
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        }
        else{
          setTimeOut(true)
        }
      })
  
    }
    
    
  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
        {question?.answers.map((a) => (
          <div
          className={selectedAnswer === a ? className : "answer"}
           onClick={()=>handleClick(a)}>
            {a.text}
          </div>
        ))}
      </div>
        
    </div>
  )
}
