import React, {useState} from 'react'
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap'
import { login } from '../actions/userActions'
import { useDispatch } from 'react-redux'
//import { Link } from 'react-router-dom'
//import { useSelector } from 'react-redux'

const LoginScreen = ({ location, history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
   

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
        history.push('/')
    }

    return (
        <div>
            <h2>Welcome to Burhanis' Distribution ERP</h2>
            <Container fluid>
               <Row>
                 <div className="bg-dark" style={{ width: '50rem' }}>
                 <Col>
                    <Card bg='dark' text='white' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                    <Card.Title>We believe in access everywhere</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                    </Card.Body>
                    </Card>
                </Col>
                </div>  
                <Col>
                <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>    
                </Col>
               </Row> 
            </Container>
            
        </div>

    )
}

export default LoginScreen
