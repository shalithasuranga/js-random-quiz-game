let level = 0;
let gcount = 300;
let status = 0;
let fakemode = !false;
const fakeArray = [3, 11, 24];
let tada;
let bg;



let getRange = () => {
    let max = 0;
    let min = 0;
    if(level == 0){
        max = 5;
        min = 1;
    }
    else if(level == 1){
        max = 15;
        min = 5;
    }
    else if(level == 2){
        max = 30;
        min = 15;
    }
    return {
        max : max,
        min : min
    };
}

let getRand = () => {
    let rand = 0;
    if(fakemode){
        rand = fakeArray[level];
    }
    else {
        let max = getRange().max;
        let min = getRange().min;
        rand =  Math.floor(Math.random() * (max - min + 1 ) + min);
    }
    console.log(rand);
    return rand;
}

let play = () => {
    let end = 30;
    let start = 1;
    console.log(getRange());
    let i = start;
    let an = setInterval(() => {
        document.getElementById('number').innerHTML = (i + 1).toString().padStart(2,"0");
        i++;
        if(i == end) {
            i = start;
        }
        gcount --;
        if(gcount == 0) {
            document.getElementById('number').innerHTML = getRand().toString().padStart(2,"0");
            document.getElementById('action').style.display = '';
            document.getElementById('action').innerHTML = 'Question';
            document.getElementById('action').classList.add('actiond');
            clearInterval(an);
            gcount = 300;
            status = 1;
            level ++;
            tada.play();
        }
    }, 20);
};

let startGame = () => {
    play();
};

let getQ = () => {
    let q =[
        "යම් හෙයකින් ඔබ විශ්වවිද්‍යාල කථිකාචාර්ය / මෘදුකාංග ඉන්ජිනේරු වෘත්තිය හැර වෙනත් ක්‍ෂේත්‍රයක් තෝරා ගත්තේ නම් එම තෝරා ගන්නා ක්‍ෂේත්‍රය සහ එයට හේතුව කුමක්ද?",
        "පහත සදහන් චරිත අතුරින් ඔබ වඩාත් ප්‍රිය කරන චරිත අනුපිළිවෙලින් සදහන් කරන්න. එම තෝරා ගැනීමට හේතුවද ඉදිරිපත් කරන්න.<ul style='list-style:none;'><li>ඇඩොල්ෆ් හිට්ලර්</li><li>ශාරුක් ඛාන්</li><li>හුසේන් බෝල්ට්</li></ul>",
        "ඔබ ශ්‍රී ලංකාවේ මීලග ජනාධිපතිවරයා ලෙස පත්වුවහොත් , ඔබ සිදුකරන ප්‍රථම රාජකාරිය සහ එයට හේතුව ඉදිරිපත් කරන්න."
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
            bg.volume = 0;
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
    document.getElementById('thank').style.display = 'none';
    tada = new Audio('tada.mp3');
    bg = new Audio('bg.mp3');
    bg.loop = true;
    bg.volume = 0.2;

    document.getElementById('counter').onclick = () => {
        bg.play();
    };
};


let backtogame = () => {
    bg.volume = 0.2;
    if(level < 3) {
        document.getElementById('action').classList.remove('actiond');
        document.getElementById('counter').style.display = '';
        document.getElementById('question').style.display = 'none';
        document.getElementById('number').style.display = 'none';
    }
    else {
        document.getElementById('thank').style.display = '';
    }
};