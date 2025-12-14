import React from "react";

class UserClass extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                name : "dummy",
                location : "default" 
            }    
        } 
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json();
        this.setState({
            userInfo : json
        })
    }

    componentDidUpdate(){
        console.log("Component updated !!!!"); 
    }

    componentWillUnmount(){
        console.log("Component unmounted !!!")
    }

    render(){
        // const {name, location} = this.props;
        const {name, location } = this.state.userInfo; 
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