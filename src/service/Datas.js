import { Component } from "react";
import User from "../pages/User";

class Datas extends Component {
  constructor(props) {
    super(props);
    /*recover data*/
    this.state = {
      users: {},
      activity: {},
      perf: {},
      session: {},
    };
  }
  /**
* The following variables are used to connect to a database :
- getUser
- getActivity
- getSession
- getPerf
*/
  componentDidMount() {
    const { id } = this.props.match.params;
    const getUser = async () => {
      const response = await fetch(`http://localhost:4000/user/${id}`);
      const jsonResponse = await response.json();
      if (jsonResponse && jsonResponse.data) {
        this.setState({ users: jsonResponse?.data });
      }
    };
    getUser();

    const getActivity = async () => {
      const resAct = await fetch(`http://localhost:4000/user/${id}/activity`);
      const jsonResAct = await resAct.json();
      if (jsonResAct && jsonResAct.data) {
        this.setState({ activity: jsonResAct?.data });
      }
    };
    getActivity();

    const getSession = async () => {
      const resSession = await fetch(
        `http://localhost:4000/user/${id}/average-sessions`
      );
      const jsonResSession = await resSession.json();
      if (jsonResSession && jsonResSession.data) {
        this.setState({ session: jsonResSession?.data });
      }
    };
    getSession();

    const getPerf = async () => {
      const resPerf = await fetch(
        `http://localhost:4000/user/${id}/performance`
      );
      const jsonResPerf = await resPerf.json();
      if (jsonResPerf && jsonResPerf.data) {
        this.setState({ perf: jsonResPerf?.data });
      }
    };
    getPerf();
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
