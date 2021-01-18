var clear = document.querySelector('#clear');
var backspace = document.querySelector('#backspace');
var percentage = document.querySelector('#percentage');
var divide = document.querySelector('#divide');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var multiply = document.querySelector('#multiply');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var minus = document.querySelector('#minus');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var plus = document.querySelector('#plus');
var square = document.querySelector('#square');
var zero = document.querySelector('#zero');
var point = document.querySelector('#point');
var equals = document.querySelector('#equals');

var result = document.querySelector('.calc__output');


seven.addEventListener('click', function(){
    if(result.textContent === '0'){
        result.textContent = 7;
    }
    else{
        result.textContent += 7;
    }
})
eight.addEventListener('click', function(){
    if(result.textContent === '0'){
        result.textContent = 8;
    }
    else{
        result.textContent += 8;
    }
})
nine.addEventListener('click', function(){
    if(result.textContent === '0'){
        result.textContent = 9;
    }
    else{
        result.textContent += 9;
    }
})
four.addEventListener('click', function(){
    if(result.textContent === '0'){
        result.textContent = 4;
    }
    else{
        result.textContent += 4;
    }
})
five.addEventListener('click', function(){
    if(result.textContent === '0'){
        result.textContent = 5;
    }
    else{
        result.textContent += 5;
    }
})
six.addEventListener('click', function(){
    if(result.textContent === '0'){
        result.textContent = 6;
    }
    else{
        result.textContent += 6;
    }
})
one.addEventListener('click', function(){
    if(result.textContent === '0'){
        result.textContent = 1;
    }
    else{
        result.textContent += 1;
    }
})
two.addEventListener('click', function(){
    if(result.textContent === '0'){
        result.textContent = 2;
    }
    else{
        result.textContent += 2;
    }
})
three.addEventListener('click', function(){
    if(result.textContent === '0'){
        result.textContent = 3;
    }
    else{
        result.textContent += 3;
    }
})
zero.addEventListener('click', function(){
    if(result.textContent !== '0'){
        result.textContent += 0;
    }
})
point.addEventListener('click', function(){
    if(!pointUsed){
        result.textContent += '.'
    }

    pointUsed = true;
})

var pointUsed = false;
var plusUsed = false;
var equalsUsed = false;
var minusUsed = false;
var xUsed = false;
var divisionUsed = false;
var percentUsed = false;
var squareUsed = false
var operatorUsed = false;
var a, b, sum, y;
var operator;

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
plus.addEventListener('click', function(){
    
    y = result.textContent.slice(-1);
    console.log(y + ' = y', typeof(y));
    
    if(!plusUsed && !operatorUsed){
        a = Number(result.textContent);
        // y = Number(y)
        result.textContent += '+';
        minusUsed = false;
        xUsed = false;
        divisionUsed = false;
        plusUsed = true;
        pointUsed = false;
        operatorUsed = true;
        operator = '+';
    }
    else if(!plusUsed && operatorUsed){
        // if(y === '+' || y === "-" || y === '/' || y === '*'){
            if(isNaN(y)){
                result.textContent = result.textContent.slice(0,-1);
                result.textContent += '+';
                
                minusUsed = false;
                xUsed = false;
                divisionUsed = false;
                plusUsed = true;
                pointUsed = false;
                operator = '+';
                operatorUsed = true;
            }
            // }
        }
        
    })
minus.addEventListener('click', function(){
    
    y = result.textContent.slice(-1);
    console.log(y + ' = y');
    if(!minusUsed && !operatorUsed){
        a = Number(result.textContent);
        // y = Number(y)
        result.textContent += '-';
        
        minusUsed = true;
        xUsed = false;
        divisionUsed = false;
        plusUsed = false;
        pointUsed = false;
        operator = '-';
        operatorUsed = true;
    }
    else if(!minusUsed && operatorUsed){
        // if(y === '+' || y === "-" || y === '/' || y === '*'){
            if(isNaN(y)){
                result.textContent = result.textContent.slice(0,-1);
                result.textContent += '-';
                
                minusUsed = true;
                xUsed = false;
                divisionUsed = false;
                plusUsed = false;
                pointUsed = false;
                operator = '-';
                operatorUsed = true;
            }
            // }
        }
        
    })
    multiply.addEventListener('click', function(){
        
        y = result.textContent.slice(-1);
        console.log(y + ' = y');
        if(!xUsed && !operatorUsed){
            a = Number(result.textContent);
            // y = Number(y)
            result.textContent += '*';
            
            minusUsed = false;
            xUsed = true;
            divisionUsed = false;
            plusUsed = false;
            pointUsed = false;
            operator = '*';
            operatorUsed = true;
        }
        else if(!xUsed && operatorUsed){
            // if(y === '+' || y === "-" || y === '/' || y === '*'){
                if(isNaN(y)){
                result.textContent = result.textContent.slice(0,-1);
                result.textContent += '*';
                    
                minusUsed = false;
                xUsed = true;
                    divisionUsed = false;
                plusUsed = false;
                pointUsed = false;
                operator = '*';
                operatorUsed = true;
            }
            // }
        }
    })
divide.addEventListener('click', function(){
    
    y = result.textContent.slice(-1);
    console.log(y + ' = y');
    if(!divisionUsed && !operatorUsed){
        a = Number(result.textContent);
        // y = Number(y)
        result.textContent += '/';
        minusUsed = false;
        xUsed = false;
        divisionUsed = true;
        plusUsed = false;
        pointUsed = false;
        operatorUsed = true;
        operator = '/';
    }
    else if(!divisionUsed && operatorUsed){
        // if(y === '+' || y === "-" || y === '/' || y === '*'){
            if(isNaN(y) ){
                result.textContent = result.textContent.slice(0,-1);
                result.textContent += '/';
                
                minusUsed = false;
                xUsed = false;
                divisionUsed = true;
                plusUsed = false;
                pointUsed = false;
                operator = '/';
                operatorUsed = true;
            }
            // }
        }
    })
    
    square.addEventListener('click', function(){
        // console.log(a, typeof(a));
        
        // if(!squareUsed){
        //     a = Number(result.textContent);
        //     result.textContent = a * a;
            
        // }
        if(!operatorUsed && !b){
            a = Number(result.textContent);
            result.textContent += '^2';
        }
        else{
        
            a = String(a);
            var alen = a.length;
        
            b = result.textContent.slice(alen+1);
            b = b * b;
            result.textContent = `${a}${operator}${b}`;
            operatorUsed = true;
        }

        squareUsed = true;

        if(result.textContent.indexOf('.') !== -1){
            pointUsed = false;
        }
    })
    
percentage.addEventListener('click', function(){
    console.log(a, typeof(a));
    
    a = Number(result.textContent);

    if(a < 0){ //არ ვარ დარწმუნებული რომ მოვაგვარე უარყოფითი რიცხვის პროცენტის ბაგი
        result.textContent = a/100;
    }
    else if(!operatorUsed && !b){
        a = Number(result.textContent);
        result.textContent = a/100;
    }
    else{

        a = String(a);
        var alen = a.length;

        b = result.textContent.slice(alen+1);
        b = b / 100;
        result.textContent = `${a}${operator}${b}`;
        operatorUsed = true;
    }

})
backspace.addEventListener('click', function(){
    console.log(a, typeof(a));
    var x;
    // a = Number(result.textContent);
    if(result.textContent.length != 1){
        x = result.textContent.slice('-1');
        result.textContent = result.textContent.slice(0, -1);
    }
    else{
        result.textContent = 0;
    }

    if(x === '+'){
        plusUsed = false;
        operatorUsed = false;
    }
    else if(x === '-'){
        minusUsed = false;
        operatorUsed = false;
    }
    else if(x === '*'){
        xUsed = false;
        operatorUsed = false;
    }
    else if(x === '/'){
        divisionUsed = false;
        operatorUsed = false;
    }
    else if(x === '.'){
        pointUsed = false;
        operatorUsed = false;
    }
    
})

equals.addEventListener('click', function(){
    
    // if(document.querySelector('.calc__dial__numbers').onclick)
    
    if(plusUsed){
        a = String(a);
        len = a.length;
        
        b = result.textContent.slice(len+1);
        console.log(b);
        a = Number(a);
        b = Number(b);
        
        sum = a + b;
        result.textContent = sum;
        
        plusUsed = false;
    }
    else if(minusUsed){
        a = String(a);
        len = a.length;
        
        b = result.textContent.slice(len+1);
        console.log(b);
        a = Number(a);
        b = Number(b);
        
        sum = a - b;
        result.textContent = sum;
        minusUsed = false;
    }
    else if(xUsed){
        a = String(a);
        len = a.length;
        
        b = result.textContent.slice(len+1);
        console.log(b);
        a = Number(a);
        b = Number(b);
        
        sum = a * b;
        result.textContent = sum;
        xUsed = false;
    }
    else if(divisionUsed){
        a = String(a);
        len = a.length;
        
        b = result.textContent.slice(len+1);
        console.log(b);
        a = Number(a);
        b = Number(b);
        
        sum = a / b;
        result.textContent = sum;
        divisionUsed = false;
    }
    else if(squareUsed){
        sum = a * a;
        result. textContent = sum;
        squareUsed = false;
    }

    sum = String(sum);
    if(sum.indexOf('.') !== -1){
        pointUsed = true;
    }

    plusUsed = false;
    equalsUsed = false;
    minusUsed = false;
    xUsed = false;
    divisionUsed = false;
    percentUsed = false;
    squareUsed = false
    operatorUsed = false;
})

clear.addEventListener('click', function(){
    result.textContent = 0;

    pointUsed = false;
    plusUsed = false;
    equalsUsed = false;
    minusUsed = false;
    xUsed = false;
    divisionUsed = false;
    percentUsed = false;
    squareUsed = false
    operatorUsed = false;

    a = null;
    b = null;
    sum = null;
    y = null;
    operator = null;
})
