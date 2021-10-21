import './App.css';
import React from 'react';
import Home from './pages/home/home';
import PostPage from './pages/post/postPage';  
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NotFound from './pages/notFound/notFound';
import { Container, Navbar } from 'react-bootstrap'; 
import PostForm from './components/postForm/postForm';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar style={{backgroundColor:"var(--primary-color)"}} >
          <Container><Navbar.Brand style={{fontFamily:"Gochi Hand", fontSize:"1.5em"}}><Link to="/">Dummy Blog</Link></Navbar.Brand></Container>
        </Navbar>

      <div className="main">  
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/create">
              <PostForm/>
            </Route>
            <Route exact path="/:id">
              <PostPage />
            </Route>
            <Route exact path="/:id/edit">
              <PostForm/>
            </Route>
            <Route exact>
              <NotFound/>
            </Route>
          </Switch>
      </div>
      </Router>

      <div className="footer">Copyright &copy; 2021 Dummy Blog</div>
    </div>
  );
}

export default App;
