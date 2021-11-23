import { v4 as uuidv4 } from "uuid";
import { Task } from "../../task/entities/Task";

class Exam {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  date: Date;
  duration: number;

  constructor() {
    if(!this.id) this.id = uuidv4();
  }
}

export { Exam };