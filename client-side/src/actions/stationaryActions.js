import axios from 'axios'
import React from 'react'
import {Table, Form} from 'react-bootstrap'

class StationaryOrder extends React.Component{
    constructor(...args) {
        super(...args);
        this.state = {items: []};
    }

    async getData() {
        var itemStats = []
        const res = await axios.get('http://localhost:3000/api/stationaryItems')
        var data = res.data
        console.log('data',data)          
        data.map(item => itemStats.push(item))
        //data.map(item => itemStats.push({SCODE: `${item.SCODE}`, SNAME: `${item.SNAME}`}))
        //itemStats.map(item => this.setState({items: [...this.state.items, item]}))
        console.log('data2',itemStats)   
        this.setState({items: itemStats})


        return await res.data; // (Or whatever)
    }
    
    componentDidMount() {
            var itemStats = []
            this.getData()
    }

    render() {
        console.log('this state',this.state)  
        return (
            <div>
                <h2>Stationary list</h2>

                <Form.Control type="text" placeholder="Enter stationary" />
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
            </div>    
        )
    }
}

export  {StationaryOrder}


/*<li key={item.SCODE}>
                             {'   '}{item.SCODE}{'   '} {item.SNAME}{'   '} {item.BLQTY}
                        </li> */