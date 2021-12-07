
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
          <Route path="/" element={<ProgressBarPage/>}/>
          <Route path ="/about" element ={<SliderPage/>}/>
          <Route path ="/pricing" element = {<SpiderChartPage/>}/>
          <Route path ='/*' element ={<ErrorPage/>}/> 
        </Routes>
      </Router>
    </>
  )

}

export default App;
