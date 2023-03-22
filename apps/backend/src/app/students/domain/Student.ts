import { StudenCoursePrimitives, StudentCourse } from './StudentCourse';
import { StudentUuid } from './StudentUuid';

export interface StudentPrimitives {
  id: string;
  isOnline: boolean;
  name: string;
  avatar: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  inscriptionDate: Date;
  courses: Array<StudenCoursePrimitives>;
}

export class Student {
  id: StudentUuid;
  isOnline: boolean;
  name: string;
  avatar: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  inscriptionDate: Date;
  courses: Array<StudentCourse>;

  constructor(
    id: StudentUuid,
    isOnline: boolean,
    name: string,
    avatar: string,
    lastName: string,
    username: string,
    email: string,
    phone: string,
    inscriptionDate: Date,
    courses: Array<StudentCourse>
  ) {
    this.id = id;
    this.isOnline = isOnline;
    this.name = name;
    this.avatar = avatar;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.inscriptionDate = inscriptionDate;
    this.courses = courses;
  }

  static fromPrimitives(primitives: StudentPrimitives) {
    return new Student(
      new StudentUuid(primitives.id),
      primitives.isOnline,
      primitives.name,
      primitives.avatar,
      primitives.lastName,
      primitives.username,
      primitives.email,
      primitives.phone,
      primitives.inscriptionDate,
      primitives.courses.map((course) => StudentCourse.fromPrimitives(course))
    );
  }

}
