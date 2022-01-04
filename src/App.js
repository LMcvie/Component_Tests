
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
        <Route path="/Component_Tests/*" element={<SliderPage/>}/>
          <Route path="/Component_Tests/Slider" element={<SliderPage/>}/>
          <Route path ="/Component_Tests/Progress" element ={<ProgressBarPage/>}/>
          <Route path ="/Component_Tests/Spider" element = {<SpiderChartPage/>}/>
          <Route path = "/Component_Tests/ScrollList" element ={<ScrollListPage/>}/>
          {/* <Route path ='/*' element ={<ErrorPage/>}/>  */}
        </Routes>
      </Router>
    </>
  )

}

export default App;
