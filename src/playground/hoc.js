import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info </h1>
        <p>The info is : {props.info}</p>
    </div>
);

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <p>Your are logged !</p>}
            <p>The info is : {props.info}</p>
            <WrappedComponent {...props}/>
        </div>
    );
}

const AuthInfo = requireAuthentification(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details"/>, document.getElementById('app'));