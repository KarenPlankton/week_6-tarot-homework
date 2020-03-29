document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    const button = document.querySelector('#new-item-form');
    button.addEventListener('submit', handleFormSubmit);
  });
  
  const resetReading = function() {
    const anchor = document.querySelector('#anchor'); 
    anchor.innerHTML='';
    
  }
  
  const handleFormSubmit = function (event) {
    event.preventDefault();
    const anchor = document.querySelector('#anchor'); 
   
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    anchor.appendChild(mainContainer);
  
    const question = document.createElement('h2');
    question.textContent=this.question.value;
    question.classList.add('question');
    mainContainer.appendChild(question);

    const div = document.createElement('div');
    div.classList.add('flex')
    question.appendChild(div);

    const past = document.createElement('a');
    past.textContent="Past:"+ this.past.value;
    past.href = "http://www.google.com";
    past.setAttribute('target', '_blank');
    div.appendChild(past);
    const present = document.createElement('a');
    present.textContent="Present:" + this.present.value;
    present.href = "http://www.google.com";
    present.setAttribute('target', '_blank');
    div.appendChild(present);
    const future = document.createElement('a');
    future.href = "http://www.google.com";
    future.setAttribute('target', '_blank');
    future.textContent="Future:" + this.future.value;
    div.appendChild(future);
  
    
    event.target.reset();
  
    
  };