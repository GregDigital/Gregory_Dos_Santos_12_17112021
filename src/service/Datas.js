import { Component } from "react";
import User from "../pages/User";

class Datas extends Component {
  constructor(props) {
    super(props);
    //If the server does not respond, change the source in this.state to mock to display the data
    this.state = {
      source: "mock", //choose api or mock
      users: {},
      activity: {},
      perf: {},
      session: {},
    };
  }

  /**
   *
   * @param {String} url
   * @param {String} key
   * @returns Object
   */

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

    if (this.state.source === "api") {
      // request API
      this.fetchApi(`http://localhost:4000/user/${id}`, "users");
      this.fetchApi(`http://localhost:4000/user/${id}/activity`, "activity");
      this.fetchApi(`http://localhost:4000/user/${id}/performance`, "perf");
      this.fetchApi(
        `http://localhost:4000/user/${id}/average-sessions`,
        "session"
      );
    } else if (this.state.source === "mock") {
      // request the file in the mock folder
      this.fetchApi(`http://localhost:3000/mocked/dataUser.json`, "users");
      this.fetchApi(
        `http://localhost:3000/mocked/dataActivity.json`,
        "activity"
      );
      this.fetchApi(
        `http://localhost:3000/mocked/dataPerformance.json`,
        "perf"
      );
      this.fetchApi(
        `http://localhost:3000/mocked/dataAverageSession.json`,
        "session"
      );
    }
  }

  render() {
    //we pass the responses of fetchApi to the children in the User component
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
