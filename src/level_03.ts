import { Student } from './level_03';



export class Student {
    constructor(private readonly _age: number, private readonly _name: string) {}

    get age(): number {
        return this._age;
    }

    get name(): string {
        return this._name;
    }
}

export class Classroom {
    constructor(private _students: Student[]) {}

    get students(): Student[] {
        return this._students;
    }

    addStudent(student: Student): void {
        const arrStudents = this._students;
        arrStudents.push(student);
        return;
    }

    

    findYoungestStudent(): Student|void {
        //const youngest = this._students.Math.min(Student, 0);
        const students = this._students;
        const youngest = students.find( student => students.length.Math.min(students))

        // let minimunAge = this._students[0];
       
        // for (let i= 0; i < this._students.length; i++) {
        //     if(this._students[i] < minimunAge){
        //     minimunAge = this._students[i];
        //       } else if (this._students[i] > minimunAge){
        //           this._students.Math.max(this.students [i];
        //       }
        //  return;
        //return new Student(0, 'John Doe')
       return youngest; 
    
        }

    findOldestStudent(): Student|void {
        return new Student(99, 'John Doe')
    }

    getSortedNamesList(): string[] {
        return [];
    }

    removeStudentsByName(name: string): void {
    }
        
        
    } 