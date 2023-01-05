import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITasks } from '../types/tasks';

import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([]);
  const [selected, setSelected] = useState<ITasks>()

  function selectTask(selectedTask: ITasks) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task, selected: task.id === selectedTask.id ? true: false 
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks} 
        selectTask={selectTask}  
      />
      <Timer />
    </div>
  );
}

export default App;
