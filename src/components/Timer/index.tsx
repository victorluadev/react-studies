import { useEffect, useState } from "react";
import { TimeToSeconds } from "../../common/utils/time";
import { ITasks } from "../../types/tasks";
import Button from "../Button";
import Clock from "./Clock";

import style from './Timer.module.scss';


interface Props {
  selected: ITasks | undefined;
}

export default function Timer({ selected } : Props) {
  const [time, setTime] = useState<number>();  

  useEffect(() => {
    if(selected?.time) {
      setTime(TimeToSeconds(selected.time));
    }
  }, [selected])

  function regressive(count: number = 0) {
    setTimeout(() => {
      if(count > 0) {
        setTime(count - 1)

        return regressive(count - 1)
      }
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronomêtro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time}/>
      </div>
      <Button onClick={() => regressive(time)}>
        Começar
      </Button>
    </div>
  )
}