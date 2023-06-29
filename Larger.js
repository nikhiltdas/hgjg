var r=require('readline-sync')
num1=r.question("Enter two numbers" )
num2=r.question(' ')

if(num1>num2){
    console.log('Larger is' +num1)
}
else if(num1===num2){
    console.log('The numbers are equal')
}else if(num2>num1){
console.log('Larger is ' +num2)
}