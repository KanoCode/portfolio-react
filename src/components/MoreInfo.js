import React from "react";
import styled from "styled-components";

const MoreInfo = () => {
  return (
    <>
      <ProgressBarsStyles>
        <div className="skills">
          <div className="progress">
            <div className="skill-and-progress-bar">
              <span className="skill">
                <i className="val">HTMl</i>
              </span>
              <div class="progress-bar-wrap eachSkill ">
                <div
                  class="progress-bar "
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="progress">
            <div className="skill-and-progress-bar">
              <span className="skill">
                <i className="val">CSS</i>
              </span>
              <div class="progress-bar-wrap eachSkill ">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="progress">
            <div className="skill-and-progress-bar">
              <span className="skill">
                <i className="val">PHP</i>
              </span>
              <div class="progress-bar-wrap eachSkill ">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="progress">
            <div className="skill-and-progress-bar">
              <span className="skill">
                <i className="val">JavaScript</i>
              </span>
              <div class="progress-bar-wrap eachSkill ">
                <div
                  class="progress-bar "
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="progress">
            <div className="skill-and-progress-bar">
              <span className="skill">
                <i className="val">Reactjs</i>
              </span>
              <div class="progress-bar-wrap  eachSkill">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="progress">
            <div className="skill-and-progress-bar">
              <span className="skill">
                <i className="val">figma</i>
              </span>
              <div class="progress-bar-wrap eachSkill ">
                <div
                  class="progress-bar figma"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </ProgressBarsStyles>
    </>
  );
};

const ProgressBarsStyles = styled.div`
  .skills {
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 60vh;
    box-sizing: border-box;

    margin: 5rem 0.5rem 0 0.6rem;
    .progress {
      border: 3px #c8db1a solid;

      display: flex;
      height: 2.1rem;
      width: 100%;
    }
    .skill-and-progress-bar {
      display: flex;
      border: 3px lightcoral solid;
      width: 100%;
      height: 1.4rem;
      .eachSkill {
        margin-left: 10rem;
      }
    }
    .progress-bar-wrap {
      justify-self: flex-end;
      height: 10px;
      width: 100%;
      margin: 0.2rem 4rem 0 4rem;
      border-radius: 8px;

      border: 3px #c4c4c4 solid;
    }
    .progress-bar {
      box-sizing: border-box;
      border-radius: 5px;

      width: 50%;
      height: 10px;
      background-color: #579c50;
    }
    .skill {
      padding: 4px 0;
      margin: 0 0 6px 0;
      text-transform: uppercase;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      color: #45505b;
    }
  }
`;

export default MoreInfo;
