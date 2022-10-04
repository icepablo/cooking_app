import React, { Component } from 'react'
import {BrowserRouter as Router,Route, Switch,Link, Redirect} from 'react-router-dom'

class IngredientsFilterTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filterData: [],
          items: this.props.items,
          tags: [],
          input: ''
        }
      };
      //wyszukaj dania zawierajace składniki
      

      handleSearch(){
       let result = [];
        this.state.tags.map(tag =>(
            result = this.state.items.filter((data) => {
              return data.name.search(tag.toLowerCase()) !== -1;
              })
              
        ))
       

      result.map(meal=>(
        (this.state.filterData.indexOf(meal)>-1) ? null :  
        this.setState(prevState => ({
          filterData: [...prevState.filterData, meal]
        }))
        ))


      }

    

      mySubmitHandler = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
          tags: [...prevState.tags, this.state.input]
        }),() =>this.handleSearch() )
        
        this.setState({input: ''})
      }

      myChangeHandler = (event) => {
        this.setState({input: event.target.value});
      }

  render(){
    const { tags, filterData } = this.state;
    const styles = {
      display:'inline',
      width:'30%',
      height:50,
      float:'left',
      padding:5,
      border:'0.5px solid black',
      marginBottom:10,
      marginRight:10
      }
    if (filterData===[])
      return null
        return ( 
            <div>
                <form onSubmit={this.mySubmitHandler}>
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
                    onChange={this.myChangeHandler}
                    value={this.state.input}
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
  }}



 export default IngredientsFilterTab