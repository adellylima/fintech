
import axios from 'axios';
import React, { Component } from 'react';

export default class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
      object: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange({ target: { value, name } }) {
    const { object } = this.state;
    object[name] = value;
    this.setState({ object });
  }

  onSubmit(e) {
    e.preventDefault();
    const { object } = this.state;
    axios.post('http://localhost:4000/client', object)
      .then(res => console.log(res.data));
  }

  render() {

    const { object = {} } = this.state;

    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Business</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nome Completo:  </label>
            <input
              type="text"
              name='fullName'
              className="form-control"
              value={object.fullName || ''}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <label>Idade: </label>
            <input type="text"
              name='age'
              className="form-control"
              value={object.age || ''}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <label>CPF: </label>
            <input type="text"
              name='cpf'
              className="form-control"
              value={object.cpf || ''}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <label>Telefone: </label>
            <input type="text"
              name='phone'
              className="form-control"
              value={object.phone || ''}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input type="text"
              name='email'
              className="form-control"
              value={object.email || ''}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Register Business" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}