import { Test, TestingModule } from '@nestjs/testing';

import data from '../../../../../DB.json';
import { Student } from './domain/Student';

import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

describe('StudentsController', () => {
  let controller: StudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsController],
      providers: [StudentsService],
    }).compile();

    controller = module.get<StudentsController>(StudentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of students', async () => {
    const students = await controller.findAll();
    expect(students).toBeInstanceOf(Array<Student>);
  });

  it('should return a student', async () => {
    const studentJson = data[0];

    const student = await controller.findOne(studentJson._id);
    expect(student).toBeInstanceOf(Student);
  });
});
