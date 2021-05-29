import React from "react";
import styled from "styled-components";
import Kano_transparent_bckgnd from "../IMAGES/Kano_transparent_bckgnd.png";
import SocialLinks from "./Social-links";
import Typewriter from "typewriter-effect";
//Framer Motion
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <ImageStyled>
      <div className="StyledSocial">
        <SocialLinks />
      </div>
      <div className="description">
        <div>
          <h1 id="Name">Kanombola Kanombola </h1>
        </div>

        <div className="content">
          <Typewriter
            options={{
              strings: [
                " UI & UX designer",
                "Web Developer",
                "Mobile App Developer",
                "Tech Enthusiast...",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div>
          <h2>
            Let Me{" "}
            <motion.span
              animate={{ opacity: 1, transition: { duration: 4 } }}
              initial={{ opacity: 0 }}
            >
              CREATE{" "}
            </motion.span>
            Your Online Presence
          </h2>
        </div>
        <button>Get in touch</button>
      </div>

      <img src={Kano_transparent_bckgnd} alt="A picture of website owner" />
    </ImageStyled>
  );
};

const ImageStyled = styled.div`
  display: flex;
  width: 100vw;
  padding-top: 0;
  position: relative;
  padding: 0 0.8rem;
  justify-content: space-between;
  box-sizing: border-box;
  span {
    color: #0099ff;
    font-weight: 700;
  }

  img {
    width: 36%;
    height: 30%;
    padding: 0 2rem;
    margin: 0;
    align-self: flex-end;
  }
  h2 {
    font-weight: lighter;
  }
  #Name {
    font-size: xx-large;
    font-size: bolder;
  }
  .description {
    box-sizing: border-box;

    width: 60%;
    height: 30%;
    align-self: center;
  }
  .content span {
    height: 10vh;
    font-size: 2rem;

    color: #0099ff;
  }

  .StyledSocial {
    position: absolute;
    left: 1rem;
    bottom: 0;
    width: 40%;
  }
`;

export default AboutMe;
