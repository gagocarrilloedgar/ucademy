import { Injectable } from '@nestjs/common';

import { StudentsFinder } from './application/StudentsFinder';
import { StudentPrimitives } from './domain/Student';
import { StudentJsonRepository } from './infrastructure/StudentJsonRepository';

@Injectable()
export class StudentsService {
  private readonly repository: StudentJsonRepository =
    new StudentJsonRepository();

  private readonly find = new StudentsFinder(this.repository);

  create(newStudent: StudentPrimitives) {
    return console.log(newStudent);
  }

  findAll() {
    return this.find.run();
  }

  findOne(id: string) {
    return this.find.run(id);
  }

  update(id: string, updateStudentDto: Partial<StudentPrimitives>) {
    return console.log({ id, updateStudentDto });
  }

  remove(id: string) {
    return console.log(id);
  }
}
