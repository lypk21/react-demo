import React, {Component} from "react"
import "./login.sass"
import Cookies from 'js-cookie'
import {Redirect} from "react-router-dom";
import PubSub from 'pubsub-js'

export default class  Login extends  Component
{
    state = {
        username: '',
        password: '',
        errMsg: ''
    }

    componentDidMount() {
       /* listen to logout event, once logout, update the username state and trigger render, hide the login menu */
        PubSub.subscribe('logout', (message, data) => {
            this.setState({
                username: data
            })
        })
    }

    handleChange = (e) => {
        /* binding state with form inputs, for both username and password */
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    login = () => {
        const {username,password} = this.state
        /* hardcore for Admin */
        if(username !== 'Admin' || password !== '12345') {
            this.setState({errMsg : 'username/password invalid'})
            return
        }

        //set cookies username and expire 1 day
        Cookies.set('username', username, { expires: 1 })
        //once login, publish login event, so other components can subscribe this event,change their state and rerender
        PubSub.publish('login',username)
        this.props.history.replace('/profile')
    }

    render() {
        const cookieUsername = Cookies.get('username')
        //if username already in Cookie, redirect to profile
        if(cookieUsername) return <Redirect to='/profile' />

        const {errMsg,username,password} = this.state
        return (
            <div className="login-wrap">
                <div className="login-triangle"></div>

                <h2 className="login-header">Log in</h2>

                <div className="login-container">
                    <p><input type="text" name="username"  value={username} onChange={this.handleChange}  placeholder="Username" /></p>
                    <p><input type="password" name="password" value={password}  onChange={this.handleChange}  placeholder="Password" /></p>
                    <p><input type="submit" onClick={this.login} value="Log in" /></p>
                    {errMsg ? <p className="err-message">{errMsg}</p> : ""}
                </div>
            </div>
        );
    }
}
