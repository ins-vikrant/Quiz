//for landing page
let go= document.querySelector(".go");
go.addEventListener("click", ()=>{
    document.getElementById("content").style.display="block";
    document.getElementById("landing").style.display="none";
})

//questions
const questions=[{
    'ques':'1. which of the Beatles is not wearing shoes?',
    'a': 'A. Paul McCartney',
    'b': 'B. Ringo Starr',
    'c': 'C. John Lennon',
    'd': 'D. George Harrison',
    'correct':'a',
},
{
    'ques':'2. What is the capital of the US State of New York?',
    'a': 'A. Buffalo',
    'b': 'B. Albany',
    'c': 'C. New York',
    'd': 'D. Rochester',
    'correct':'b',
},
{
    'ques':'3. What was the name of the first Bulgarian personal computer?',
    'a': 'A. Pravetz 82',
    'b': 'B. Pravetz 8D',
    'c': 'C. IMKO-1',
    'd': 'D. IZOT 1030',
    'correct':'c',
},
{
    'ques':'4. Which of the following Argentinian presidents was elected in 2015?',
    'a': 'A. Cristina Fernandez de Kirchner',
    'b': 'B. Mauricio Macri',
    'c': 'C. Nestor Kirchner',
    'd': 'D. Juan Domingo Peron',
    'correct':'b',
},
{
    'ques':'5. What is the name of the only remaining Grand Duchy in the world ?',
    'a': 'A. Luxembourg',
    'b': 'B. Montenegro',
    'c': 'C. Liechtenstein',
    'd': 'D. Andorra',
    'correct':'a',
},
{
    'ques':'6. In Marvel Comics, Taurus is the founder and leader of which criminal organization?',
    'a': 'A. Scorpio',
    'b': 'B. Tiger Mafia',
    'c': 'C. The Union',
    'd': 'D. Zodiac',
    'correct':'d',
},
{
    'ques':'7. Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?',
    'a': 'A. Enigma Machine',
    'b': 'B. Skipjack',
    'c': 'C. Clipper Chip',
    'd': 'D. Nautilus',
    'correct':'c',
},
{
    'ques':'8. In the alternate timeline in Mortal Kombat, which character was the one to slaughter the Shirai Ryu clan?',
    'a': 'A. Sub-Zero',
    'b': 'B. Quan Chi',
    'c': 'C. Sektor',
    'd': 'D. Shang Tsung',
    'correct':'b',
},
{
    'ques':'9. What UK Train does NOT go over 125MPH?',
    'a': 'A. Class 43',
    'b': 'B. Javelin',
    'c': 'C. Pendolino',
    'd': 'D. Sprinter',
    'correct':'d',
},
{
    'ques':'10. Which Mario spin-off game did Waluigi make his debut?',
    'a': 'A. Mario Party 3',
    'b': 'B. Mario Tennis',
    'c': 'C. Mario Kart: Double Dash!!',
    'd': 'D. Mario Golf: Toadstool Tour',
    'correct':'b',
},
{
    'ques':'11. When did Zamenhof publish "Unua Libro",first publication describing his international language Esperanto?',
    'a': 'A. 1887',
    'b': 'B. 1900',
    'c': 'C. 2024',
    'd': 'D. 1666',
    'correct':'a',
},
{
    'ques':'12. How many "JoJos" that are protagonists are there in the series "Jojos Bizarre Adventure"?',
    'a': 'A. 7',
    'b': 'B. 8',
    'c': 'C. 9',
    'd': 'D. 10',
    'correct':'b',
},
{
    'ques':'13. In the Netflix show, Stranger Things, what song would Will sing to himself as he was missing?',
    'a': 'A. Love Will Tear Us Apart',
    'b': 'B. This Charming Man',
    'c': 'C. Africa',
    'd': 'D. Should I Stay or Should I Go?',
    'correct':'d',
},
{
    'ques':'14. What was the name of Pink Floyds first studio album?',
    'a': 'A. Atom Heart Mother',
    'b': 'B. The Piper at the Gates of Dawn',
    'c': 'C. Need more',
    'd': 'D. Ummagumma',
    'correct':'b',
},
{
    'ques':'15. In June 2017, Saudi Arabia and Egypt broke off ties with which country over its supposed support for terrorism?',
    'a': 'A. United States of America',
    'b': 'B. Bahrain',
    'c': 'C. Qatar',
    'd': 'D. Russia',
    'correct':'c',
},
{
    'ques':'16. Foie gras is a French delicacy typically made from what part of a duck or goose?',
    'a': 'A. Heart',
    'b': 'B. Liver',
    'c': 'C. Stomach',
    'd': 'D. Intestine',
    'correct':'b',
},
{
    'ques':'17. In the Half-Life series, Gordon Freemans signature weapon is a:',
    'a': 'A. Crowbar',
    'b': 'B. Sledgehammer',
    'c': 'C. Fiber Wire',
    'd': 'D. Katana',
    'correct':'a',
},
{
    'ques':'18. The Andaman and Nicobar Islands in South East Asia are controlled by which country?',
    'a': 'A. Vietnam',
    'b': 'B. Thailand',
    'c': 'C. Indonesia',
    'd': 'D. India',
    'correct':'d',
},
{
    'ques':'19. What is the name of the capital of Turkey?',
    'a': 'A. Istanbul',
    'b': 'B. Izmir',
    'c': 'C. Ankara',
    'd': 'D. Bursa',
    'correct':'c',
},
{
    'ques':'20. In the book series "Odd Thomas" Danny Jessup has what genetic disease?',
    'a': 'A. Spinocerebellar ataxia',
    'b': 'B. OstImperfectaeogenesis',
    'c': 'C. Adrenoleukodystrophy',
    'd': 'D. Cystic Fibrosis',
    'correct':'b',
},
]
//setting variables which will be used in program
let index=0;
let right=0;
let wrong=0;
var ans;
var ansticked;
const questioninp=document.getElementById("question");
const optioninp=document.getElementsByClassName("btn");

//this function will give input to html template
const loadques=()=>{
    const data=questions[index];
    questioninp.innerText=data.ques;
    optioninp[0].innerHTML=data.a;
    optioninp[1].innerHTML=data.b;
    optioninp[2].innerHTML=data.c;
    optioninp[3].innerHTML=data.d;
    headerscore();}


                                                       
//this part of code will me help to update score and change questions
const data=questions[index];
const next = ()=>{
       
        if(ansticked==data.correct){
            right++;
        } else{
            wrong++;
        }
        index++;
        loadques();
        remove();
        restart();
    return;
}

//function to show score
function headerscore(){
    const headerscoretext= document.querySelector(".score");
    headerscoretext.innerHTML=`Score: ${right}/ 20`;
    console.log(right);
}

//function to change the button from skip to next and change 'selected' class of options,which will help me to know which option is selected
const buttons = document.querySelectorAll(".btn"); 
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    submit.innerText="Next";
    submit.style.background="green";
    buttons.forEach((otherButton) => {
      otherButton.classList.remove("selected"); 
    });
    button.classList.add("selected");
  });
});

//this function will stop user to select multiple options
function end(){
    buttons.forEach((button)=>{
     button.classList.add("disabled")
    })
 }

//this function will help me to attempt second question,as the classes of options will be changed whie attempting that question ,so this will kind of renew those options 
 const remove =()=>{
    buttons.forEach((button)=>{
        button.classList.add("selected");
        button.classList.remove("correct");
        button.classList.remove("wrong");
        button.classList.remove("answer");
    })
    submit.innerText="SKIP";
    submit.style.background="red";}

//it's functioning is similar to remove funcion
    function restart(){
        buttons.forEach((button)=>{
         button.classList.remove("disabled")
        })
     }

//it is for the functioning of next/skip button,i.e,to change question
     const submit=document.querySelector(".next");
     submit.addEventListener("click",()=>{
     next();
     })     

//these 2 functions will check whether option selected by user is correct or not
     const check =()=>{
        if(ansticked==data.correct){
            document.querySelector(".selected").classList.add("correct")
        }
        else{
            document.querySelector(".selected").classList.add("wrong")
        }
        showanswer();
        return;
    }

    function showanswer(){
        if('a'==data.correct){
         optioninp[0].classList.add("answer");
           }
        if('b'==data.correct){
        optioninp[1].classList.add("answer");
           }
        if(data.c==data.correct){
            optioninp[2].classList.add("answer");
           }
        if(data.d==data.correct){
            optioninp[3].classList.add("answer");
           }   
        }



//functioning of options    
const op1=document.querySelector(".op1");
op1.addEventListener("click",()=>{
    ansticked='a';
    check();
    end();
   
    })

const op2=document.querySelector(".op2");
op2.addEventListener("click",()=>{
    ansticked='b';
    check();
    end();
   
    })

const op3=document.querySelector(".op3");
op3.addEventListener("click",()=>{
    ansticked='c';
    check();
    end()
    
    })

const op4=document.querySelector(".op4");
op4.addEventListener("click",()=>{
    ansticked='d';
    check();
    end();
    
    })
//to create a ripple effect when any option is clicked
buttons.forEach(button =>{
    button.addEventListener('click', function(e){
        let x = e.clientX ;
        let y = e.clientY ;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        button.appendChild(ripples);
        setTimeout(()=> {
            ripples.remove();
        },790)
    })
})




//quiz is initialized    
    loadques();
















