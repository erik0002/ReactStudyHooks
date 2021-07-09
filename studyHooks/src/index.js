import React from 'react';
import ReactDOM from 'react-dom';
//import App from "./App";
import Routes from 'pages/routes';
import TopBar from 'components/topBar';
import {BrowserRouter as Router} from 'react-router-dom';

// import App from './App';
//import reportWebVitals from './reportWebVitals';

const App = () => {
    return (
        <div>
            <Router>
                <TopBar/>
                <Routes/>
            </Router>
        </div>
    )
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


