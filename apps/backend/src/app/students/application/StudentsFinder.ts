import { StudentRepository } from '../domain/StudenRepository';

import { Student } from '../domain/Student';

export class StudentsFinder {
  constructor(private readonly repository: StudentRepository) {}

  async run(id?: string): Promise<Student | Student[]> {
    if (id) {
      return this.repository.search(id);
    }

    return this.repository.searchAll();
  }
}
