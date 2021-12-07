import React from "react";
import Slider from "../Slider";

const SliderPage = () => {

  const QuestionList= [ <Slider defaultValue = '0' key = '0'text = 'How comfortable are you with CSS?'/>, <Slider defaultValue = '50' key = '1' text = 'How comfortable are you working on release?'/>];

  return (
  <div>
    <h4>Slider Page</h4>
   {QuestionList}
    </div>

  );
}

export default SliderPage;
