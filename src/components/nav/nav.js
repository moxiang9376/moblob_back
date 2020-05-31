import React from 'react';
import "./nav.scss"
import { withRouter } from "react-router-dom"
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navTitle: "error仓库",
            navTabList: [
                {
                    title: "首页",
                    path: "/home"

                },
                {
                    title: "归档",
                    path: "/list"
                },
                {

                    title: "关于",
                    path: ""
                }
            ],
            authorInfo: {
                headImg:"",
                // require("../../static/img/head.jpeg"),
                name: "羽浪",
                say: {
                    cn: "解决问题",
                    en: "hello world"
                }
            }
        };
    }

    //页面跳转
    goPage = (path) => {
        console.log(path)
        console.log(this.props)
        this.props.history.push(path)
    };

    render() {
        return (
            <div className="nav">
                <div className="nav_title">{this.state.navTitle}</div>
                <div>
                    {/* 渲染导航栏按钮 */}
                    {this.state.navTabList.map((item, index) => {
                        return (
                            <div key={index}>
                                <div onClick={() => this.goPage(item.path)} className="nav_title_text">{item.title}</div>
                            </div>
                        );
                    })}
                </div>

                {/* 作者简介 */}
                <div className="nav_author_info">
                    <img src={this.state.authorInfo.headImg}></img>
                    <div>
                        {this.state.authorInfo.name}
                    </div>
                    <div>
                        <span>{this.state.authorInfo.say.cn}</span>
                        <span>{this.state.authorInfo.say.en}</span>
                    </div>
                </div>
            </div>
        )
    }
}
// 导出的是 withRouter(Nav) 函数执行
export default withRouter(Nav)