import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      {/* metadata */}
      <head>
       <title>Rain Checker Site</title>
      </head>
      {/* page body */}
      <body className="App-header">
        {/* page header */}
        <Header />
        {/* navigation */}
        <Navigation />
        {/* main content */}
        <main>
          <section>
            <p>
              lorem epsorem blah blah blah xiao mo xian miao miao wu
            </p>
          </section>
          <aside>
            <h1>
              here's aside content
            </h1>
          </aside>
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </section>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn THE React
          </a>
        </main>
        {/* footer */}
        <Footer />
      </body>
    </div>
  );
}

export default App;
