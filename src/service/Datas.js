import { Component } from "react";
import User from "../pages/User";

class Datas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
      activity: {},
      perf: {},
      session: {},
    };
  }

  fetchApi(url, key) {
    const getData = async () => {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      if (jsonResponse && jsonResponse.data) {
        this.setState({ [key]: jsonResponse?.data });
      }
    };
    getData();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.fetchApi(`http://localhost:4000/user/${id}`, "users");
    this.fetchApi(`http://localhost:4000/user/${id}/activity`, "activity");
    this.fetchApi(`http://localhost:4000/user/${id}/performance`, "perf");
    this.fetchApi(
      `http://localhost:4000/user/${id}/average-sessions`,
      "session"
    );
  }

  render() {
    return (
      <>
        <User
          data={this.state.users}
          session={this.state.session}
          activity={this.state.activity}
          dataPerf={this.state.perf}
        ></User>
      </>
    );
  }
}

export default Datas;
