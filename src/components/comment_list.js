import React from 'react';
import {connect} from 'react-redux';


// CommentList to Container Component
// 1. import connect-helper from react-redux
// 2. change export default with connect helper with param of this component
const CommentList = (props) => {
    const list = props.comments.map(comment => <li key={comment}>{comment}</li>)
    return (
        <ul className='comment-list'>
             {list}
        </ul>
    );
};

function mapStateToProps(state) {
    return { comments: state.comments};
}

export default connect(mapStateToProps)(CommentList);