
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SliderPage from './components/Pages/SliderPage';
import ProgressBarPage from './components/Pages/ProgressBarPage';
import SpiderChartPage from './components/Pages/SpiderChartPage';
import NavBar from './components/NavBar';
import ErrorPage from './components/Pages/ErrorPage';
import ScrollListPage from './components/Pages/ScrollListPage'


const App = ()=> {

  return (

    //new way of doing router stuff
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/Slider" element={<SliderPage/>}/>
          <Route path ="/Progress" element ={<ProgressBarPage/>}/>
          <Route path ="/Spider" element = {<SpiderChartPage/>}/>
          <Route path = "/ScrollList" element ={<ScrollListPage/>}/>
          <Route path ='/*' element ={<ErrorPage/>}/> 
        </Routes>
      </Router>
    </>
  )

}

export default App;
