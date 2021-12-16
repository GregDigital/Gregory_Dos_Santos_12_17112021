import { Component } from "react";
import User from "../pages/User";

class Datas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: "mock",
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
      // requête l'API
      this.fetchApi(`http://localhost:4000/user/${id}`, "users");
      this.fetchApi(`http://localhost:4000/user/${id}/activity`, "activity");
      this.fetchApi(`http://localhost:4000/user/${id}/performance`, "perf");
      this.fetchApi(
        `http://localhost:4000/user/${id}/average-sessions`,
        "session"
      );
    } else if (this.state.source === "mock") {
      // requête le fichier
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
