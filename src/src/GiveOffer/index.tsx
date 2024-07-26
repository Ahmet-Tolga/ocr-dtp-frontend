import { Form, Button, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const GiveOffer = () => {
    const location=useLocation();
    const {email,userId}=location.state || {};

    const handleSubmit = () => {
        // Handle submit logic here
    };

    const handleReset = () => {
        // Handle reset logic here
    };

    return (
        <Card>
            <Card.Header>
                <h5>Give an offer</h5>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="email">User email</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            value={email}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Services</Form.Label>
                        <Form.Control value="OCR,DTP" disabled></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Offer a price</Form.Label>
                        <Form.Control type="number" placeholder='offer a price $'></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Due date</Form.Label>
                        <Form.Control type="date"></Form.Control>
                    </Form.Group>

                    <div style={{ marginTop: "30px", display: "flex", width: "30%", alignItems: "center", justifyContent: "space-between" }}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="secondary" type="button" onClick={handleReset}>
                            Reset
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default GiveOffer;
