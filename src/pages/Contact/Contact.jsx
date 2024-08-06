import { forwardRef, useRef, useState } from 'react';
import { Form, Button, Input, Modal, ButtonToolbar } from 'rsuite';
import './Contact.css'
import Footer from '../../components/Footer/Footer';





const Contact = () => {
    const Textarea = forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        textarea: ''
    });
    
    console.log(formValue)

    return (
        <>

            <div className='form-container'>
                <Form fluid onChange={setFormValue} formValue={formValue} >
                    <Form.Group controlId="name-9">
                        <Form.ControlLabel>Username</Form.ControlLabel>
                        <Form.Control name="name" />
                        <Form.HelpText>Required</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId="email-9">
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" type="email" />
                        <Form.HelpText>Required</Form.HelpText>
                    </Form.Group>

                    <Form.Group controlId="textarea-6">
                        <Form.ControlLabel>Textarea</Form.ControlLabel>
                        <Form.Control name="textarea" rows={5} className='textArea' />
                    </Form.Group>
                    <Form.Group>
                        <ButtonToolbar>
                            <Button appearance="primary">Submit</Button>
                            <Button appearance="default">Cancel</Button>
                        </ButtonToolbar>
                    </Form.Group>
                </Form>

            </div>

            <Footer></Footer>
        </>)
};

export default Contact;