import react from 'react'
import Message from './components/Message';
class App extends react.Component{

    render(){
        return <div>
            <h1>App Component</h1>
            {/*  calling message components */}
            <Message/> 
        </div>
    }
}

export default App;