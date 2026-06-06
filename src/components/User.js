import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0, 
        }
        console.log(this.props.name+"Child Constructor")
    } // we can define without a constructor as react creates its own constructor by default
     
    componentDidMount(){
        console.log(this.props.name+"Child comp did mount");
    }
    render(){
        const {name, location} = this.props;
        const {count} =this.state;
        console.log(name+"Child Render")

        return <div className="user-card">
            <h2>{name}</h2>
            <h3>{location}</h3>
            <p>Count : {count}</p> 
            <button onClick={()=>{
                this.setState({
                    count:count +1,
                })
            }}>Increment</button>
        </div>
    }

}

export default User;