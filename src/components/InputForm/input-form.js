import Form from 'react-bootstrap/Form';

function InputForm(props) {
    return (
        <>
            <Form.Group className="mb-3" controlId={props.controlId}>
                <Form.Label>{props.Label}</Form.Label>
                <Form.Control type={props.type} placeholder={props.placeholder} />
                <Form.Text className="text-muted">
                    {props.message}
                </Form.Text>
            </Form.Group>
        </>
    )
}


export default InputForm