import {Link} from "react-router-dom";

const NavBar = () => {

  return(
      //simple a href links to the different pages
    <ul>
      <li>
        <Link to="/">ProgressBar</Link>
      </li>
      <li>
        <Link to="/about">Slider</Link>
      </li>
      <li>
        <Link to="/pricing">SpiderChart</Link>
      </li>
    </ul>
  )

}

export default NavBar;