import style from './Clock.module.scss';

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteFstPosition, minuteScdPosition] = String(minutes).padStart(2, "0");
  const [secondFstPosition, secondScdPosition] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minuteFstPosition}</span>
      <span className={style.relogioNumero}>{minuteScdPosition}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondFstPosition}</span>
      <span className={style.relogioNumero}>{secondScdPosition}</span>
    </>
  )
}