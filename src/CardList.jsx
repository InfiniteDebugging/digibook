import React from 'react'
import Card from './Card'

const CardList = ({ cardList }) => {
    return (
        <> {cardList.map(card => <Card id={card.id} name={card.name} email={card.email} />)} </>
    )
}

export default CardList