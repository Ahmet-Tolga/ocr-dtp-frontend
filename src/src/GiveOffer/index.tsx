import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createProposalThunk } from '../store/Thunks/ProposalThunk';
import { AppDispatch } from '../store/store';

const GiveOffer: React.FC = () => {
    const location = useLocation();
    const { email, project } = location.state || {};
    const dispatch = useDispatch<AppDispatch>();

    // Compute OCR and DTP services string
    const servicesString = (() => {
        let result = '';
        if (project) {
            if (project.ocr) result += 'OCR';
            if (project.dtp) result += (result ? ', ' : '') + 'DTP';
        }
        return result;
    })();

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const form = event.currentTarget;
        const formData = new FormData(form);

        const price = Number(formData.get('price'));
        const dueDate = new Date(formData.get('dueDate') as string);
        const projectId = project?.id || '';

        if (price && dueDate && projectId) {
            const proposal=await dispatch(createProposalThunk({ price, projectId, dueDate }));
            console.log(proposal);
        }
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
                            value={email || ''}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Services</Form.Label>
                        <Form.Control 
                            value={servicesString}
                            disabled
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Offer a price</Form.Label>
                        <Form.Control 
                            type="number" 
                            name="price" 
                            placeholder='Offer a price $' 
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Due date</Form.Label>
                        <Form.Control 
                            type="date" 
                            name="dueDate" 
                        />
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
