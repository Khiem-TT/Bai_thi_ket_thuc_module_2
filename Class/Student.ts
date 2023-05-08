export class Student {
    private _code: string;
    private _name: string;
    private _grades: string;
    private _address: string;
    private _point: number;
    private _interest: string;

    constructor(code: string, name: string, grades: string, address: string, point: number, interest: string) {
        this._code = code;
        this._name = name;
        this._grades = grades;
        this._address = address;
        this._point = point;
        this._interest = interest;
    }

    getCode(): string {
        return this._code;
    }

    setCode(value: string) {
        this._code = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getGrades(): string {
        return this._grades;
    }

    setGrades(value: string) {
        this._grades = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }

    getPoint(): number {
        return this._point;
    }

    setPoint(value: number) {
        this._point = value;
    }

    getInterest(): string {
        return this._interest;
    }

    setInterest(value: string) {
        this._interest = value;
    }
}