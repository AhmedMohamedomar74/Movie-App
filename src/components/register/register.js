import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputForm from '../InputForm/input-form.js';
import Check from '../InputForm/checkInput.js';
import { useState } from 'react';

function RegisterFormCompnent() {
    const [info, setInfo] = useState({
        email: "",
        password: "",
        UserName: "",
        confirmPassword: "",
        name: ""
    })

    const [errors, setErrors] = useState({
        errEmail: "",
        errPassword: "",
        errName: "",
        errConfirmPassword: "",
        errUserName: ""
    })

    function validateInput(event) {
        const value = event.target.value;
        const id = event.target.id;

        if (id === "EmailControllerID") {
            setInfo({ ...info, email: value });
            setErrors({
                ...errors,
                errEmail: !(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(value)
                    ? "Email is not valid"
                    : ""
            });
        }
        else if (id === "PasswordControllerID") {
            setInfo({ ...info, password: value });

            let errorMsg = "";
            if (value.length < 8) {
                errorMsg = "password must be at least 8 characters";
            } else if (!/(?=.*[a-z])/.test(value)) {
                errorMsg = "Password must contain at least one lowercase letter";
            } else if (!/(?=.*[A-Z])/.test(value)) {
                errorMsg = "Password must contain at least one uppercase letter";
            } else if (!/(?=.*\d)/.test(value)) {
                errorMsg = "Password must contain at least one digit";
            } else if (!/(?=.*[@$!%*?&])/.test(value)) {
                errorMsg = "Password must contain at least one special character (@$!%*?&)";
            }

            setErrors({ ...errors, errPassword: errorMsg });
        }
        else if (id === "ConFirmPasswordControllerID") {
            setInfo({ ...info, confirmPassword: value });
            setErrors({
                ...errors,
                errConfirmPassword: value !== info.password
                    ? "Passwords do not match"
                    : ""
            });
        }
        else if (id === "userNameControllerID") {
            setInfo({ ...info, UserName: value });
            setErrors({
                ...errors,
                errUserName: value.trim() === ""
                    ? "Username is required"
                    : /\s/.test(value)
                        ? "Username cannot contain spaces"
                        : ""
            });
        }
        else if (id === "NameControllerID") {
            setInfo({ ...info, name: value });
            setErrors({
                ...errors,
                errName: value.trim() === ""
                    ? "Name is required"
                    : ""
            });
        }
    }

    return (
        <>
            <Container className='my-3'>
                <Form onChange={validateInput}>
                    <InputForm Label="name" type="input" placeholder="Enter Your Name" controlId="NameControllerID" message={errors.errName}>  </InputForm>
                    <InputForm Label="user name" type="input" placeholder="Enter Your userName" controlId="userNameControllerID" message={errors.errUserName}>  </InputForm>
                    <InputForm Label="Email" type="email" placeholder="Enter Your Email" controlId="EmailControllerID" message={errors.errEmail}>  </InputForm>
                    <InputForm Label="Password" type="password" placeholder="Password" controlId="PasswordControllerID" message={errors.errPassword}></InputForm>
                    <InputForm Label="Confirm Password" type="password" placeholder="Password" controlId="ConFirmPasswordControllerID" message={errors.errConfirmPassword}></InputForm>
                    <Check label="Check me out" type="checkbox" controlId="checkControllerID"></Check>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default RegisterFormCompnent;