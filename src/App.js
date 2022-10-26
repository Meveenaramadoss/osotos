
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';


const URL = 'http://localhost/osotos/';

function App() {
const [tasks, setTasks] =useState([]);

useEffect(() => {
  axios.get(URL)
  .then((response) =>{
    setTasks(response.data)
  }).catch(error =>{
    alert(error);
  },)

 
}, [])

  return (
  <div className ="container">
    <ol>
      {tasks?.map(task => ( 
        <li key ={task.id}>{task.description}</li>

      ))}
    </ol>
  </div>
  );
}

export default App;
