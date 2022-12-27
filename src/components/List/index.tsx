import React from "react";
import Item from "./Item";

import style from './List.module.scss';

import { ITasks } from "../../types/tasks";


function List({ tasks }: {tasks: ITasks[]}) {
  

  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        { tasks.map((item, index) => (
            <Item 
              key={index}
              {...item}
            />
          ))
        }
      </ul>
    </aside>
  )
}

export default List;