import User from "./User";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor",props);
    }

    componentDidMount(){
        console.log("Parent Component Did mount");
    }
    render(){
        const name="rakee";
        console.log("Parent Render");
        return (
        <div>
            <h1>About us</h1>
            <User name={"First"} location={"Tamil Nadu"}/>
        </div>
    )
    }
}

export default About;