import React from 'react';

class App extends React.Component {
  state = {
    message: "No message yet"
  }

  fetchData = async () => {
    const message = await fetch('/api/test')
    const JsonMessage = await message.json()
    this.setState({ message: JsonMessage.message })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return(
      <div>
        <h1> React App </h1>
        <p> {this.state.message} </p>
      </div>
    )
  }
}

export default App;
