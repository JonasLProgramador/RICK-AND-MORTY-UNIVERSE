import { NavLink } from "react-router-dom";
import  PropTypes from 'prop-types'
const Header = ({ links }) => {
    Header.propTypes = {
        links: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            to: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
          })
        ).isRequired,
      };

    return (
    <nav className="w-screen h-36 bg-blueViolet flex ">
        <a className="w-32 h-24  mt-3 ml-3 transition duration-150 hover:ease-in hover:scale-110" href="/">
          <img src="./src/assets/iconHeader.png"/>
        </a>
      <ul className="flex gap-4 mt-10 w-full h-full   justify-center align-middle text-center">
        {links.map((link) => (
          <li className="flex  text-4xl text-turquoise h-20  rounded-xl hover:bg-turquoise hover:text-snow " key={link.id}>
            <NavLink to={link.to}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
