import React from 'react';
import ProjectItem from '../project_item';
import { SUl } from '../styles';

const ProjectList = (props)=>{
    
    const href='https://github.com/SpeedingRoo';

    return(
        <SUl vertical={false}>
            {props.projects.map(
                (i) => {
                    return (
                      <li key={i[0]}>
                        <ProjectItem value={i[1]} href={href} />
                      </li>
                    );
                }
            )}
        </SUl>
    );
}

export default ProjectList;