import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputForm from '../InputForm/input-form.js';
// import checkInputForm from "../InputForm/checkInput"
import Check from '../InputForm/checkInput.js';
import { useState } from 'react';





function EmailFormCompnent() {


    const [info, setInfo] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        errEmail: "",
        errPassword: ""
    })


    function validateInput(event) {
        // console.log()
        if (event.target.id === "EmailControllerID") {
            setInfo({
                ...info,
                email: event.target.value
            })

            setErrors({
                ...errors,
                errEmail: !(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(event.target.value) && "Email is not valid"

            })
        }
        else if (event.target.id === "PasswordControllerID") {
            setInfo({
                ...info,
                password: event.target.value
            })

            setErrors({
                ...errors,
                errPassword: event.target.value.length < 8 && "password must be at least 8 characters"
            })
        }
    }





    return (

        <>
            <Container className='my-3'>
                <Form onChange={(e) => {
                    validateInput(e)
                }
                }>
                    <InputForm Label="Email" type="email" placeholder="Enter Your Email" controlId="EmailControllerID" message={errors.errEmail}>  </InputForm>
                    <InputForm Label="Password" type="password" placeholder="Password" controlId="PasswordControllerID" message={errors.errPassword}></InputForm>
                    <Check label="Check me out" type="checkbox" controlId="checkControllerID"></Check>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default EmailFormCompnent;