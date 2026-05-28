



var x = 10;
function fun1() {
    console.log(x);
    console.log("this is function1");

    function fun2() {
        console.log(x);
        console.log("this is function 2");
    }
    fun2();
}

console.log(x);
fun1();




