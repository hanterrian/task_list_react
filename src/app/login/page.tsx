import {Metadata} from "next";
import {Col, Form, Row} from "react-bootstrap";

export const metadata: Metadata = {
    title: 'Login page'
}

export default function Page() {
    return (
        <Row>
            <Col className={'align-self-center col-3'}>
                <Form>
                    <Form.Group>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
}
