import "../components/ScrollList.css";
import { Link } from "react-router-dom";


const ScrollList = ({ topics }) => {

    let previousSelection;
    let topic;

    const handleClick = (event) => {

        if (previousSelection) {

            previousSelection.className = topics[previousSelection.value].completed;

        }

        previousSelection = event.target;
        event.target.className = 'selected';

        topic = event.target.textContent;
        console.log(topic);

    }




    let buttonsList = topics.map((topic, index) => {

        return (
            <button className={topic.completed} onClick={handleClick} key={index} value={index}>{topic.name} </button>
        );


    });




    return (
        <>
            <div id="list">
                {buttonsList}
            </div>
            <button id='select'>Select</button>
        </>
    );
}

export default ScrollList;