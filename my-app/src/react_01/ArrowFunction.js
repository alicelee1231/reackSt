
// function함수 대신 =() => {} 라는 화살표 함수를 사용
//화살표 함수는 주로 함수를 파라미터로 전달할 때 유용함

//또한 가르키는 값도 다름
//예로 allow function은 전역 변수 부분, 즉 자신이 종속된 인스턴스를 가리키고, 기존 function은 자신이 종속된 객체를 this로 받음
//ex)
function a(){
    this.name = 'black';
    return {
        name : "white",
        bark : function(){
            console.log(this.name  + "멍멍")
        }
    }
}
const aa = new a();
aa.bark(); 
// returen "white 멍멍"


function at() {
    this.name = "balck";
    return {
        name : "white",
        bark : () => {
            console.log(this.name + "으르렁")
        }
    } 
}
const att = new at();
att.bark();

//return "balck 으르렁"

//arrow function은 값을 연산하여 바로 반환할 때 사용하면 가독성도 좋음


function twice(value){
    return value * 2;
}

console.log(twice(2));

const triple = (value) => value * 3;
console.log(triple(2));
