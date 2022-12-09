
import { singleApi } from "../helpers/showAllPosts";
import { Button, Image } from "react-bootstrap";
import styled from 'styled-components'
import IngredientsCounter from "./ingredientsCounter";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
border:1px solid;
border-color:grey;
max-width:1920px;
 
  gap 1em;  

}
`
const Header = styled.h1`
color: blue;
`
//display: none;

const SubBlock = styled.div`
className: 'columns',
    max-width: 600px;
    height: 425px;
    border:1px solid;
    border-color:red;
    margin:5px;
    background:#F8F8FF;
    border-radius: 5px;
    text-align:center;
    display: flex;
    flex-direction: column;
    width: 100%;
    
`
const SubBlock2 = styled.div`
  
    max-width: 600px;
    min-width: 600px;
    height: 425px;
    border:1px solid;
    border-color:red;
    margin:5px;
    background:#F8F8FF;
    border-radius: 5px;
    text-align:center;
    display: flex;
    flex-direction: column;
    width: 100%;
    
`
const PhotoBlock = styled.div`
    max-width: 600px;
    min-width: 600px;
    height: 850px;
    border:1px solid;
    border-color:red;
    margin:5px;
    background:#F8F8FF;
    border-radius: 5px;
    text-align:center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    
`

const Thindiv = styled.div`
white-space: pre-line;
`
function SingleMeal(props) {

  const [item, setItem] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const { itemId } = useParams();

  useEffect(() => {
    async function fetchFromDatabase() {
      const item = await singleApi(itemId)
      setItem(item)
      setIsLoaded(true)
    }
    fetchFromDatabase();
  }, [])

  if (!isLoaded)
    return <div>Loading...</div>;
  
  return (
    <div>
    <Navbar />
    <Container>
      
      
        <SubBlock>
          <Header>{item.name}</Header>
          <p style={{whiteSpace: 'pre-line'}}>składniki:  
          {item.amount.map(val => <div><FontAwesomeIcon icon=" fa-carrot" />{
            val.amount + 'g ' + val.ingredient_name + '\n'}</div>)}
          
          </p>
        </SubBlock>
        <SubBlock>
          <IngredientsCounter
            id={item.id}
            name={item.name}
            ingredients={item.ingredients}
            amount={item.amount}
          />
        </SubBlock>
      
      
        <div>
          <PhotoBlock>
            <Image style={{ alignSelf: "center" }} src={item.photo} alt={item.name}></Image>
          </PhotoBlock>
        </div>
        <div>
          <SubBlock2>
            <p>przepis: {item.recipe}</p>
          </SubBlock2>
        </div>
      
    </Container>
    </div>
  );

}
export default SingleMeal;

/*
const SubBlock = styled.div`
    width: 600px;
    height: 500px;
    border:1px solid;
    border-color:red;
    margin:5px;
    background:#F8F8FF;
    border-radius: 5px;
    text-align:center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    
`

*/