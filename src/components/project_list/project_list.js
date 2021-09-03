import React from 'react';
import ProjectItem from '../project_item';

const ProjectList = ()=>{
    
    const href='https://github.com/SpeedingRoo';

    const projects = [
        ['1','MiniLuck'],
        ['2','DrivePass'],
        ['3','MoatTracker'],
        ['4','AmberMoments-Studio'],
    ];

    return(
        <ul>
            {projects.map(
                (i) => {
                    return (
                      <li key={i[0]}>
                        <ProjectItem value={i[1]} href={href} />
                      </li>
                    );
                }
            )}
        </ul>
    );
}

export default ProjectList;