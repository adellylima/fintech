import React, { Component } from 'react';
import axios from 'axios';
import ClientRow from './clientRow';

import { Table } from 'reactstrap';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = { client: [] };
  }
  componentWillMount() {
    axios.get('http://localhost:4000/client')
      .then(response => {
        this.setState({ client: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  render() {

    const { client } = this.state;

    return (
      <div>
        <h3 align="center">client List</h3>

        <Table>
          <thead>
            <tr>
              <th>Nome completo</th>
              <th>Idade</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {client.map((element, index) =>
              <ClientRow key={index} object={element} />
            )}
          </tbody>

        </Table>

      </div>
    );
  }
}