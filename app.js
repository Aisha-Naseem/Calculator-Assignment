function getNum(number){
    document.getElementById('result').value+=number
}

function clearNum(){
    document.getElementById('result').value=""
}

function clearAll(){
    document.getElementById('result').value=""
}

function removeNum(){
    var res=document.getElementById('result').value
    document.getElementById('result').value=document.getElementById('result').value.slice(0,res.length-1)
}

function getResult(){
   document.getElementById('result').value=eval(document.getElementById('result').value)
}

function square(){
    var res=document.getElementById('result').value
    var ans=Math.pow(+(res), 2)
    document.getElementById('result').value = ans
}

function calculate(){
    var res=document.getElementById('result').value
    var ans=Math.sqrt(+(res))
    document.getElementById('result').value = ans
}

function calculatePower(){
    var res=document.getElementById('result').value
    var ans=eval(res)
    document.getElementById('result').value = ans
}

function calculatePercentage(percentage){
    var num1= +(document.getElementById('result').value)
    var num2= +(document.getElementById('result').value)
    var result = (num1/num2) * 100
    document.getElementById('output').value = result
}