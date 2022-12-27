import React from "react";
import Button from "../Button";

import style from './Form.module.scss';

class Form extends React.Component {
  state = {
    task: "",
    time: "00:00:00"
  }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Adicione um novo estudo
          </label>
          <input 
            type="text"
            name="task"
            onChange={event => this.setState({...this.state, task: event.target.value})}
            value={this.state.task}
            id="task"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">
            Tempo
          </label>
          <input 
            type="time"
            step="1"
            name="time"
            onChange={event => this.setState({...this.state, time: event.target.value})}
            value={this.state.time}
            id="time"
            min="00:00:00"
            max="01:00:00"
            required
          />
        </div>
        <Button> Adicionar </Button>
      </form>
    )
  }
}

export default Form;