import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";

const Tab = styled.button`
      padding: 10px 30px;
      cursor: pointer;
      opacity: 0.6;
      background: white;
      border: 0;
      outline: 0;
      border-bottom: 2px solid transparent;
      transition: ease border-bottom 250ms;
      ${({ active }) =>
    active &&
    `
        border-bottom: 10px solid black;
        opacity: 1;
      `}
    `;

function MealsFilterTab(props) {
  const items = props.items;
  let filterData = []
  const [showData, setshowData] = useState(items);
  const [active, setActive] = useState('danie głowne');
  const [input, setInput] = useState('');
  const types = ['danie głowne', 'zupy', 'przystawki']

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
    changeTab(active)
  }

  const changeTab = (type) => {
    setActive(type)
    filterData = items.filter((i) => {
      if (i.type_name === (active) && i.name.match(input)) {
        return i.name
      }
    })
    setshowData(filterData)
  }

  useEffect(() => {
    changeTab(active)
  }, [active, input]);

  const styles = {
    display: 'inline',
    width: '30%',
    height: 50,
    float: 'left',
    padding: 5,
    border: '0.5px solid black',
    marginBottom: 10,
    marginRight: 10
  }

  return (
    <div>
      <div style={{ margin: '0 auto', marginTop: '10%' }}>
        <label>Search:</label>
        <input type="text" onChange={handleChange} value={input} />
      </div>
      <div>
        {types.map((type) => (
          <Tab key={type} active={active === type} onClick={() => changeTab(type)}>
            {type}
          </Tab>
        ))}
      </div>

      <div>
        {showData.map(item => (
          <div style={styles} key={item.id}>

            <Link to={`/meals/${item.id}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MealsFilterTab;

/*
const [filterData, setfilterData] = useState(props.items);
 const [items, setItems] = useState(props.items);
 const [active, setActive] = useState('danie głowne');
 const [input, setInput] = useState('');
 
 
 
 
 handleSearch(event){
       let value = this.state.input.toLowerCase(); 
       if (typeof(event) === 'object'){ value = event.target.value.toLowerCase()}
       const active = this.state.active
       let result = [];
       result = this.state.items.filter((data) => {
       return data.name.search(value) >= 0 && data.type_name.search(active) >= 0
       });
       this.setState({filterData:result,input:value})
     }

     setActive(type){
       this.setState({active:type},()=>this.handleSearch())
       }
 
 
  if (input.length > 0) {
    filterData = items.filter((i) => {
      return i.name.match(input)  //>= 0 && i.type_name.match(active) >= 0
    })
  }



 */