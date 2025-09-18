import Form from 'react-bootstrap/Form';
function Check(props) {
    return (
        <>
            <Form.Group className="mb-3" controlId={props.controlId}>
                <Form.Check type={props.type} label={props.label} />
            </Form.Group>
        </>
    )
}

export default Check