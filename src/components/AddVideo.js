import React, {Component} from 'react'

class AddVideo extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const videoLink = event.target.elements.link.value //get link from input filed
        const post = {
            videoLink: videoLink //assign the link to post
        }
        if (videoLink) {
            this.props.onAddVideofunction(post)
        }
    }

    render() {
        return (
            <h1>
                <div className = "form">
                    <form onSubmit = {this.handleSubmit}>
                        <input type = "text" placeholder = "link" name = "link" />
                        <button> Play </button>
                    </form>
                </div>
            </h1>
        )
    }
}

export default AddVideo