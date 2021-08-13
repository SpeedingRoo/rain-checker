import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Main from './pages/main/index';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projects';
import ContactPage from './pages/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* page body */}
        {/* page header */}
        <Header />
        {/* navigation */}
        <Router className='main-content'>
          {/* Navigation里面包含了 Link 相当于提供了一个头绪让你可以顺着这个Link转到合适的页面 */}
          <Navigation />
          {/* 在switch里面是放具体的页面供选择，这些页面分别被放在对应的Route里面，通过Route的 path 属性就和上面Link里面的 to 属性联系
          在一起了，如果点击了某个Link，react-router-dom库就会帮你做：展示所点击的这个链接对应的组件（页面），并且隐藏其他页面 */}
          <Switch>
            {/* 要注意的是因为库自己设计的原因，会从Switch里面第一个匹配到的path跳出，所以主页除了写path=‘/’，一定
            要写 exact， 这样的话解析其他path的时候，就不会因为先解析到 ‘/’ 而提前跳出转到主页了 */}
            <Route path='/' exact>
              {/* main content */}
              <Main />
            </Route>
            <Route path='/about'><AboutPage /></Route>
            <Route path='/projects'><ProjectsPage /></Route>
            <Route path='/contact'><ContactPage /></Route>
          </Switch>
        </Router>
        {/* page footer */}
        <Footer />
    </div>
  );
}

export default App;