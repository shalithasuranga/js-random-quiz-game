let level = 0;
let gcount = 10;
let status = 0;
console.log(gcount);



let getRange = () => {
    let max = 0;
    let min = 0;
    if(level == 0){
        max = 5;
        min = 1;
    }
    else if(level == 1){
        max = 10;
        min = 5;
    }
    else if(level == 2){
        max = 15;
        min = 10;
    }
    return {
        max : max,
        min : min
    };
}

let getRand = () => {
    let max = getRange().max;
    let min = getRange().min;
    let rand =  Math.floor(Math.random() * max) + min ;
    console.log(rand);
    return rand;
}

let play = () => {
    let end = getRange().max;
    let start = getRange().min;
    console.log(getRange());
    let i = start;
    let an = setInterval(() => {
        document.getElementById('number').innerHTML = i + 1;
        i++;
        if(i == end) {
            i = start;
        }
        gcount --;
        if(gcount == 0) {
            document.getElementById('number').innerHTML = getRand();
            document.getElementById('action').style.display = '';
            document.getElementById('action').innerHTML = 'Question';
            clearInterval(an);
            gcount = 10;
            status = 1;
            level ++;
        }
    }, 100);
};

let startGame = () => {
    play();
};

let getQ = () => {
    let q =[
        "Question 1",
        "Question 2",
        "Question 3"
    ];
    return q[level - 1];
}

window.onload = () => {
    document.getElementById('action').onclick = () => {
        
        if(status == 1) {
            document.getElementById('action').innerHTML = 'Start Round ' + (level + 1);
            status = 0;
            document.getElementById('q').innerHTML = getQ();
            document.getElementById('question').style.display = '';
            document.getElementById('counter').style.display = 'none';
        }
        else {
            document.getElementById('action').innerHTML = 'Wait';
            startGame();
            document.getElementById('number').style.display = '';
            document.getElementById('action').style.display = 'none';
            staus = 1;
        }
    };

    document.getElementById('question').onclick = () => {
        backtogame();    
    };

    document.getElementById('question').style.display = 'none';
    document.getElementById('counter').style.display = '';
    document.getElementById('number').style.display = 'none';
};


let backtogame = () => {
    if(level < 3) {
        document.getElementById('counter').style.display = '';
        document.getElementById('question').style.display = 'none';
        document.getElementById('number').style.display = 'none';
    }
    else {
        location.reload();
    }
};