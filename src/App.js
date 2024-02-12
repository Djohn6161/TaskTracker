function App() {
  const name = 'Don John Daryl Curativo';
  const x = false;

  return (
    <div className="container">
      <h1>Hello World my Name is {name} And I'm learning React</h1>
      <h2>I'm {x ? 'male' : 'female'}</h2>
    </div>
  );
}

export default App;
