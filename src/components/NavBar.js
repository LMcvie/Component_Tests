import {Link} from "react-router-dom";

const NavBar = () => {

  return(
      //simple a href links to the different pages
    <ul>
      <li>
        <Link to="/Compontent_Tests/">Slider</Link>
      </li>
      <li>
        <Link to="/Compontent_Tests/Progress">ProgressBar</Link>
      </li>
      <li>
        <Link to="/Compontent_Tests/Spider">SpiderChart</Link>
      </li>
    </ul>
  )

}

export default NavBar;