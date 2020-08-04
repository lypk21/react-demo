import React, {Component} from "react";
import PropTypes from 'prop-types'
import "./news-item.sass"
import Moment from 'moment';


export default class NewsItem extends Component {

    /* validate incoming data */
    static propTypes = {
        news: PropTypes.object.isRequired
    } 

    render() {
        /* using props to get data from sup component */
        const {news} = this.props
        return(
            <div className="row">
                <div className="col-sm-2">
                    <div className="news-date">
                        {Moment(news.date).format("DD")}
                    </div>
                    <div className="news-month">
                        {Moment(news.date).format("MMMM")}
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="news-wrap">
                        <h2 className="news-title">{news.title}</h2>
                        <p className="news-text">{news.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}
