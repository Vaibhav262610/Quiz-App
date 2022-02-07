const quesData = [
    {
        question : "Q1: HTML is a ?" , 
        a:"Programming Language1",
        b:"Programming Language2",
        c:"Programming Language3",
        d:"Programming Language4",
        ans:"ans2",
        barColor:"row1"

    },
    
    {
        question : "Q2: HTML is a ?" , 
        a:"Programming Language1",
        b:"Programming Language2",  
        c:"Programming Language3",
        d:"Programming Language4",
        ans:"ans1",
        barColor:"row2"
    },
    
    {
        question : "Q3: HTML is a ?" , 
        a:"Programming Language1",
        b:"Programming Language2",
        c:"Programming Language3",
        d:"Programming Language4",
        ans:"ans4",
        barColor:"row3"
    },
    
    {
        question : "Q4: HTML is a ?" , 
        a:"Programming Language1",
        b:"Programming Language2",
        c:"Programming Language3",
        d:"Programming Language4",
        ans:"ans1",
        barColor:"row4"
    },
    {
        question : "Q5: HTML is a ?" , 
        a:"Programming Language1",
        b:"Programming Language2",
        c:"Programming Language3",
        d:"Programming Language4",
        ans:"ans2",
        barColor:"row5"
    },
    {
        question : "Q6: HTML is a ?" , 
        a:"Programming Language1",
        b:"Programming Language2",
        c:"Programming Language3",
        d:"Programming Language4",
        ans:"ans4",
        barColor:"row6"
    },
    {
        question : "Q7: HTML is a ?" , 
        a:"Programming Language1",
        b:"Programming Language2",
        c:"Programming Language3",
        d:"Programming Language4",
        ans:"ans1",
        barColor:"row7"
    },
    {
        question : "Q8: HTML is a ?" , 
        a:"Programming Language1",
        b:"Programming Language2",
        c:"Programming Language3",
        d:"Programming Language4",
        ans:"ans1",
        barColor:"row8"
    },
    {
        question : "Q9: HTML is a ?" , 
        a:"Programming Language1",
        b:"Programming Language2",
        c:"Programming Language3",
        d:"Programming Language4",
        ans:"ans1",
        barColor:"row9"
    },
    {
        question : "Q10: HTML is a ?" , 
        a:"Programming Language1",
        b:"Programming Language2",
        c:"Programming Language3",
        d:"Programming Language4",
        ans:"ans1",
        barColor:"row10"
    }
]

const question = document.querySelector('#question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')
const answers =document.querySelectorAll('.answer')
const showscore = document.querySelector('#showscore')
const bar =  document.querySelectorAll('.rows')

let score  = 0; 
let questionLoad = 0;

const loadQues = () => {
        question.innerHTML = quesData[questionLoad].question
        option1.innerHTML = quesData[questionLoad].a
        option2.innerHTML = quesData[questionLoad].b
        option3.innerHTML = quesData[questionLoad].c
        option4.innerHTML = quesData[questionLoad].d
        // barID = quesData[questionLoad].barColor
        // console.log(quesData[0].question)
}

loadQues()

const checkAns = () => {
    let answer;

    answers.forEach((curAnsElem) =>  {
        if(curAnsElem.checked){
            console.log(curAnsElem.id)
            answer = curAnsElem.id;

        }
    });
    return answer;
}




const deSelectAll= () => {
    answers.forEach((curAnsElem)=>{
        curAnsElem.checked = false;
    });
}

// checkAns()

submit.addEventListener('click' , () => {
    const checkAnswer = checkAns();
    // console.log(checkAnswer)
    
    if(checkAnswer == quesData[questionLoad].ans){
        score++;
        console.log(score)
    };

        deSelectAll()
    console.log(questionLoad)
    if(checkAnswer == quesData[questionLoad].ans){
        let change = document.getElementById(quesData[questionLoad].barColor)
        change.style.backgroundColor = "rgb(58, 255, 91)"
        // debugger;
    }else{
        
        let change = document.getElementById(quesData[questionLoad].barColor)
        change.style.backgroundColor = "rgb(255, 71, 39)"
    }

        questionLoad++;

        if(questionLoad < quesData.length){
            loadQues()
            // console.log(questionLoad)
        }else{
            showscore.innerHTML = `
                <h3> You Scored ${score}/${quesData.length}</h3>
                <button id="submit" onclick="location.reload()">Play Again</button>
            `;

            showscore.classList.remove('showarea')
            let hide = document.querySelector('ul');
            let hide1 = document.querySelector('button');
            let hide2 = document.querySelector('h2');
            hide.style.display = "none";
            hide1.style.display = "none";
            hide2.style.display = "none";

        }



    })
 