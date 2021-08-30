import React from "react";
import { SBody, SPart, SButton, SH1 } from "../../components/styles";
import Card from '../../components/card';
import ProjectList from "../../components/project_list/project_list";

const ProjectsPage = () => {

  const project_URL = "https://www.reactjs.org"

  const addProject = ()=>{
    return(
        <a href={project_URL}>
          <Card roundEdge={true}>
            <h2>
              The ... Project
            </h2>
          </Card>
        </a>
    )
  }

  return (
    <SBody>
      <SH1 ems='2.6' font='carter_one'> Projects I have done is none </SH1>

      <ProjectList  />

      <SPart>
        <SButton type='button' onClick={addProject}>
          Add a New Project
        </SButton>
        <SButton type='button'>
          Remove a Project
        </SButton>
      </SPart>
    </SBody>
  );
};

export default ProjectsPage;
