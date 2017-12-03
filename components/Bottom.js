import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import style from './style.css'


class Bottom extends React.Component {
    
       render() {
          return (
            <div className ='bottom'>
            
            <h3>Get daily quotes</h3>
             
               
            <Form className = 'form'>
            <FormGroup className = 'field'>
            
              <Input type="email" name="email" id="exampleEmail" placeholder="Please enter email" />
            </FormGroup>
            </Form>
            <Button color="primary">Submit</Button>{' '}
             </div>
          );
       }
    }
    
    export default Bottom;

