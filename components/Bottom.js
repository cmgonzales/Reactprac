import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import style from './style.css'


class Bottom extends React.Component {
    
       render() {
          return (
            <div className ='bottom'>
               
            <Form className = 'form'>
            <FormGroup className = 'field'>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Please enter email" />
            </FormGroup>
            </Form>
            <Button color="primary">primary</Button>{' '}
             </div>
          );
       }
    }
    
    export default Bottom;