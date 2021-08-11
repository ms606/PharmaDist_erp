import axios from 'axios'
import React from 'react'
import {Table, Form} from 'react-bootstrap'
import AutoCompleteStationary from '../components/AutoCompleteStationary'

class StationaryOrder extends React.Component{
 constructor(...args) {
    super(...args);
    this.state = {
        items: [],
        value: ''
    };
    this.handleChange  = this.handleChange.bind(this)
 }
 
 handleChange(e) {
    this.setState({value: e.target.value})
    this.getData()
    console.log('this state',this.state)  

 }

 async getData() {
    var itemStats = []
    const res = await axios.get(`http://localhost:3000/api/stationaryItems/${this.state.value.toUpperCase()}`)
    var data = res.data
    //console.log('data',data)          
    data.map(item => itemStats.push(item))

    //console.log('data2',itemStats)   
    this.setState({items: itemStats})
    return await res.data; // (Or whatever)
}

componentDidMount() {
        var itemStats = []
        this.getData()
}

render() {
   
return (
<div>
    <h2>Stationary list</h2>
    
    <AutoCompleteStationary 
        inputSearchString = ''
    />  

    <Form>
        {/* <Form.Group>
        <Form.Control 
            type ="text"     
            value= {this.state.value} 
            placeholder="Enter stationary" 
            onChange = {this.handleChange}
        />
        </Form.Group>   */}
    <br />
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>In Stock</th>
                    </tr>
                </thead>
                <tbody>
                { this.state.items.map((item, index) => (  
                    <tr key={item.SCODE}>
                        <td>{item.SCODE}</td>
                        <td>{item.SNAME}</td>
                        <td>{item.BLQTY}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>                    
        </Form>
</div>    
    )
}
}
export  {StationaryOrder}