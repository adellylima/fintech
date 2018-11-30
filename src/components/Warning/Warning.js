
import axios from 'axios';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Row, Col, Button } from 'reactstrap';

// Styles
import './Warning.css';

// Icons
import warning from './icons/warning.png'

export default class Warning extends Component {

    render() {

        return (
            <div className='Warning'>

                <Row>
                    <Col className='center text-center'>
                        <img src={warning} alt='...' />
                        <h6> Nenhum Usuário Cadastrado! </h6>
                    </Col>
                </Row>

            </div >
        )
    }
}