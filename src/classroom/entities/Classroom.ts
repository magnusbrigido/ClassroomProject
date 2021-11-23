import { v4 as uuidv4 } from "uuid";
import { Exam } from "../../exam/entities/Exam";
import { User } from "../../user/entities/User";

class Classroom {
  id: string;
  name: string;
  description: string;
  teacherId: string;
  students: User[];
  exam: Exam;

  constructor() {
    if(!this.id) this.id = uuidv4();
  }
}

export { Classroom };