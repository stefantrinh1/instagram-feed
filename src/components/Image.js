import React from "react";
import Likes from "./Likes";
import Comments from "./Comments";

class Image extends React.Component {

    render() {
    const JSX = (
    <div>
        <h1>Testing</h1>

        <img src={this.props.photoJSON} alt ="" />
        
        {/* <Likes likes={props.likes} />
        <Comments comments={props.comments} /> */}
    </div>
        )
        return JSX
    }

};

export default Image;