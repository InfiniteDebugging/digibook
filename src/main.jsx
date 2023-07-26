import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import Hello from './Hello'
import Card from './Card'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Hello name="Stranger!" /> */}
    <Card />
    <Card id="2" name="Second Entry" email="some.other@digibook.com" />
    <Card id="3" name="Third Entry" email="yet.other@digibook.com" />
    <Card id="4" name="Fourth Entry" email="what.other@digibook.com" />
    <Card id="5" name="Fifth Entry" email="that.other@digibook.com" />
  </React.StrictMode>,
)
