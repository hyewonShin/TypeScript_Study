"use strict";
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["human"] = "human";
})(GenderType || (GenderType = {}));
// Type Inference(타입추론)
// 예시 1
// let a = 5;
// a = "hello";
// 타입스크립트는 변수 a를 숫자(Number)로 추론 하기 때문에 문자(String)형식으로 변경하려하면 에러발생.
//예시 2
// let student = {
//   name: "jack",
//   courseL: "Getting Started with TypeScript",
//   condingIQ: 80,
//   code: function () {
//     console.log("brain is working hard");
//   },
// };
// student.name = 10; => 타입추론으로 인하여 에러발생
//예시 3
// function calculateCodingIQ(lostPoint) {
//   return 100 - lostPoint;
// }
// 함수에 마우스를 올리면 function calculateCodingIQ(lostPoint: any): number 과 같이 lostPoint의 형식을 숫자형으로 추론한 것을 알 수있음.
// 타입명시
// : 변수를 선언할 때, 변수 값의 타입을 명시함으로써 변수 값의 데이터 타입을 지정
// let studentID: number = 12345;
// let studentName: string = "Jenny Kim";
// let age: number = 21;
// let gender: string = "female";
// let subject: string = "Javascript";
// let courseCompleted: boolean = false;
let student1 = {
    studentID: 12345,
    studentName: "Jenny Kim",
    age: 21,
    gender: GenderType.Female,
    subject: "Javascript",
    courseCompleted: false,
};
function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: "Jenny Kim",
        gender: "male",
        subject: "Javascript",
        courseCompleted: false,
    };
}
function saveStudentDetails(student) {
    // ReadOnly 프로퍼티는 읽기 전용 프로퍼티로 객체 생성시 할당된 프로퍼티의 값을 바꿀 수 없다
    // student.studentID = 123;
}
saveStudentDetails(student1);
// 만일 함수가 특정 값을 반환하는 경우 반환되는 타입을 명시해주면 된다.
// 아무것도 반환하지 않는다는다면 :void를 명시해준다.
// void나 any 타입이 아닌 경우에 아무런 값도 반화하지 않는다면 에러가 난다.
// Enum : 연관된 아이템들을 함께 묶어서 표현 할 수 있는 수단이다.
