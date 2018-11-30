import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

// Styles
import './List.css';

// Icons
import info from './icons/info.png';
import deleteIcon from './icons/delete.png';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    props.list();
  }

  delete(id) {
    axios.delete('http://localhost:4000/client/' + id)
      .then(success => {
        this.props.list();
      })
      .catch(err => console.log(err))
  }

  render() {
    const { array } = this.props;
    return (
      <div className='List'>
        {array.map((element, index) =>
          <div key={index} className='container'>
            {!(element.warning) ?
              <Row className='list-row center'>
                <Col md={10} xs={8}>
                  <strong>
                    {element.fullName}
                  </strong>
                  <br />
                  {element.cpf}
                </Col>
                <Col md={1} xs={2}>
                  <Button className='btn-delete' onClick={() => this.delete(element._id)}>
                    <img src={deleteIcon} alt='...' />
                  </Button>
                </Col>
                <Col md={1} xs={2}>
                  <Link to={"/edit/" + element._id}>
                    <img src={info} alt='...' />
                  </Link>
                </Col>
              </Row>
              :
              <Row>
                <Col className='warning text-center'>
                    {element.warning}
                </Col>
              </Row>
            }
          </div>
        )}
      </div>
    );
  }
}