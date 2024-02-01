import "./App.css";

const App = () => {
  const name = "Hasan";

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      {name ? (
      <>
        test
      </>
      ): ()}
    </div>
  );
};

export default App;
