// Root Component
import react from 'react'
import Message from './components/Message';
import Movie from './components/Movie';
class App extends react.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#1e293b", color: 'white', fontStyle : 'italic' }}>
        <h1>App Component</h1>
        <hr />
        <Message />
        <hr />
        <Movie />
      </div>
    );
  }
}

export default App;