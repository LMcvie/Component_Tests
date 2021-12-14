
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProgressBarPage from './components/Pages/ProgressBarPage';
import SliderPage from './components/Pages/SliderPage';
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
          <Route path="/Compontent_Tests" element={<ProgressBarPage/>}/>
          <Route path ="/Compontent_Tests/Slider" element ={<SliderPage/>}/>
          <Route path ="/Compontent_Tests/Spider" element = {<SpiderChartPage/>}/>
          <Route path ='/*' element ={<ErrorPage/>}/> 
        </Routes>
      </Router>
    </>
  )

}

export default App;
