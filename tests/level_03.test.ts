import { Student, Classroom } from '../src/level_03';

describe('level_03', () => {
    describe('addStudent', () => {
        it('should add a student at the end of the list', () => {
            const classroom = new Classroom([
                new Student(19, 'Philip'),
            ]);

            classroom.addStudent(new Student(18, 'Jeanne'));

            expect(classroom.students).toEqual([
                new Student(19, 'Philip'),
                new Student(18, 'Jeanne'),
            ]);
        });

        it('should add several students at the end of the list', () => {
            const classroom = new Classroom([
                new Student(20, 'John'),
            ]);

            classroom.addStudent(new Student(19, 'George'));
            classroom.addStudent(new Student(20, 'Susie'));

            expect(classroom.students).toEqual([
                new Student(20, 'John'),
                new Student(19, 'George'),
                new Student(20, 'Susie'),
            ]);
        });
    });

    describe('findYoungestStudent', () => {
        it('should find the youngest student in the list', () => {
            const classroom = new Classroom([
                new Student(20, 'Matthew'),
                new Student(19, 'Mathilde'),
                new Student(20, 'Mathias'),
                new Student(15, 'Andrei'),
                new Student(16, 'Vicenc'),
            ]);

            const youngest = classroom.findYoungestStudent();

            expect(youngest).toEqual(new Student(15, 'Andrei'));
        });

        it('should find the youngest student in the list - 2', () => {
            const classroom = new Classroom([
                new Student(21, 'Rosie'),
                new Student(24, 'Luke'),
                new Student(18, 'Thomas'),
                new Student(19, 'Elizabeth'),
                new Student(17, 'Mary'),
            ]);

            const youngest = classroom.findYoungestStudent();

            expect(youngest).toEqual(new Student(17, 'Mary'));
        });

        it('should return undefined if the array is empty', () => {
            const classroom = new Classroom([]);

            const youngest = classroom.findYoungestStudent();

            expect(youngest).toBeUndefined();
        });
    });

    describe('findOldestStudent', () => {
        it('should find the oldest student in the list', () => {
            const classroom = new Classroom([
                new Student(19, 'Anne'),
                new Student(18, 'Charlotte'),
                new Student(21, 'Charles'),
                new Student(23, 'Winston'),
                new Student(24, 'Louis'),
            ]);

            const oldest = classroom.findOldestStudent();

            expect(oldest).toEqual(new Student(24, 'Louis'));
        });

        it('should find the oldest student in the list - 2', () => {
            const classroom = new Classroom([
                new Student(20, 'Rose'),
                new Student(25, 'Aldo'),
                new Student(17, 'Eddy'),
                new Student(20, 'Claudia'),
                new Student(18, 'Maria'),
            ]);

            const oldest = classroom.findOldestStudent();

            expect(oldest).toEqual(new Student(25, 'Aldo'));
        });

        it('should return undefined if the array is empty', () => {
            const classroom = new Classroom([]);

            const oldest = classroom.findOldestStudent();

            expect(oldest).toBeUndefined();
        });
    });

    describe('getSortedNamesList', () => {
        it('should return the sorted list of names', () => {
            const classroom = new Classroom([
                new Student(19, 'Anne'),
                new Student(18, 'Charlotte'),
                new Student(21, 'Charles'),
                new Student(23, 'Winston'),
                new Student(24, 'Louis'),
            ]);

            expect(classroom.getSortedNamesList()).toEqual([
                'Anne',
                'Charles',
                'Charlotte',
                'Louis',
                'Winston',
            ]);
        });


        it('should return the sorted list of names - 2', () => {
            const classroom = new Classroom([
                new Student(20, 'Rose'),
                new Student(25, 'Aldo'),
                new Student(17, 'Eddy'),
                new Student(20, 'Claudia'),
                new Student(18, 'Maria'),
            ]);

            expect(classroom.getSortedNamesList()).toEqual([
                'Aldo',
                'Claudia',
                'Eddy',
                'Maria',
                'Rose',
            ]);
        });

        it('should return an empty array if the list of students is empty', () => {
            const classroom = new Classroom([]);

            expect(classroom.getSortedNamesList()).toEqual([]);
        })
    });

    describe('removeStudentsByName', () => {
        it('should remove a student by name from the list', () => {
            const classroom = new Classroom([
                new Student(20, 'Lydia'),
                new Student(20, 'Jeanne'),
                new Student(20, 'Albert'),
                new Student(20, 'Francoise'),
            ]);

            classroom.removeStudentsByName('Jeanne');

            expect(classroom.students).toEqual([
                new Student(20, 'Lydia'),
                new Student(20, 'Albert'),
                new Student(20, 'Francoise'),
            ]);
        });

        it('should remove several students by name from the list', () => {
            const classroom = new Classroom([
                new Student(20, 'Jeannine'),
                new Student(20, 'Robin'),
                new Student(20, 'William'),
                new Student(20, 'Severine'),
                new Student(20, 'William'),
                new Student(20, 'Mark'),
            ]);

            classroom.removeStudentsByName('William');

            expect(classroom.students).toEqual([
                new Student(20, 'Jeannine'),
                new Student(20, 'Robin'),
                new Student(20, 'Severine'),
                new Student(20, 'Mark'),
            ]);
        });
    });
});
