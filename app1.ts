// 어떤 형태의 데이터든 담을 수 있는(정확성이 떨어지는) any 타입은 최대한 지양한다.
let someValue: any = 5;
someValue = "hello";
someValue = true;

// 유니언 타입
// 자바스크립트의 OR 연산자( || )와 같이 'A' 이거나 'B'이다 라는 의미의 타입.
let price: number | string = 5;
price = "green";
price = 1;
// price = true; ==> 지정된 타입이 아니기 때문에 에러 발생

// 타입 별칭(Type Aliases)
// 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수.
type StrOrNum = number | string;
let totalCost: number;
let orderID: StrOrNum;

const calculateTotalCost = (price: StrOrNum, qty: number): void => {};

const findOrderID = (
  customer: { costomerId: StrOrNum; name: string },
  productId: StrOrNum
): StrOrNum => {
  return orderID;
};

// 타입 가드(Type Guards)
// typeof Operator : typeof 연산자와 조건문 사용
type StringOrNum = string | number;
let itemPrice: number;

const setItemPrice = (price: StringOrNum): void => {
  if (typeof price === "string") {
    itemPrice = 0;
  } else {
    itemPrice = price;
  }
};

setItemPrice("123");
