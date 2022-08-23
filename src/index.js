// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    populateToDoList(e.target.new_task_description.value);

    form.reset();
  });

  

});

function populateToDoList(todoValue){

  const li = document.createElement("li");
  li.textContent = `${todoValue} `;
  document.querySelector('#tasks').appendChild(li); 


  const btn = document.createElement("button");
  btn.textContent = "X";
  li.appendChild(btn);
  btn.addEventListener('click', deleteTasks);

}

function deleteTasks(e){
  e.target.parentNode.remove();
}