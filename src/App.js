import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}
const App = ()=>{
  return (
    <div className="App">
      <Person name={'Salih'} lastName={'Bakir'} age={36}/>
      <Person name={'Melike'} lastName={'Bakir'} age={31}/>
    </div>
  );
}

export default App;
