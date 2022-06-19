import React from 'react';
import '../CardList/CardList.styles.css';
import { Card } from '../Card/Card.component';


export const CardList=(props)=>{
return <div className='CardList'>{
    props.monster.map(monster => (
    <Card key={monster.id} monster={monster}/>
    ))
  }</div>
}