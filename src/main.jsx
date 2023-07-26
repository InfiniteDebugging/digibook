import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import Hello from './Hello'
import Card from './Card'
import CardList from './CardList'
import './index.css'
import { users } from './placeholders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Hello name="Stranger!" /> */}
    {/* <Card />
    <Card id="d2" name="Second Entry" email="some.other@digibook.com" />
    <Card id="d3" name="Third Entry" email="yet.other@digibook.com" />
    <Card id="d4" name="Fourth Entry" email="what.other@digibook.com" />
    <Card id="d5" name="Fifth Entry" email="that.other@digibook.com" />
    <Card id={users[0].id} name={users[0].name} email={users[0].email} />
    <Card id={users[1].id} name={users[1].name} email={users[1].email} />
    <Card id={users[2].id} name={users[2].name} email={users[2].email} />
    <Card id={users[3].id} name={users[3].name} email={users[3].email} /> */}
    <CardList cardList={users} />
  </React.StrictMode>,
)
