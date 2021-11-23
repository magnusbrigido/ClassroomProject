import { v4 as uuidv4 } from "uuid";
import { Alternative } from "../../alternative/entities/Alternative";

class Task {
  id: string;
  description: string;
  alternatives: Alternative[];

  constructor() {
    if(!this.id) this.id = uuidv4();
  }
}

export { Task };