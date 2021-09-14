import React from 'react';
import { SPart, SCard } from '../styles';

const ProjectItem = (props)=>{

    return (
      <a href={props.href}>
          <SCard ems='2'>{props.value}</SCard>
      </a>
    );
}

export default ProjectItem;