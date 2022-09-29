const inputText = document.getElementById('texty');
const inputNum = document.getElementById('numbery');

const submitbtn = document.getElementById('button');
const clearSe = document.getElementById('clear');

const displaycontent = document.getElementById('display_data');

submitbtn.addEventListener('click',(e)=>{
    e.preventDefault();
     
  
     localStorage.setItem('text',inputText.value);
     localStorage.setItem('number',inputNum.value);
    const out= `${localStorage.getItem('text')}  ${localStorage.getItem('number')}`;
      displaycontent.innerHTML = out;
       

})

window.addEventListener('load',()=>{
    if(localStorage.getItem('text')){
        const value = `${localStorage.getItem('text')}  ${localStorage.getItem('number')}`;
        displaycontent.innerHTML = value;
    }
})

clearSe.addEventListener('click',()=>{
    localStorage.clear();

})
