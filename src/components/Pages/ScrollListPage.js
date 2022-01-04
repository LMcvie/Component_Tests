import React from "react";
import ScrollList from "../ScrollList";
import './ScrollListPage.css';

const ScrollListPage = () => {

    const topics = [
        { name: 'CSS', completed: 'completed' },
        { name: 'JavaScript', completed: 'notCompleted' },
        { name: 'HTML', completed: 'notCompleted' },
        { name: 'React', completed: 'completed' },
        { name: 'ReactDom', completed: 'completed' },
        { name: 'ReactRouter', completed: 'completed' },
        { name: 'JQuery', completed: 'completed' },
        { name: 'Node', completed: 'notCompleted' }];

    return (
        <div id = 'topicsList'>
            <h2>Topics</h2>
            <ScrollList topics={topics} />
        </div>
    );

}
export default ScrollListPage;