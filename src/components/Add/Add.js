
import axios from 'axios';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// Styles
import './Add.css';

export default class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            object: {}
        };
        this.goTo = this.goTo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    goTo(path) {
        this.props.history.push(path);
    }

    onHandleChange({ target: { value, name } }) {
        const { object } = this.state;
        object[name] = value;
        this.setState({ object });
    }

    onSubmit(e) {
        e.preventDefault();
        const { object } = this.state;
        axios.post("http://localhost:4000/client/" , object)
            .then(res => {
                toast.success("Cadastrado com sucesso!", {
                    position: toast.POSITION.TOP_RIGHT

                });
               
            }).catch(error => {
                toast.error("Preencha os dados corretamente!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            });
 
    }

    render() {
        const { object = {} } = this.state;
        return (
            <div className='Add'>

                <ToastContainer />

                <Row className='header'>
                    <Col xs={8}>
                        <div className="text-left">
                            <h5>Cadastrar Usuário</h5>
                        </div>
                    </Col>
                </Row>
                <Form>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="fullName">Nome Completo</Label>
                                <Input onChange={this.onHandleChange} value={object.fullName || ''} type="fullName" name="fullName" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="age">Idade</Label>
                                <Input onChange={this.onHandleChange} value={object.age || ''} type="age" name="age" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="cpf">CPF</Label>
                                <Input onChange={this.onHandleChange} value={object.cpf || ''} type="cpf" name="cpf" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="phone">Telefone</Label>
                                <Input onChange={this.onHandleChange} value={object.phone || ''} type="phone" name="phone" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="email">email</Label>
                                <Input onChange={this.onHandleChange} value={object.email || ''} type="email" name="email" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>

                <div className="btns form-group text-right">
                    <Button onClick={() => this.goTo('/')} className="cancel btn-form">Cancelar</Button>
                    <Button onClick={this.onSubmit} className="save btn-form">Salvar</Button>
                </div>

            </div >
        )
    }
}