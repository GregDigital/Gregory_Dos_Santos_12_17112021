import { Component } from "react";
import User from "../pages/User";
import Nutrition from "../components/Nutrition";
import axios from "axios";

class Datas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
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

    const fetchActivity = async () => {
      const res = await fetch(`http://localhost:4000/user/${id}/activity`);
      const jsonRes = await res.json();
      if (jsonRes && jsonRes.data) {
        console.log(jsonRes.data);
        this.setState({ activity: jsonRes?.data });
      }
    };
    fetchActivity();
  }

  render() {
    console.log(this.state.users);
    console.log(this.state.activity);
    return (
      <>
        <User data={this.state.users}></User>
      </>
    );
  }
}

export default Datas;
