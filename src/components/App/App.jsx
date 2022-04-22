import React from 'react' 
import Header from '../Header/Header';
import './App.css'
//Class component
class App extends React.Component 
{    
    render() 
    {
        return (   
            <div>
                <Header/>
            </div>  
            
        )
    }
}
//Functional component 
// function App() 
// {   
//     return <h1>This is my functional component!</h1>
// } 

export default App;