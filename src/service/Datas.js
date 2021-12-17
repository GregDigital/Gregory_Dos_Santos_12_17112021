import { Component } from "react";
import User from "../pages/User";

class Datas extends Component {
  constructor(props) {
    super(props);
    //If the server does not respond, change the source in this.state to mock to display the data
    this.state = {
      source: "mock", //choose api or mock
      users: {
        data: {
          id: 12,
          userInfos: {
            firstName: "Karl",
            lastName: "Dovineau",
            age: 31,
          },
          todayScore: 0.12,
          keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50,
          },
        },
      },
      activity: {
        data: {
          userId: 12,
          sessions: [
            {
              day: "1",
              kilogram: 80,
              calories: 240,
            },
            {
              day: "2",
              kilogram: 80,
              calories: 220,
            },
            {
              day: "3",
              kilogram: 81,
              calories: 280,
            },
            {
              day: "4",
              kilogram: 81,
              calories: 290,
            },
            {
              day: "5",
              kilogram: 80,
              calories: 160,
            },
            {
              day: "6",
              kilogram: 78,
              calories: 162,
            },
            {
              day: "7",
              kilogram: 76,
              calories: 390,
            },
          ],
        },
      },
      perf: {
        data: {
          userId: 12,
          kind: {
            1: "cardio",
            2: "energy",
            3: "endurance",
            4: "strength",
            5: "speed",
            6: "intensity",
          },
          data: [
            {
              value: 80,
              kind: 1,
            },
            {
              value: 120,
              kind: 2,
            },
            {
              value: 140,
              kind: 3,
            },
            {
              value: 50,
              kind: 4,
            },
            {
              value: 200,
              kind: 5,
            },
            {
              value: 90,
              kind: 6,
            },
          ],
        },
      },
      session: {
        data: {
          userId: 12,
          sessions: [
            {
              day: "L",
              sessionLength: 30,
            },
            {
              day: "M",
              sessionLength: 23,
            },
            {
              day: "M",
              sessionLength: 45,
            },
            {
              day: "J",
              sessionLength: 50,
            },
            {
              day: "V",
              sessionLength: 0,
            },
            {
              day: "S",
              sessionLength: 0,
            },
            {
              day: "D",
              sessionLength: 60,
            },
          ],
        },
      },
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
