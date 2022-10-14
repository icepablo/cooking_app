import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import React, { useState, useEffect } from "react";


const Block = styled.div`
float: right;
`
const Block2 = styled.div`
float: left;
`
const Thindiv = styled.div`
white-space: pre-line;
`

function IngredientsCounter(props) {
  const [id, setId] = useState(props.id)
  const [value, setValue] = useState(2)
  const [name, setName] = useState(props.name)
  const [ingredients, setIngredients] = useState(props.ingredients)
  const [amount, setAmount] = useState(props.amount)

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('Ilośc osób: ' + value);
    event.preventDefault();
    addUpdateItem()
  }

  const addUpdateItem = function () {
    var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
    const index = oldItems.findIndex(x => x.id === id)
    if (index > -1) {
      delete oldItems[index]
      oldItems = oldItems.filter(Boolean)
    }
    oldItems.push({ id, value, name, ingredients, amount });
    localStorage.setItem('itemsArray', JSON.stringify(oldItems));
  };

  return (
    <div >
      skladniki dla {value} osób :
      <Block><Thindiv>{amount.map(val => (val.amount + 'g ' + val.ingredient_name + '\n'))}</Thindiv></Block>
      <Block2><Thindiv> x</Thindiv></Block2>
      <form onSubmit={handleSubmit} >
        <label>
          <input type="number" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Wyślij" />
      </form>
      <Link to={{ pathname: '/meals/summary' }}>Wszystkie składniki</Link>
    </div>
  )
}

export default IngredientsCounter;




/*
{splitAmount.map(x=>(x*portions+"g"+'\n'))}


const IngredientsCounter = ({add}) => {
  const movieInput = React.createRef()

   const addMovie = (event) => {
    event.preventDefault()
    add(movieInput.current.value)
    movieInput.current.value = ''
  }

   return <form onSubmit={addMovie}>
    <input ref={movieInput} />
    <button type='submit'>Add movie</button>
  </form>
}

 const mapDispatchToProps = dispatch => ({
  add: (list) => dispatch(actions.add(list))
  })

export default connect (null,mapDispatchToProps)(IngredientsCounter)
*/

/*
<Link to={{ pathname:'/meals/summary',  state: this.state}}>Wszystkie składniki</Link>
otwieranie propsow z linka
const  mealDetails  = this.props.location.state;
        console.log('props',mealDetails)
*/


/*
class IngredientsCounter extends Component {
  constructor(props) {
      super(props);
      this.state = {
        id: this.props.id,
        mealName: this.props.mealName, 
        ingNames: this.props.ingNames,
        ingAmount: this.props.ingAmount,
        value:2,
      }
    
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      this.setState({portions: event.target.value});
      alert('Ilośc osób: ' + this.state.value);
      event.preventDefault();
    }
  
    



  render() {
    
    const splitAmount = this.state.ingAmount.split(" ");
    const portions = this.state.value
    const mealName = this.state.mealName
    return (
        <div >
             skladniki dla {this.state.value} osób : 
                  
                  <Block><Thindiv>{ this.state.ingNames.map(x=>(x +'\n'))}</Thindiv></Block>
                  <Block2><Thindiv>{splitAmount.map(x=>(x*portions+"g"+'\n')) }</Thindiv></Block2>
            {console.log(this.props)}
                  <form onSubmit={this.handleSubmit} >
                  <label>
                    
                    <input type="number" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Wyślij" />
                </form>
                
                <Link to={{ pathname:'/meals/summary'}}>Wszystkie składniki</Link>
              

        </div>

    )

  }
}

export default connect (mapDispatchToProps)(IngredientsCounter)

*/