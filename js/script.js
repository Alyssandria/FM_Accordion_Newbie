const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const iconCont = document.querySelectorAll(".icon");


questions.forEach((question, index) =>{
    question.addEventListener('click', ()=>{

        

        answers.forEach((answer, i) =>{

            if(index === i){
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';          
            } else {
                answer.style.display = 'none';
            }
        });
        
        iconCont.forEach((icon, idx) =>{

            if(index === idx){
                icon.querySelector(".plus").style.display = icon.querySelector(".plus").style.display === "none" ? "block" : "none";
                icon.querySelector(".minus").style.display = icon.querySelector(".minus").style.display === "block" ? "none" : "block";
            } else {
                icon.querySelector(".plus").style.display = "block";
                icon.querySelector(".minus").style.display = "none";
            }
        })
    });
});