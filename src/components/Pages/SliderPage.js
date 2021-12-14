import React from "react";
import Slider from "../Slider";

const SliderPage = () => {



  const questions = 
  [
    {
      defaultValue: '0',
      text: 'How confident are you with CSS?'
  
    },
    {
      defaultValue: '50',
      text: 'How confident are you working on release?'
    },
    {
      defaultValue:'80',
      text:'How confident are you with react router'
    }

  ]

  const QuestionList = questions.map((question,index) => {
    return (
        <Slider question = {question} key = {index} id= {index}></Slider>
    );
});


  return (
  <div>
    <h4>Slider Page</h4>
   {QuestionList}
    </div>

  );
}

export default SliderPage;
