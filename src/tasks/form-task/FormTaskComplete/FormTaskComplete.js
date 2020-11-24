import React, { Component } from 'react';

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import uuid from 'uuid/dist/v1';
import { connect } from 'react-redux';

import { addUser } from '../../../actions/userActions';
import {saveUserForm} from './form-api';

class FormTaskComplete extends Component {

    state = {
        name: '',
        surname: '',
        birthday: '',
        userType: '',
        inactivityDate: '',
        error: {
            name: '',
            surname: '',
            birthday: '',
            inactivityDate: '',
            inactivityDateMandatory: '',
            inactivityDateFormat: ''
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();

        //Validation name - mandatory

        if (!this.state.name.match(/[a-zA-Z0-9-,]+/)) {
            this.setState(prevState => {
                let error = Object.assign({}, prevState.error);
                error.name = 'This field is mandatory.';
                return { error };
            });
        } else {
            this.setState(prevState => {
                let error = Object.assign({}, prevState.error);
                error.name = '';
                return { error };
            });
        }

        //Validation surname - mandatory

        if (!this.state.surname.match(/[a-zA-Z0-9-,]+/)) {
            this.setState(prevState => {
                let error = Object.assign({}, prevState.error);
                error.surname = 'This field is mandatory.';
                return { error };
            });
        } else {
            this.setState(prevState => {
                let error = Object.assign({}, prevState.error);
                error.surname = '';
                return { error };
            });
        }

        //Validation - date format

        if (!this.state.inactivityDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
            this.setState(prevState => {
                let error = Object.assign({}, prevState.error);
                error.inactivityDateFormat = 'This field accepts the format YYYY-MM-DD';
                return { error };
            });
        } else {
            this.setState(prevState => {
                let error = Object.assign({}, prevState.error);
                error.inactivityDateFormat = '';
                return { error };
            });
        }

        //Validation - date time

            let currentDate = new Date();
            let currentDay = currentDate.getDate();
            let currentMonth = currentDate.getMonth() + 1;
            let currentYear = currentDate.getFullYear();

            let userYear = this.state.inactivityDate.slice(0, 4);
            let userYearNumber = parseInt(userYear);

            let userMonth = this.state.inactivityDate.slice(5, 7);
            let userMonthNumber = parseInt(userMonth);

            let userDay = this.state.inactivityDate.slice(8, 10);
            let userDayNumber = parseInt(userDay);

            if (userYearNumber <= currentYear) {
                this.setState(prevState => {
                    let error = Object.assign({}, prevState.error);
                    error.inactivityDate = '';
                    return { error };
                });
            } else {
                this.setState(prevState => {
                    let error = Object.assign({}, prevState.error);
                    error.inactivityDate = 'Must be completed with a date from the past.';
                    return { error };
                });
            };

            if (userMonthNumber <= currentMonth && userYearNumber === currentYear) {
                this.setState(prevState => {
                    let error = Object.assign({}, prevState.error);
                    error.inactivityDate = '';
                    return { error };
                });
            } else if (userMonthNumber <= 12 && userYearNumber < currentYear) {
                this.setState(prevState => {
                    let error = Object.assign({}, prevState.error);
                    error.inactivityDate = '';
                    return { error };
                });
            } else {
                this.setState(prevState => {
                    let error = Object.assign({}, prevState.error);
                    error.inactivityDate = 'Must be completed with a date from the past.';
                    return { error };
                });
            };

            if (userDayNumber <= currentDay && userMonthNumber <= currentMonth && userYearNumber === currentYear) {
                this.setState(prevState => {
                    let error = Object.assign({}, prevState.error);
                    error.inactivityDate = '';
                    return { error };
                });
            } else if (userDayNumber <= 31 && userMonthNumber <= 12 && userYearNumber < currentYear) {
                this.setState(prevState => {
                    let error = Object.assign({}, prevState.error);
                    error.inactivityDate = '';
                    return { error };
                });
            } else if (userDayNumber <= 31 && userMonthNumber < currentMonth && userYearNumber === currentYear) {
                this.setState(prevState => {
                    let error = Object.assign({}, prevState.error);
                    error.inactivityDate = '';
                    return { error };
                });
            } else {
                this.setState(prevState => {
                    let error = Object.assign({}, prevState.error);
                    error.inactivityDate = 'Must be completed with a date from the past.';
                    return { error };
                });
            };

        if (this.state.userType === 'Inactive') {
            
            //Validation user inactivity date - mandatory

            if (!this.state.inactivityDate.match(/[a-zA-Z0-9-,]+/)) {
                this.setState(prevState => {
                    let error = Object.assign({}, prevState.error);
                    error.inactivityDateMandatory = 'This field is mandatory.';
                    return { error };
                });
            } else {
                this.setState(prevState => {
                    let error = Object.assign({}, prevState.error);
                    error.inactivityDateMandatory = '';
                    return { error };
                });
            };
        };

        const newUser = {
            id: uuid(),
            name: this.state.name,
            surname: this.state.surname,
            birthday: this.state.birthday,
            user: this.state.userType,
            inactivity: this.state.inactivityDate
        };

        if(this.state.name!==''&&this.state.surname!==''){
            this.props.addUser(newUser);
            saveUserForm();
        };
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup style={{ marginTop: '2rem' }}>
                        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Personal Info</h2>
                        <Label for="name">First Name:</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Add name"
                            onChange={this.onChange}
                        />
                        {this.state.error.name !== '' ? <div><small style={{ color: 'red' }}>{this.state.error.name}</small><br /></div> : null}
                        <Label for="name">Last Name:</Label>
                        <Input
                            type="text"
                            name="surname"
                            id="surname"
                            placeholder="Add surname"
                            onChange={this.onChange}
                        />
                        {this.state.error.surname !== '' ? <div><small style={{ color: 'red' }}>{this.state.error.surname}</small><br /></div> : null}
                        <Label for="name">Birthday:</Label>
                        <Input
                            type="text"
                            name="birthday"
                            id="birthday"
                            placeholder="YYYY-MM-DD"
                            onChange={this.onChange}
                        />
                        <h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>User Management</h2>
                        <Label for="name">User Type:</Label>
                        <Input type="select" name='userType' id='userType' onChange={this.onChange}>
                            <option value="" selected>Choose your option</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Input>
                        <Label for="name">User Inactivity Date:</Label>
                        <Input
                            type="text"
                            name="inactivityDate"
                            id="inactivityDate"
                            placeholder="YYYY-MM-DD"
                            onChange={this.onChange}
                        />
                        {this.state.error.inactivityDate !== ''  ? <div><small style={{ color: 'red' }}>{this.state.error.inactivityDate}</small><br /></div> : null}
                        {this.state.error.inactivityDateMandatory !== '' && this.state.userType === 'Inactive' ? <div><small style={{ color: 'red' }}>{this.state.error.inactivityDateMandatory}</small><br /></div> : null}
                        {this.state.error.inactivityDateFormat !== '' ? <div><small style={{ color: 'red' }}>{this.state.error.inactivityDateFormat}</small><br /></div> : null}
                        <Button
                            color="primary"
                            dark
                            style={{ marginTop: '2rem' }}
                            block
                        >
                            Send
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { addUser })(FormTaskComplete);