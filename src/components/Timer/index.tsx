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

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronomêtro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time}/>
      </div>
      <Button>
        Começar
      </Button>
    </div>
  )
}