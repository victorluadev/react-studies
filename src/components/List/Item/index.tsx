import style from "../List.module.scss";

export default function Item({task, time}: { task: String, time: String }) {
  
  
  return(
    <li className={style.item}>
      <h3>
        {task}
      </h3>
      <span>
        {time}
      </span>
    </li>
  )
}