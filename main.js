//const로 선언된 변수는 덮어쓰는것이 불가능합니다
//const info = "엄청 중요한 정보";

//info = "실수로 덮어버린 정보"

//예외사항
//배열과 객체는 참조형자료이기 때문에, 밑에서 다시 작성할 경우
//재선언을 하는것이 아니라 참조값을 변경하는 것이기 때문에 예외사항으로 적용이 가능합니다

// const student = {
//     name : "david",
//     age : 20
// }

// student.name = "위수영";
// console.log(student);

/* 호이스팅
지역변수로 선언된 변수가 최상위 전역변수로 끌어져 올라가는 것 처럼 보이는 현상
올라가는 현상이었다면 밑에 결과는 undefined가 아니라 test가 담겨야합니다
하지만 test가 아닌것은 올라가지는것이 아니라 올라가는 것 처럼 보이는 현상이기 때문입니다
또한 undefined도 자료형의 값이므로 오류현상이긴 하지만 값이 존재하는것으로 취급할수 있습니다
 */

// console.log(info);
// var info = "test"

//undefined 는 에러가 아닌 하나의 자료형

//에크마6 문법에서 호이스팅 방지를 위해서 let 이라는 변수선언을 만듦

// console.log(info);
// let info = "test";

/*let은 정상적으로 에러상황을 콘솔로 찍어주고 있습니다
하지만 let은 호이스팅을 없애는 것은 아닙니다
어떻게 해결하였냐면 데드존을 만들어서 호이스팅의 결과를 데드존으로 설정해서 극복한것
*/

// function test(){
//     var local = "지역변수";
// }

// console.log(local)

// if(true){
//     var local1 = "일반 코드 블럭안에서의 지역변수"
// }

// console.log(local1)

/* 일반 함수의 코드블록에서는 지역변수 scope가 유지가 됩니다 즉 구역밖에서는
변수가 정의되지 않습니다 
하지만 일반 조건문이나 반복문 같은 코트블록안에서는 var로 선언된 지역변수는
호이스팅으로 전역화 됩니다  */

// if(true){
//     let local1 = "일반 코드 블럭안에서의 지역변수"
// }

// console.log(local1)

// let으로 선언하게되면 호이스팅이 극복되어 정상적으로 scope를 가집니다



// var btns = document.querySelectorAll("button");

// for(var i = 0; i<btns.length; i++){
//     btns[i].addEventListener("click", function(){
//         console.log(i);
//     })
// }

// i = 3;



/*반복문 코드블록안에 있는 변수 var가 지역변수임에도 불구하고
반복문이기 때문에 호이스팅이 일어나서 i값이 반복문안에서 반복이 끝난 후 사라지지 않고
마지막 카운트 3의 값이 전역변수로 등록되어버린 현상입니다

반복이 일어나면서 i++로 인해서 i는 3이 된채 for (var i = 0; i<btns.length; i++)을 만남
하지만 조건에 맞지않아서 원래는 무시되고 버려져야하는 i라는 값이
호이스팅이 되면서 전역변수로 넘어가버려서 살아있게 됩니다  */

//에크마 5문법에서 극복하는 방법
//즉시실행함수를 사용하여 안쪽의 변수값이 전역화 되지 않도록 강제로 캡슐화 시키는 방법
// var btns = document.querySelectorAll("button");

// for(var i = 0; i<btns.length; i++){
//     (function(){
//         btns[i].addEventListener("click", function(){
//             console.log(i);
//         })
//     })(i)
   
// }

//에크마 6문법에서 사용하는 방법은 let
/* 
let으로 호이스팅을 막아 전역변수가 되지 않기 때문에
지역변수로의 i가 온전하게 작동됩니다
따라서 각 i의 인덱스값은 해당 이벤트 발생된 시점에서의 i값으로 인식되어
버튼 클릭시 각 인덱스의 값을 콘솔로 반환해주는것입니다 
*/

var btns = document.querySelectorAll("button");

for(let i = 0; i<btns.length; i++){
    
        btns[i].addEventListener("click", function(){
            console.log(i);
        })
}