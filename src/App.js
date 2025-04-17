import './App.css';


// Class components

const Card= ({title}) =>
  {
    return (
// className="Card"
      // inline > External

      <div className='Card'>

      <h2> {title} </h2>

      </div>
    );

  } 

const  App = () =>  {

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
