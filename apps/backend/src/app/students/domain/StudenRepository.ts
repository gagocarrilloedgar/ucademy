import { Student } from './Student';

export interface StudentRepository {
  save(student: Student): Promise<void>;
  remove(student: Student): Promise<void>;
  search(id: string): Promise<Student>;
  searchAll(): Promise<Student[]>;
}
