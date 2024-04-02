// Type Inference(타입추론)
// 예시 1
var a = 5;
// a = "hello";
// 타입스크립트는 변수 a를 숫자(Number)로 추론 하기 때문에 문자(String)형식으로 변경하려하면 에러발생.
//예시 2
var student = {
    name: "jack",
    courseL: "Getting Started with TypeScript",
    condingIQ: 80,
    code: function () {
        console.log("brain is working hard");
    },
};
// student.name = 10; => 타입추론으로 인하여 에러발생
//예시 3
function calculateCodingIQ(lostPoint) {
    return 100 - lostPoint;
}
// 함수에 마우스를 올리면 function calculateCodingIQ(lostPoint: any): number 과 같이 lostPoint의 형식을 숫자형으로 추론한 것을 알 수있음.
