const form = document.querySelector('.quiz-form');
const finalresult = document.querySelector('.result');

const correctAnsewes = ['B','D','A','C'];

form.addEventListener('submit', event=>{
    event.preventDefault();
    let score = 0;
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnsewes[index]) {
            score += 25;
            console.log('acertou');   
        }
    })

   scrollTo(0,0);
  
   finalresult.classList.remove('d-none');

    let counter = 0;

    const timer = setInterval(()=>{
        console.log(counter);

        if (counter === score) {
            clearInterval(timer);
            
        }

    finalresult.querySelector('span').textContent= `${counter}%`;
    counter++;
    },10)




// document.querySelector('.result').querySelector('span').textContent= `${score}%`;
// document.querySelector('.result').classList.remove('d-none');
})