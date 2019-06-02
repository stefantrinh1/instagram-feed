import React from 'react';
import Image from './Image';

class InstagramFeed extends React.Component {

    state = {
        instagramJson: ["loading"],
        isLoading: true,
        error: null
    }

    componentDidMount() {
        console.log("component did mount");

        this.setState({
            isLoading: true
        })

        fetch('https://api.instagram.com/v1/users/self/media/recent/?=&access_token=2116304243.0917c89.a0bcdda6581d476bb24e31fcf5154f18')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    instagramJson: data,
                    isLoading: false
                })
                // .catch(error => this.setState({ isLoading: false }))

            )

    }

    componentDidUpdate() {
        console.log("component updated")

    }

    componentWillUpdate() {

    }





    render() {
        const { instagramJson, isLoading, error } = this.state
        let InstagramJsonData = this.state.instagramJson.data
        console.log(this.state.isLoading)


        if (isLoading) {
            return <p>loading...</p>
        }

        //    console.log(JSONDATA[0])
        // console.log(JSONDATA[0].likes.count)
        // return <p>{JSONDATA[0].likes.count}</p>

        else {

            let instagramContent = InstagramJsonData.map((image) => (
                
                <div className="imageContainer" key={image.id}>
                <a href={image.link} aria-label="Go To Instagram Post">
                    <img src={image.images.thumbnail.url} alt="instagram-image" />
                    <div className="imageStats">
                        <span>
                             ❤ {image.likes.count}
                        </span>
                        <span>
                        💬 {image.comments.count}
                        </span>
                    </div>
                    </a>
                </div>
                

            ))
            return (<div className="instagramApp">{instagramContent}</div>)

        }


    }
}

export default InstagramFeed
