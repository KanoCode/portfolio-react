import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavStyles>
      <div id="logo">
        <h1> KanozCode </h1>
      </div>

      <ul>
        <li>
          <Link to="/"> 1. About </Link>
        </li>
        <li>
          <Link to="/porfolio"> 2. Portfolio </Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">3. Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

const NavStyles = styled.nav`
  display: flex;

  justify-content: space-between;
  height: 8vh;
  min-width: 80vw;
  background: #090808;
  #logo {
    display: flex;
    justify-content: flex-start;
    align-content: center;
  }

  h1 {
    /*border: 2px dotted lightgreen;*/
    height: 6vh;
    align-self: center;

    margin-left: 0.5rem;
    font-weight: lighter;
    font-family: "Roboto Mono", cursive;
    font-size: 1.6rem;
  }

  ul {
    width: 50%;
    display: flex;
    align-self: center;
    list-style-type: none;
    justify-content: space-between;
    padding: 0;
    margin: 0 1rem 0;
  }
`;

export default NavBar;
