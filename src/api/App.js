import axios from "axios";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      activity: {},
      performance: {},
      session: {},
    };
  }

  componentDidMount(id) {
    axios
      .get(`http://localhost:4000/user/${id}`)
      .then((res) => res.json())
      .then((u) => this.setState({ user: u }));
  }

  

  render() {
    return <div>Hello</div>;
  }
}

export default App;
