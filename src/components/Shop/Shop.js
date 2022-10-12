import React from 'react'
import { Container } from 'react-bootstrap'
import Recipes from '../Recipes/Recipes'

export default function Shop() {
  return (
    <div className='shop-wrapper'>
        <Container>
            <Recipes/>
        </Container>
      
    </div>
  )
}
