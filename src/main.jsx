import React, {Component} from 'react';
import {Route, Switch,Redirect} from 'react-router-dom'

import Home from "./pages/home/home";
import News from "./pages/news/news";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default class Main extends Component {
    render() {
        return(
            <div>
                <Header></Header>
                <Switch>
                   {/* without exact, / also match other routes */}
                    <Route exact path='/' component={Home} />
                    <Route path='/news' component={News} />
                    <Route path='/login' component={Login} />
                    <Route path='/profile' component={Profile} />
                    <Redirect to='/' />
                </Switch>
                <Footer></Footer>
            </div>
        )
    }
}
