import { StudentRepository } from '../domain/StudenRepository';

import { Student, StudentPrimitives } from '../domain/Student';

export class StudentsCreator {
  constructor(private readonly repository: StudentRepository) {}

  async run(student: StudentPrimitives): Promise<void> {
    return this.repository.save(Student.fromPrimitives(student));
  }
}
