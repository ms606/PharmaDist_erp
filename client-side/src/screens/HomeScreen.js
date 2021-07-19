import React, {useEffect, useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import axios from 'axios'

const HomeScreen = () => {
    
    const [companyName, setCompanyName] = useState('')
    
    useEffect(() => {
        getCompanyName()                
    }, [])

    const  getCompanyName = async () => {
      const res = await axios.get('http://localhost:3000/api/companyprofile') 
      var data = res.data
      console.log('companyName',data)
      setCompanyName(data[0].TITLE)  
     
    }
  
    return (
        <div>
            <h2>Welcome to {companyName}</h2> 
           
            {/* <Card bg='dark' text='white' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
            <Card.Title>We believe in access everywhere</Card.Title>
            <Card.Text>
                
            </Card.Text>
            <Button variant="primary">Learn More</Button>
            </Card.Body>
            </Card> */}

        </div>

    )
}

export default HomeScreen
