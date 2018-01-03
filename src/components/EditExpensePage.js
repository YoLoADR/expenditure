import React from 'react';

const EditExpensePage = (props) => {
    console.log("props", props);
    return (
        <div>
            This is from my edit expense component and the value is {props.match.params._id}
        </div>
    );
}

export default EditExpensePage;