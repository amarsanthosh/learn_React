import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props); 
    }

    render(){
        const {name, location} = this.props;
        return(
            <div className="user-class">
                <h2>This is {name}</h2>
                <h3>Internet engineer</h3>
                <h4>Location : {location}</h4>
            </div>
        )
    }
}

export default UserClass;  