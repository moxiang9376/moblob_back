//home.js
import React, { Component } from 'react';
// import "./home.scss"
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //文章列表
            articleList: [
                {
                    title: "文章名称",
                    tag: "文章标签",
                    time: "发表时间",
                    intro: "fgasdfsadfsadfsadfasdffsklajdjfklsadjfljdflkasjlfjasldfkjsadjflksadjflsakdjflsakdjflsajdflasjdfjsadlfjasdjfasdkjflsakjdf;asjdfl;aksjfdlkajsdfkjsal;dfja;sf"
                },
                {
                    title: "文章名称",
                    tag: "文章标签",
                    time: "发表时间",
                    intro: "文章简介"
                },
                {
                    title: "文章名称",
                    tag: "文章标签",
                    time: "发表时间",
                    intro: "文章简介"
                },
                {
                    title: "文章名称",
                    tag: "文章标签",
                    time: "发表时间",
                    intro: "文章简介"
                }
            ]
        };
    }

    render() {
        return (
            <div className="home">
                {this.state.articleList.map((item, index) => {
                    return (
                        <div className="home_article_box" key={index}>
                            <div className="article_title">{item.title}</div>
                            <div className="article_time">{item.time}</div>
                            {/* <div className="article_tag">{item.tag}</div> */}
                            <div className="article_intro">{item.intro}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}


