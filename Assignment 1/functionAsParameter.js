function sayHello(param){
  console.log("hello Bhavya");
  param();
}
  
function workAssigned(){
  console.log("Completed the Assignment of Javascript")
}

sayHello(workAssigned)
