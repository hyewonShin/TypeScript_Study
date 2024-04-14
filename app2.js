"use strict";
// 1) 함수의 반환(Return) 타입 명시
// - void 타입 : 결과 값을 반환하지 않는 함수에 설정
function sendGreeting() {
    console.log("mandu");
}
sendGreeting();
// - 예시 1
function sendGreeting1() {
    return ["Hello", "Mark"];
}
// - 예시 2
function sendGreeting2() {
    return "Hello, Mark";
}
// 2) 함수의 매개변수(Parameter) 타입 명시
function sendGreeting3(message3, userName3) {
    console.log(`${message3}`, `${userName3}`);
}
// - 함수에 정의된 모든 매개 변수가 함수에 필요하다고 가정하기 때문에 에러발생
// sendGreeting3("Hello");
// 2-1)선택적 매개변수 사용(매개변수 뒤에 ? 붙임)
// - 선택적 매개변수들은 필수 매개변수 뒤에 위치해야된다.
// - 선택적 매개변수 오른쪽에 위치한 매개변수들은 ?를 붙이지 않아도 선택적 매개변수로 인식함.
sendGreeting3("Hello"); // Hello undefined
// 2-2)기본 매개변수(매개변수 뒤에 =로 기본값 설정 )
// - 지정해둔 매개변수가 없을 경우 undifined 대신 기본값 설정
function sendGreeting4(message4 = "기본값1", userName4 = "기본값2") {
    console.log(`${message4}`, `${userName4}`);
}
sendGreeting4(); // 기본값1 기본값2
sendGreeting4("Hello"); // Hello 기본값2
sendGreeting4("Hello", "sunny"); // Hello sunny
