import {Student} from "./Class/Student";
import {StudentManager} from "./Class/StudentManager";
import {question} from "readline-sync";

let student1 = new Student('a11', 'tran thi ha trang', '12d3', 'ha noi', 5, 've tranh');
let student2 = new Student('a12', 'tran ha anh', '10a2', 'ha noi', 8, 'an uong');
let student3 = new Student('b21', 'nguyen ngoc kien', '12a1', 'ho chi minh', 7, 'choi game');
let student4 = new Student('b52', 'nguyen van nam', '11c9', 'ca mau', 10, 'mua sam');
let student5 = new Student('c23', 'nguyen thi giang', '12h5', 'ho chi minh', 9, 'boi loi');

export let studentManager = new StudentManager();
export let readlineSync = require('readline-sync');


studentManager.addStudent(student1);
studentManager.addStudent(student2);
studentManager.addStudent(student3);
studentManager.addStudent(student4);
studentManager.addStudent(student5);

console.log('Hello!');

export function Main() {
    let menu: string[] = ['Show list',
            'Search a student by name',
            'Add a student',
            'Update a student',
            'Delete a student'],
        index = readlineSync.keyInSelect(menu, 'Select option');
    switch (index) {
        case 0:
            console.table(studentManager.showListStudents());
            Main();
            break;
        case 1:
            let similarName = question('Enter name:');
            console.table(studentManager.searchStudentBySimilarName(similarName));
            Main();
            break;
        case 2:
            let code = question('Enter code:');
            let name = question('Enter name:');
            let grades = question('Enter grades:');
            let address = question('Enter address:');
            let point: number = +question('Enter point:');
            let interest = question('Enter interest:');
            let student = new Student(code, name, grades, address, point, interest);
            studentManager.addStudent(student);
            console.log('Thêm thành công');
            Main();
            break;
        case 3:
            let oldCode = question('Enter old code:')
            let newCode = question('Enter code:');
            let newName = question('Enter name:');
            let newGrades = question('Enter grades:');
            let newAddress = question('Enter address:');
            let newPoint: number = +question('Enter point:');
            let newInterest = question('Enter interest:');
            studentManager.updateStudent(oldCode, newCode, newName, newGrades, newAddress, newPoint, newInterest);
            Main();
            break;
        case 4:
            let codeToDelete = question('Enter code:');
            studentManager.deleteStudent(codeToDelete);
            Main();
            break;
        default:
            console.log('Goodbye!');
    }
}

Main();


