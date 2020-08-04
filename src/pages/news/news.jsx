import React, {Component} from "react"
import NewsItem from "../../components/common/news-item/newsItem";

import "./news.sass"


export default class  News extends  Component
{
    state = {
        /* hardcore initial news testing data */
        news: [
            {
                id: 1,
                title: "Suspendisse non nisl sit amet",
                content:"Duis leo. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Maecenas vestibulum mollis diam. Pellentesque posuere.",
                date: "2020-01-01"
            },
            {
                id: 2,
                title: "Suspendisse non nisl sit amet",
                content:"Duis leo. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Maecenas vestibulum mollis diam. Pellentesque posuere.",
                date: "2020-02-03"
            },
            {
                id: 3,
                title: "Suspendisse non nisl sit amet",
                content:"Duis leo. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Maecenas vestibulum mollis diam. Pellentesque posuere.",
                date: "2020-03-14"
            },
            {
                id: 4,
                title: "Suspendisse non nisl sit amet",
                content:"Duis leo. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Maecenas vestibulum mollis diam. Pellentesque posuere.",
                date: "2020-04-21"
            },
            {
                id: 5,
                title: "Suspendisse non nisl sit amet",
                content:"Duis leo. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Maecenas vestibulum mollis diam. Pellentesque posuere.",
                date: "2020-05-30"
            },
        ]
    }

    render() {
        const {news} = this.state
        return (
            <div className="container">
                <div className="news-wrap">
                    {
                       /* pass news item to its sub component*/
                        news.map((item) => <NewsItem news={item} key={item.id}></NewsItem>)
                    }
                </div>
            </div>
        );
    }
}
