import React from 'react';
import './App.css';

const tarefas = ["Acordar", "Tomar Banho", "Tomar café", "Fazer higiene pessoal", "Ir Trabalhar"];

const App = () => ( <ul>{ tarefas.map(tarefa => <li>{ tarefa }</li>) }</ul> );

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
