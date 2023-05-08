import {Student} from "./Student";

export class StudentManager {
    listStudents: Student[] = [];

    constructor() {
    }

    showListStudents() {
        if (this.listStudents.length === 0) {
            return 'Không có dữ liệu';
        } else {
            return this.listStudents;
        }
    }

    searchStudentBySimilarName(similarName: string) {
        let flag: boolean;
        for (let i = 0; i < this.listStudents.length; i++) {
            if (this.listStudents[i].getName().includes(similarName) === true) {
                return this.listStudents[i];
            } else {
                flag = false;
            }
        }
        if (!flag) {
            return "Không có dữ liệu phù hợp";
        }
    }

    searchStudentByCode(code: string) {
        let flag: boolean;
        for (let i = 0; i < this.listStudents.length; i++) {
            if (this.listStudents[i].getCode() === code) {
                return this.listStudents[i];
            } else {
                flag = false;
            }
        }
        if (!flag) return "Không có dữ liệu phù hợp";
    }

    addStudent(student: Student) {
        this.listStudents.push(student);
    }

    updateStudent(oldCode: string, code: string, name: string, grades: string, address: string, point: number, interest: string) {
        let result = this.searchStudentByCode(oldCode);
        let flag: boolean = false;
        for (let i = 0; i < this.listStudents.length; i++) {
            if (this.listStudents[i] === result) {
                this.listStudents[i].setCode(code);
                this.listStudents[i].setName(name);
                this.listStudents[i].setGrades(grades);
                this.listStudents[i].setAddress(address);
                this.listStudents[i].setPoint(point);
                this.listStudents[i].setInterest(interest);
                flag = true;
            }
        }
        if (!flag) {
            console.log('Không tồn tại sinh viên cần update');
        } else {
            console.log('Sửa thành công');
        }
    }

    deleteStudent(code: string) {
        let result = this.searchStudentByCode(code);
        let index: number;
        let flag: boolean = false;
        for (let i = 0; i < this.listStudents.length; i++) {
            if (this.listStudents[i] === result) {
                index = i;
                flag = true;
            }
        }
        if (flag) {
            this.listStudents.splice(index, 1);
            console.log('Xoá thành công');
        } else {
            console.log('Không tồn tại sinh viên cần xoá');
        }
    }
}