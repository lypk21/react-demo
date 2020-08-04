import React, {Component} from "react"
import './home.sass'

export default class  Home extends  Component
{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="home-wrap">
                            <div className="home-title">Integer ante arcu accumsan</div>
                            <div className="home-text">
                                <p>Maecenas malesuada. Nunc interdum lacus sit amet orci. Curabitur blandit mollis lacus. Morbi mollis tellus ac sapien. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl.</p>
                                <p>Fusce egestas elit eget lorem. In ac felis quis tortor malesuada pretium. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Praesent nonummy mi in odio. Morbi vestibulum volutpat enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img className="home-img" src="http://placehold.it/600x300" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="home-img"  src="http://placehold.it/600x300" alt=""/>
                    </div>
                    <div className="col-sm-6">
                        <div className="home-wrap">
                            <div className="home-title">Integer ante arcu accumsan</div>
                            <div className="home-text">
                                <p>Maecenas malesuada. Nunc interdum lacus sit amet orci. Curabitur blandit mollis lacus. Morbi mollis tellus ac sapien. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl.</p>
                                <p>Fusce egestas elit eget lorem. In ac felis quis tortor malesuada pretium. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Praesent nonummy mi in odio. Morbi vestibulum volutpat enim.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-lg-5">
                    <div className="col-sm-4">
                        <div className="card bg-light">
                            <img className="card-img-top" src="http://placehold.it/300x150" alt=""/>
                            <div className="card-header">
                                <h2>Sed in libero</h2></div>
                            <div className="card-body">
                                <p className="card-text">Ut id nisl quis enim dignissim sagittis. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Curabitur a felis in nunc fringilla tristique. Praesent venenatis metus at tortor pulvinar varius. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card bg-light">
                            <img className="card-img-top" src="http://placehold.it/300x150" alt=""/>
                            <div className="card-header">
                                <h2>Sed in libero</h2></div>
                            <div className="card-body">
                                <p className="card-text">Ut id nisl quis enim dignissim sagittis. Etiam sollicitudin,
                                    ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit
                                    amet eros. Curabitur a felis in nunc fringilla tristique. Praesent venenatis metus
                                    at tortor pulvinar varius. Curabitur ligula sapien, tincidunt non, euismod vitae,
                                    posuere imperdiet, leo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card bg-light">
                            <img className="card-img-top" src="http://placehold.it/300x150" alt=""/>
                            <div className="card-header">
                                <h2>Sed in libero</h2></div>
                            <div className="card-body">
                                <p className="card-text">Ut id nisl quis enim dignissim sagittis. Etiam sollicitudin,
                                    ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit
                                    amet eros. Curabitur a felis in nunc fringilla tristique. Praesent venenatis metus
                                    at tortor pulvinar varius. Curabitur ligula sapien, tincidunt non, euismod vitae,
                                    posuere imperdiet, leo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
