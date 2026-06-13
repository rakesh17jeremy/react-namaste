import User from "./User";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rakesh17jeremy");
    const json = await data.json();

    console.log("Parent Component Did mount", json);
  }

  render() {
    const name = "rakee";
    console.log("Parent Render");
    return (
      <div>
        <h1>About us</h1>
        <User name={"First"} location={"Tamil Nadu"} />
      </div>
    );
  }
}

export default About;
