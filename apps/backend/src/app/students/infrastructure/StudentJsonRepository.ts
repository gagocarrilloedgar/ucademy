import { JsonDB } from 'node-json-db';

import { AppError } from '../../shared';
import { JsonDbRepositoryFactory } from '../../shared/infrastructure/persistence/JsonDbRepositoryFactory';
import { StudentRepository } from '../domain/StudenRepository';
import { Student, StudentPrimitives } from '../domain/Student';

export class StudentJsonRepository implements StudentRepository {
  private readonly db: JsonDB;

  constructor() {
    this.db = JsonDbRepositoryFactory.create();
  }

  async save(student: Student): Promise<void> {
    await this.db.push(`/`, student.toPrimitives());
  }

  async remove(student: Student): Promise<void> {
    throw new AppError('Not implemented', 500);
  }

  // This is more performant if exectued with a real ORM or database
  async search(id: string): Promise<Student> {
    const student = await this.db.filter(
      `/`,
      (student: StudentPrimitives & { _id: string }) => student._id === id
    );

    if (!student) {
      throw new AppError(`Student with id <${id}> does not exist`, 404);
    }

    const studentConverted = student[0] as StudentPrimitives & { _id: string };
    delete studentConverted._id;

    return Student.fromPrimitives({ ...studentConverted, id });
  }

  async searchAll(): Promise<Student[]> {
    const students = await this.db.getData('/');
    return students
      .slice(0, 10)
      .map((student: StudentPrimitives & { _id: string }) =>
        Student.fromPrimitives({ ...student, id: student._id })
      );
  }
}
