import React from 'react';
import './App.css';

//Criando uma lista de tarefas e renderizando no React
function App() {
  const tasks = ['acordar', 'tomar café', 'almoçar', 'estudar', 'caminhar', 'jantar', 'ver séries', 'dormir']
  const task = () => tasks
  .map((task) => <li>{task}</li>);
  return task();
}

export default App;
