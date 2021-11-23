import { v4 as uuidv4 } from "uuid";

class Alternative {
  id: string;
  description: string;
  score: number;
  check: boolean;

  constructor() {
    if(!this.id) this.id = uuidv4();
  }
}

export { Alternative };