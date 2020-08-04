import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Main from "./main";

import './assets/css/site.sass'


ReactDOM.render(
    /*using react router*/
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
  document.getElementById('root')
);
