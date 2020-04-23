import React from 'react'
import { connect } from 'react-redux'

class Likes extends React.Component {

    like = () => {
    this.props.dispatch({ type: 'INCREMENT' })
    }

    dislike = () => {
        if(this.props.likes > 0) {
            this.props.dispatch({ type: 'DECREMENT' })
        }
    } 

    render() {
        return (
            <div>
                <p>Likes: {this.props.likes}</p>
                <button onClick={this.like}>Like</button>
                <button onClick={this.dislike}>Dislike</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        likes: state.likes
    }
}

export default connect(mapStateToProps)(Likes)