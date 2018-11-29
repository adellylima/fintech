import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class clientRow extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.get('http://localhost:4000/client/delete/' + this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
  }

  render() {
    const { object } = this.props;
    return (
      <tr>
        <td>
          {object.fullName}
        </td>
        <td>
          {object.age}
        </td>
        <td>
          {object.cpf}
        </td>
        <td>
          {object.phone}
        </td>
        <td>
          {object.email}
        </td>
        <td>
          <Link to={"/edit/" + object._id} className="btn btn-primary">Edit</Link>
          {' '}
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default clientRow;