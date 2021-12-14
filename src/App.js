
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SliderPage from './components/Pages/SliderPage';
import ProgressBarPage from './components/Pages/ProgressBarPage';
import SpiderChartPage from './components/Pages/SpiderChartPage';
import NavBar from './components/NavBar';
import ErrorPage from './components/Pages/ErrorPage';


const App = ()=> {

  return (

    //new way of doing router stuff
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/Compontent_Tests/" element={<SliderPage/>}/>
          <Route path ="/Compontent_Tests/Progress" element ={<ProgressBarPage/>}/>
          <Route path ="/Compontent_Tests/Spider" element = {<SpiderChartPage/>}/>
          <Route path ='/*' element ={<ErrorPage/>}/> 
        </Routes>
      </Router>
    </>
  )

}

export default App;
