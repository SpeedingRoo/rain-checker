import React from "react";
import { SBody, SCardHeader } from "../../components/styles";

const ProjectsPage = () => {
  return (
    <SBody>
      <h1> Projects I have done is none </h1>
      <a href="https://github.com/SpeedingRoo">
        <SCardHeader>
          <h2>
            The <span>MiniLuck</span> Project
          </h2>
        </SCardHeader>
      </a>
      <SCardHeader>
        <h2>
          <a href="https://github.com/SpeedingRoo">
            The <span>DrivePass</span> Project
          </a>
        </h2>
      </SCardHeader>
      <SCardHeader>
        <h2>
          <a href="https://github.com/SpeedingRoo">
            The <span>AmberMoments Studio</span> Project
          </a>
        </h2>
      </SCardHeader>
      <SCardHeader>
        <h2>
          <a href="https://github.com/SpeedingRoo">
            The <span>unknown</span> Project
          </a>
        </h2>
      </SCardHeader>
    </SBody>
  );
};

export default ProjectsPage;
