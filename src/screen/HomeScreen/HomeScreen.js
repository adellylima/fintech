
import axios from 'axios';
import React, { Component } from 'react';
import { CardHeader, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

import List from '../../components/List/List';
import Warning from '../../components/Warning/Warning';

// Styles
import "./HomeScreen.css";
import add from "./icons/add.png";
import search from "./icons/search.png";

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: [],
            filter: '',
        }
        this.goTo = this.goTo.bind(this);
        this.list = this.list.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.list();
    }

    goTo(path) {
        this.props.history.push(path);
    }

    handleChange({ target: { value, name } }) {
        this.setState({ filter: value });
    }

    list() {
        axios.get('http://localhost:4000/client')
            .then(response => {
                this.setState({ client: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { client, filter } = this.state;

        let filterArray = client;

        if (filterArray.length > 0 && typeof filter === 'string' && !(!isNaN(parseFloat(filter)) && isFinite(filter))) {
            filterArray = filterArray.filter(o => o.fullName.toLowerCase().indexOf(filter.toLowerCase()) > -1 || filter === '');
        } else {
            filterArray = filterArray.filter(o => o.cpf.indexOf(filter) > -1 || filter === '');
        }

        if (filterArray.length <= 0) {
            filterArray.push({
                warning: 'Usuário não encontrado!'
            })
        }

        return (
            <div className="HomeScreen">
                <Row className='header'>
                    <Col xs={8}>
                        <div className="text-left">
                            <h5>Lista de usuários</h5>
                        </div>
                    </Col>
                    <Col>
                        <div onClick={() => this.goTo('/add')} className="text-right button-add">
                            <img src={add} alt='...' />
                        </div>
                    </Col>
                </Row>
                {
                    client.length >= 1 ?
                        <div>
                            <CardHeader>
                                <InputGroup className="filter">
                                    <InputGroupAddon className="search" addonType="prepend">
                                        <img src={search} alt='...' />
                                    </InputGroupAddon>
                                    <Input onChange={this.handleChange} name='value' placeholder="Buscar por nome ou CPF" />
                                </InputGroup>
                            </CardHeader>

                            <List array={filterArray} list={this.list} />

                        </div>
                        : <Warning />
                }
            </div>
        );

    }
}

export default HomeScreen;