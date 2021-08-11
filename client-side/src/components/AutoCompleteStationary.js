import React, { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import axios from 'axios'

function AutoCompleteStationary() {
    
    const [items, setItem] = useState([])
  
    async function getData (string) {
        var itemStats = []
        const res = await axios.get(`http://localhost:3000/api/stationaryItems/${string.toUpperCase()}`)
        var data = res.data
        console.log('data',data)          
        data.map(item => itemStats.push(item))
    
   
        //this.setState({items: itemStats})
       // console.log('itemStats',itemStats)  
        setItem(itemStats)

        console.log('items',items) 
        return await res.data; // (Or whatever)
    }


  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
 //   console.log(string)
    getData(string)

    console.log('stromg', string)
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return item;
   console.log('format', item)
   // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            fuseOptions={{ keys: ["SCODE","SNAME", "BLQTY"] }}
            resultStringKeyName="SNAME"
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}

export default AutoCompleteStationary