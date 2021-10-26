import React, { Component } from 'react';
import Faq from 'react-faq-component';



const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "What I am not happy with the services",
      content: " You can contact us at any time and our support team will assist you "
    },
    {
      title: "Are you available internationally?",
      content: "No,we currently available across India and would love to expand internationally"
    },
    {
      title: "  What are you hours?",
      content: "We operate from 8am- 5pm everyday"
    },
  ]
}

export default class App extends Component {
  render() {
    return (
      <>
      <h1> QuickGhy</h1>
      
      <div>
        <Faq data={data}/>
      </div>
      </>
    )
  }
}