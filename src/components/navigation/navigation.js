import { render } from '@testing-library/react';
import React from 'react';

function Navigation(){
    return(
        <nav>
            <ul>
                <li>Page A</li>
                <li>Page B</li>
                <li>Page C</li>
                <li>Page D</li>
            </ul>
        </nav>
    )
}

export default Navigation;