import React from "react";
import Item from "./Item";
import { ITasks } from "../../types/tasks";

import style from './List.module.scss';


interface Props {
  tasks: ITasks[],
  selectTask: (selectedTask: ITasks) => void
}

function List({ tasks, selectTask }: Props) {
  

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        { tasks.map((item) => (
            <Item 
              selectTask={selectTask}
              key={item.id}
              {...item}
            />
          ))
        }
      </ul>
    </aside>
  )
}

export default List;