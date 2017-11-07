import React from 'react'

import Header from '../Header'
import AddBlabber from '../AddBlabber'

import './style.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <AddBlabber />
      </div>
    )
  }
}

export default App
