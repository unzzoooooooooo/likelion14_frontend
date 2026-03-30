// 콘솔 출력
console.log("JS 파일 연결 완료!");

// myButton이라는 id를 가지는 버튼을 button이라는 변수명으로 불러오기
const button = document.getElementById("myButton");

// 이벤트 리스너 (해당 버튼을 사용자가 클릭 했을때 일어날 일을 정해둠)
button.addEventListener("click", runPractice);


// 이벤트 리스너에서 실행할 runPractice 함수
function runPractice() {

    console.log("버튼이 클릭되었습니다!");

    // 변수 & 자료형
    let age = 20;
    // 사용자가 적은 이름을 name이라는 변수명으로 가져오기
    let name = document.getElementById("nameInput").value; 
    // isAdult 변수의 값은 age >= 19가 참이면 true, 거짓이면 false
    let isAdult = age >= 19; 

    console.log("이름:", name);
    console.log("나이:", age);
    console.log("성인인가요?", isAdult);

    // 연산자
    let sum = age + 5;
    console.log("5년 뒤 나이:", sum);

    // checkAdult 함수 호출
    checkAdult(isAdult);

    // runLoop 함수 호출
    runLoop();

    // greet 함수
    let message = greet(name);
    console.log(message);

    // 화면 변경
    document.querySelector("h1").textContent = message;
}

// checkAdult 함수
function checkAdult(isAdult) {
    if (isAdult) {
        console.log("성인입니다.");
    } else {
        console.log("미성년자입니다.");
    }
}

// runLoop 함수
function runLoop() {
    console.log("반복문 시작");

    for (let i = 1; i <= 3; i++) {
        console.log("현재 숫자:", i);
    }

    let fruits = ["사과", "바나나", "오렌지"];

    for (let fruit of fruits) {
        console.log("과일:", fruit);
    }
}

// greet 함수
function greet(userName) {
    return userName + "님 환영합니다!";
}