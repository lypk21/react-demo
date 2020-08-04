import React, {Component} from "react"
import './profile.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import Cookies from 'js-cookie'
import {Redirect} from "react-router-dom";
import PubSub from "pubsub-js";


export default class  Profile extends  Component
{
    state = {
        username: Cookies.get('username')
    }

    componentDidMount() {
        /* subscribe logout event and update the username state, trigger render*/
        PubSub.subscribe('logout', (message, data) => {
            this.setState({
                username: data
            })
        })
    }

    render() {
        /* once logout, the profile is not allowed to visited, will redirect to login page*/
        const {username} = this.state
        if(!username) return <Redirect to="/login" />
        return (
            <div className="container profile-card">
                <div className="card bg-light">
                    <div className="card-avatar">
                        <img src="http://placehold.it/300x300" alt=""/>
                    </div>
                    <div className="card-header">
                        <FontAwesomeIcon icon={faUser}/> Praesent nec
                    </div>
                    <div className="card-body">
                        {username ? <div className="card-text"><FontAwesomeIcon icon={faAddressCard}/> Fusce risus nisl viverra et</div> : ""}
                        <div className="card-desc">
                            Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Phasellus tempus. Sed cursus turpis vitae tortor. Suspendisse non nisl sit amet velit hendrerit rutrum. Sed in libero ut nibh placerat accumsan.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
