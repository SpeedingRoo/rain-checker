import React, { useState } from 'react';
import { SPart, SCard } from '../styles';

const ProjectItem = (props)=>{

    return (
      <a href={props.href}>
        <SPart>
          <SCard>{props.value}</SCard>
        </SPart>
      </a>
    );
}

export default ProjectItem;