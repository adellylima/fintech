
import axios from 'axios';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// Styles
import './Edit.css';

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            object: {},
            check: false,
        };
        this.goTo = this.goTo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    componentWillMount() {
        axios.get("http://localhost:4000/client/" + this.props.match.params.id)
            .then(response => {
                if (response.data) {
                    this.setState({
                        object: response.data
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    goTo(path) {
        this.props.history.push(path);
    }

    onHandleChange({ target: { value, name } }) {
        if (name === 'check') {
            this.setState({ check: !this.state.check })
        } else {
            const { object } = this.state;
            object[name] = value;
            this.setState({ object });
        }

    }

    onSubmit(e) {
        e.preventDefault();
        const { object } = this.state;
        axios.put("http://localhost:4000/client/" + this.props.match.params.id, object)
            .then(res => {
                toast.success("Atualizado com sucesso!", {
                    position: toast.POSITION.TOP_RIGHT

                });
               
            }).catch(error => {
                toast.error("Preencha os dados corretamente!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            });
 
    }

    render() {
        const { object, check } = this.state;
        return (
            <div className='Add'>

                <ToastContainer />

                <Row className='header'>
                    <Col xs={8}>
                        <div className="text-left">
                            <h5>Detalhes do Usuário</h5>
                        </div>
                    </Col>
                </Row>

                <Row className='header'>
                    <Col xs={9}>
                        <div className="text-rigth">
                            <h6>Edit</h6>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="text-left">
                            <label className="switch">
                                <input className="check" type="checkbox" name='check' onChange={this.onHandleChange} checked={check} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </Col>
                </Row>

                <Form>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="fullName">Nome Completo</Label>
                                <Input disabled={!check} onChange={this.onHandleChange} value={object.fullName || ''} type="fullName" name="fullName" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="age">Idade</Label>
                                <Input disabled={!check} onChange={this.onHandleChange} value={object.age || ''} type="age" name="age" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="cpf">CPF</Label>
                                <Input disabled={!check} onChange={this.onHandleChange} value={object.cpf || ''} type="cpf" name="cpf" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="phone">Telefone</Label>
                                <Input disabled={!check} onChange={this.onHandleChange} value={object.phone || ''} type="phone" name="phone" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="email">email</Label>
                                <Input disabled={!check} onChange={this.onHandleChange} value={object.email || ''} type="email" name="email" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>

                {
                    check ?

                        <div className="btns form-group text-right">
                            <Button onClick={() => this.goTo('/')} className="cancel btn-form">Cancelar</Button>
                            <Button onClick={this.onSubmit} className="save btn-form">Salvar</Button>
                        </div>
                        :
                        null
                }
            </div >


        )
    }
}