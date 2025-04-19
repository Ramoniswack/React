import { use, useEffect, useState } from 'react';
import './App.css';


// Class components

const Card= ({title}) =>
  {
    const [HasLiked, setHasLiked] = useState(false);


    useEffect( () =>
    {
      console.log(`${title} has been Liked: ${HasLiked}`);
    }
    );

    return (
// className="Card"
      // inline > External

      <div className='Card'>

      <h2> {title} </h2>
      <button onClick={ ()=> {setHasLiked(!HasLiked)}}>  {HasLiked ? '💓': '🤍'} </button>

      </div>
    );

  } 

const  App = () =>  {

  // const
  // const [variable_name, set_same_Variable_name] = useState(false);
  // if the variable was number, we pass value inside useState
  // const [num, setNum] = useState(5); 


  const name = 'R.a.mon';

  const isNameShowing = true;
  return (
    <div className="card-container">

      <Card title="Star wars" rating={5} isCool={true} actors={[{ name:' Actors '}]} />
      
      <Card title="Avatar"/>
    
      <Card title="The Lion king"/>
    </div>
  );
}

export default App;
