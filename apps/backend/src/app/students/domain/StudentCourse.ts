export interface StudenCoursePrimitives {
  id: string;
  title: string;
  description: string;
  percentCompleted: number;
  inscriptionDate: Date;
}

export class StudentCourse {
  private readonly id: string;
  private readonly title: string;
  private readonly description: string;
  private readonly percentCompleted: number;
  private readonly inscriptionDate: Date;

  constructor(
    id: string,
    title: string,
    description: string,
    percentCompleted: number,
    inscriptionDate: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.percentCompleted = percentCompleted;
    this.inscriptionDate = inscriptionDate;
  }

  static fromPrimitives(primitives: StudenCoursePrimitives) {
    return new StudentCourse(
      primitives.id,
      primitives.title,
      primitives.description,
      primitives.percentCompleted,
      primitives.inscriptionDate
    );
  }

  toPrimitives(): StudenCoursePrimitives {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      percentCompleted: this.percentCompleted,
      inscriptionDate: this.inscriptionDate,
    };
  }
}
