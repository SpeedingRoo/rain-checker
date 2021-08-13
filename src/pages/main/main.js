import React, { useState, useEffect } from 'react';
import { SBody, SForm, SInput, SButton } from '../../components/styles';

const MainPage = () => {

    const [city,setCity] = useState();
    const [counter,setCounter] = useState(0)

    function minus() {
        setCounter(counter-1);
    }        

    function plus() {
        setCounter(counter+1);
    }

    function reset() {
        setCounter(0);
    }

    useEffect(()=>{
        
    })


    return (
        <SBody className='main-page'>
            <section>
                <SForm>
                    <SInput type='text' value=''/>
                </SForm>
            </section>
            <section>
            <SButton onClick={setCity} >Check</SButton>
                <span>{city}</span>
                <aside>
                    <h1> 
                        here's aside content in the Section 2 Content
                    </h1>
                </aside>
                <button onClick={plus}>
                    PLUS + 
                </button>
                <button onClick={reset}>
                    / refresh /
                </button>
                <button onClick={minus}>
                    MINUS - 
                </button>
            </section>
            <section>

                <p>
                   Section 3 Content.
                </p>
                <p>
                    clicked <span>{counter}</span> times
                </p>
            </section>
            <section>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Section 4 Content
                </a>
            </section>
        </SBody>
    );
};

export default MainPage;