import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/layout/Header'
import Volunteers from './components/volunteer/Volunteers';
import Page from './components/volunteer/Page';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import Chat from './components/chat/Chat';
import Home from './components/Home/Home';
import Footer from './components/layout/Footer';
import store from './store';
import {Provider} from 'react-redux';

class App extends React.Component{
  render(){
    return(
      <Provider store={store}> 
        <Router>
          <Header />
      
            <Route exact path="/" component={Home} />
            <Route exact path="/volunteers" component={Volunteers} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/page/:id" component={Page} />
            <Footer />
        
        </Router>
      </Provider>
    );
  }
}

export default App;