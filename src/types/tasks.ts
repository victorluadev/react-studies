import { Key } from "react";

export interface ITasks {
  task: String,
  time: String,
  selected: Boolean,
  completed: Boolean,
  id: Key
}