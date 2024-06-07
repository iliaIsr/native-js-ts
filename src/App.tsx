import React from 'react';
import './App.css';


function App() {
  const name=[{name:"Illia"}, {name:"Hanna"}, {name:"Jenia"}, {name:"Darya"}, {name:"Kseniya"}, {name:"Lera"}];
  const names=name.map((n,index)=><li key={index}>{index}{n.name}</li>)

  return (
    <div className="App">`
        <ul>
            {names}
            {names}
        </ul>

      {/*<ul>{name.map(n=>*/}
      {/*    <li>*/}
      {/*      {n.name}*/}
      {/*    </li>)*/}
      {/*}</ul>*/}
    </div>
  );
}

export default App;
