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
    }

    findYoungestStudent(): Student|void {
        return new Student(0, 'John Doe')
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
