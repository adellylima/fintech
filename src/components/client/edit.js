import React, { Component } from "react";
import axios from "axios";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: {}
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
  const {object } = this.state; 
    axios
      .get("http://localhost:4000/client/" + this.props.match.params.id)
      .then(response => {
        this.setState({
         object
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onHandleChange({ target: { value, name } }) {
    const { object } = this.state;
    object[name] = value;
    this.setState({ object });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };
    axios
      .post(
        "http://localhost:4000/business/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/index");
  }

  render() {
    const { object } = this.state;
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Business</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nome Completo: </label>
            <input
              type="text"
              className="form-control"
              name='fullName'
              value={object.fullName}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <label>Age: </label>
            <input
              type="text"
              className="form-control"
              value={object.age}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <label>CPF: </label>
            <input
              type="text"
              className="form-control"
              value={object.cpf}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input
              type="text"
              className="form-control"
              value={object.phone}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={object.email}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
