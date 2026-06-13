import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        login: "default",
        id: "default",
      },
    };

    console.log("Child Constructor");
  } // we can define without a constructor as react creates its own constructor by default

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rakesh17jeremy");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log("Child comp did mount");
  }

  componentDidUpdate() {
    console.log("Child Update");
  }

  componentWillUnmount() {
    console.log("Child Unmount");
  }

  render() {
    const { login, id, type } = this.state.userInfo;
    const { count } = this.state;
    console.log("Child Render");

    return (
      <div className="user-card">
        <h3>{login}</h3>
        <h4>{id}</h4>
        <h4>{type}</h4> 
        <p>Count : {count}</p>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default User;
