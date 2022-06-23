import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import Chart from "react-apexcharts";

class User extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data_table: [],
      data_chart: []
    }
  }

  get_data_table = async () => {
    let command = await httpClient.get("user/select", this.state);
    this.setState({ data_table: command.data.result })
  }

  get_data_chart = async () => {
    let command = await httpClient.post("user/query", this.state);
    this.setState({ data_chart: command.data.result })
  }

  renderTableRow = () => {
    try {
      if (this.state.data_table !== null) {
        return this.state.data_table.map((item) => (
          <tr>
            <td>{item.username}</td>
            <td>{item.empNumber}</td>
            <td>{item.levelUser}</td>
          </tr>
        ));
      }
    } catch (error) {}
  };

  componentDidMount = () => {
    this.get_data_table();
    this.get_data_chart();
  }

  render() {

    // var chart_options = {
    //   chart: { id: "apexchart-example" },
    //   xaxis: { categories: [1991, 1992, 1993, 1994, 1995, 1996] },
    // };
    // var chart_series = [{ name: "series-1", data: [30, 40, 35, 50, 49, 125] }];

    var Style ={
      display: "flex",
      justify: "center",
      alignSelf: "center",
    };

    var Array_LevelUser = [];
    var Array_QtyUser = [];
    if (this.state.data_chart !== null) {
      console.log(this.state.data_chart);
      for (var i = 0; i < this.state.data_chart.length; i++) {
        Array_QtyUser.push(this.state.data_chart[i].qty);
        Array_LevelUser.push(this.state.data_chart[i].levelUser);
      }
      console.log(Array_LevelUser);
      console.log(Array_QtyUser);
    }

    var chart_options = {
      chart: { id: "apexchart-example" },
      xaxis: { categories: Array_LevelUser },
    };
    var chart_series = [{ name: "series-1", data: Array_QtyUser }];

    return <div className="content-wrapper">
      <h1 style={{ textAlign: "center" }}>User List</h1>

      <div className="row" style={{ justifyContent: "center", alignItems: "center", }} >
        <div className="col-md-11">
          <div className="card card-primary">

            <div className="card-header">
              <h3 className="card-title">Data</h3>
            </div>

            <div className="card-body">
              <table className="table table-head-fixed table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>EMP No</th>
                    <th>Level</th>
                  </tr>
                </thead>
                <tbody>{this.renderTableRow()}</tbody>
              </table>
            </div>

          </div>
        </div>

        <div className="col-md-11">
          <div className="card card-primary">

            <div className="card-header">
              <h3 className="card-title">Data</h3>
            </div>

            <div className="card-body" style={Style}>
              <div className="chart">
                <Chart
                  options={chart_options}
                  series={chart_series}
                  type="bar"
                  width={1000}
                  height={400}
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>;
  }
}

export default User;
