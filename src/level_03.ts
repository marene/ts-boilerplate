
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
        const sortedStudents = this._students.sort((a, b)=> a.age - b.age); 
        return sortedStudents[0]; 
        }

    findOldestStudent(): Student|void {
        const oldestStudent = this._students.sort((a, b)=> b.age - a.age)[0];

        return oldestStudent;
    }

    getSortedNamesList(): string[] {
        const sortedNamesList = this._students.sort((a, b) => a.name.localeCompare(b.name));
        return sortedNamesList.map(name => name.name); 
        //ASCII    
    }

    removeStudentsByName(nameToRemove: string): void { 
        this._students = this._students.filter(student => student.name !== nameToRemove);
        
        // studentsByName must contain all students EXCEPT the ones that have "nameToRemove" as a name
        // TRUE if student is not named "nameToRemove"
        // FALSE is student is named "nameToRemove"
        // RECURSIVE functions (exit condition)
    }     
} 