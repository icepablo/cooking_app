import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import React, { useState, useEffect } from "react";

function IngredientsFilterTab(props) {

  //wyszukaj dania zawierajace składniki
  const [filterData, setfilterData] = useState([]);
  const items = props.items;
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState('');

  const mySubmitHandler = (event) => {
    event.preventDefault();
    setTags([...tags, input])
    setInput('')
    
  }

  const myChangeHandler = (event) => {
    setInput(event.target.value);
  }

  const handleSearch = () => {
    let result = [];
    console.log('ten kod')
    tags.map(tag => (
      result = items.filter((data) => {
        console.log('petla')
        return data.name.search(tag) !== -1;
      })
    ))
    setfilterData([...filterData,...result])
    //setfilterData(prevArray => [...prevArray, result])
  }
//setFilterData(result)
  useEffect(() => {
  console.log('tags',tags)
  handleSearch()
  setTags(tags)
  }, [tags]);
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
  if (filterData === [])
    return null
  return (
    <div>
      <form onSubmit={mySubmitHandler}>
        <h1>Składniki:
          {tags.map(item => (
            <div style={styles}>
              {item}
            </div>
          ))}
        </h1>
        <p>Dodaj składniki:</p>
        <input
          type='text'
          onChange={myChangeHandler}
          value={input}
        />
        <input
          type='submit'
        />
      </form>
      <div>
        dania zawierające składniki:
        {filterData.map(item => (

          <div style={styles}>
            <Link to={`/meals/${item.id}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IngredientsFilterTab;

/*
result.map(meal => (
      (filterData.indexOf(meal) > -1) ? null :
        setfilterData([meal])
    ))



 handleSearch(){
    let result = [];
    this.state.tags.map(tag => (
      result = this.state.items.filter((data) => {
        return data.name.search(tag.toLowerCase()) !== -1;
      })
    ))

    result.map(meal => (
      (this.state.filterData.indexOf(meal) > -1) ? null :
        this.setState(prevState => ({
          filterData: [...prevState.filterData, meal]
        }))
    ))
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      tags: [...prevState.tags, this.state.input]
    }), () => this.handleSearch())

    this.setState({ input: '' })
  }

  myChangeHandler = (event) => {
    this.setState({ input: event.target.value });
  }


  setfilterData((prevState) => ({
    ...prevState,
    firstKey: meal,
  }));




const handleSearch = () => {
    let result = [];
    tags.map(tag => (
      result = items.filter((data) => {
        return data.name.search(tag.toLowerCase()) !== -1;
      })
    ))
    result.map(meal => (
      (filterData.indexOf(meal) > -1) ? null :
        setfilterData([...filterData,meal])
    ))
  }




  */