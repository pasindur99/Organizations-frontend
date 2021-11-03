import './App.css';

const organisations = [
  {
      id: 5,
      name: "Adoptees"
  },
  {
      id: 6,
      name: "ODEL"
  }
  
  ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {organisations.map((organisation) => {
            return (
              <div key={organisation.id}>
                {organisation.name}
              </div>
            );
          })
        }
      </header>
    </div>
  );
}

export default App;
