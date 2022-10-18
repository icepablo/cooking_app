
import { singleApi } from "../helpers/showAllPosts";
import { Button, Image } from "react-bootstrap";
import styled from 'styled-components'
import IngredientsCounter from "./ingredientsCounter";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Container = styled.div`
border-color: red;
`
const Header = styled.h1`
color: blue;
display: none;
`
const Block1 = styled.div`
    width: 50%;
    float: left;
    height:100%;
    display:inline-block;
    margin:0;
    padding:15;
`
const Block2 = styled.div`
    width: 50%;
    float: rigth;
    height:100%;
    display:inline-block;
    margin:0;
    padding:0;
`
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
    <Container>
      <Block1>
        <SubBlock>
          <Image style={{ alignSelf: "center" }} src={item.photo} alt={item.name}></Image>
        </SubBlock>
        <SubBlock>
          <IngredientsCounter
            id={item.id}
            name={item.name}
            ingredients={item.ingredients}
            amount={item.amount}
          />
        </SubBlock>
      </Block1>
      <Block2>
        <div>
          <SubBlock>
            <Header>{item.name}</Header>
            <p>przepis: {item.recipe}</p>
          </SubBlock>
        </div>
        <div>
          <SubBlock>
            <p>składniki: {item.ingredients}</p>
          </SubBlock>
        </div>
      </Block2>
    </Container>
  );

}
export default SingleMeal;
