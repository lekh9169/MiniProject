import React from 'react';
import ReactDom from 'react-dom';
import App from '../components/App';
import 'antd/dist/antd.css';


if(module.hot){
    module.hot.accept()
}
var rootElement = document.getElementById('root')
ReactDom.render(<App />,rootElement)