import React, {Component} from 'react';
import logo from "../../assets/images/logo.jpg"
import MyNavLink from "../common/myNavLink"
import Cookies from 'js-cookie'
import PubSub from 'pubsub-js'
import "./footer.sass"

export default class Footer extends  Component {
    state = {
        username: Cookies.get('username')
    }
    componentDidMount() {
        /* subscribe login event, once login the login menu will show on footer */
        PubSub.subscribe('login', (message, data) => {
            this.setState({
                username: data
            })
        })
        /* subscribe logout event, once logout the login menu will hide on footer */
        PubSub.subscribe('logout', (message, data) => {
            this.setState({
                username: data
            })
        })
    }
    render() {
        /* control the login menu show or hide */
        const {username} = this.state
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="footer-logo" src={logo}  alt=""/>
                        </div>
                        <div className="col-sm-4">
                            <div className="footer-nav">
                                <MyNavLink  className="nav-header-item" to='/'>Home</MyNavLink>
                            </div>
                            <div className="footer-nav">
                                <MyNavLink className="nav-header-item" to='/news'>News</MyNavLink>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="footer-nav">
                                {!username ? <MyNavLink className="nav-header-item" to='/login'>Login</MyNavLink> : ""}
                            </div>
                            <div className="footer-nav">
                                <MyNavLink className="nav-header-item" to='/profile'>Profile</MyNavLink>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <p className="footer-copyright">Copyright © Pellentesque commodo 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
