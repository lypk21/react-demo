import React, {Component} from 'react';
import logo from '../../assets/images/logo.jpg'
import './header.sass'
import MyNavLink from "../common/myNavLink"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'js-cookie'
import PubSub from 'pubsub-js'


export default class Header extends  Component {
    state = {
        username: Cookies.get('username')
    }
    componentDidMount() {
        PubSub.subscribe('login', (message, data) => {
            this.setState({
                username: data
            })
        })
    }

    handleLogout = () => {
        Cookies.remove('username')
        this.setState({
            username: ''
        })
        PubSub.publish('logout','')
    }

    render() {
        const {username} = this.state

        return (
            <div>
                <div className="nav-header">
                    <div className="container">
                        <nav className="nav-header-main">
                            <MyNavLink className="nav-header-logo" to='/'>
                                <img src={logo} alt=""/>
                            </MyNavLink>
                            <div className="nav-header-contact">
                                <FontAwesomeIcon icon={faPhone}/><span>1300 000 000</span>
                            </div>

                            <div className="nav-header-user" >
                                {username ? <div onClick={this.handleLogout}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></div> : ""}
                            </div>
                        </nav>
                    </div>
                    <div className="nav-header-menu">
                        <MyNavLink className="nav-header-item" to='/'>Home</MyNavLink>
                        <MyNavLink className="nav-header-item" to='/news'>News</MyNavLink>
                        {!username ? <MyNavLink className="nav-header-item" to='/login'>Login</MyNavLink> : ""}
                        <MyNavLink className="nav-header-item" to='/profile'>Profile</MyNavLink>
                    </div>
                </div>
            </div>
        )
    }
}
