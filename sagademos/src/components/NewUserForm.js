import React, { Component } from 'react'
import {Form, FormGroup, Button, Input, Label} from 'reactstrap';

class NewUserForm extends Component {
    state = {
        firstName:'',
        lastName:''
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.pp({
            firstName: this.state.firstName,
            lastName:this.state.lastName
            // lastName:"Hard coded name"
        });
        this.setState({
            firstName:'',
            lastName:''
        })
    }
    handleFirstNameChange = e => {
        this.setState({
            firstName:e.target.value
        });
    }
    handleLastNameChange = e => {
        this.setState({
            lastName:e.target.value
        });
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>
                        FirstName
                    </Label>
                    <Input required placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                </FormGroup>
                <FormGroup>
                    <Label>
                        LastName
                    </Label>
                    <Input required placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} />
                </FormGroup>
                <FormGroup>
                    <Button block outline type="submit" color="primary">
                        Create
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}

export default NewUserForm
