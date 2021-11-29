import { Component } from "react";
import User from "../../pages/User";

class Datas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
      },
      activity: {},
      performance: {},
      session: {},
    };
  }
  
  componentDidMount() {
    const { id } = this.props.match.params;
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/user/${id}`);
      const jsonResponse = await response.json();
      if (jsonResponse && jsonResponse.data) {
        console.log(jsonResponse.data);
        this.setState({ users: jsonResponse?.data });
      }
    };
    fetchData();
  }

  render() {
    console.log(this.state.users);
    return <User data={this.state.users} />;
  }
}

export default Datas;
