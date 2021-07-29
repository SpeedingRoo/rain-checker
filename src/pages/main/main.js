import React from 'react';
import { SBody } from '../../components/styles';
import logo from '../../logo.svg';

const MainPage = () => {
    return (
        <SBody className='main-page'>
            <section>
                <p>
                    lorem epsorem blah blah blah xiao mo xian miao miao wu
                </p>
            </section>
            <section>
                <aside>
                    <h1>
                        here's aside content
                    </h1>
                </aside>
            </section>
            <section>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </section>
            <section>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn THE React
                </a>
            </section>
        </SBody>
    );
};

export default MainPage;