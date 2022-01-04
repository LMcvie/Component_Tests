import {Link} from "react-router-dom";

const NavBar = () => {

  return(
      //simple a href links to the different pages
    <ul>
      <li>
        <Link to="/Component_Tests/Slider">Slider</Link>
      </li>
      <li>
        <Link to="/Component_Tests/Progress">ProgressBar</Link>
      </li>
      <li>
        <Link to="/Component_Tests/Spider">SpiderChart</Link>
      </li>
      <li>
        <Link to="/Component_Tests/ScrollList">ScrollList</Link>
      </li>
    </ul>
  )

}

export default NavBar;