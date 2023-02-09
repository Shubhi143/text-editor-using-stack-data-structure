import { Stack } from'./stack.js';
document.onkeydown=function(event){
  if(event.ctrlKey || event.metaKey){
    event.preventDefault();
  }
};
onload=function(){
  const textbox=documeny.getElementbyId('comment');
  const undo = document.getElementById('undo');
  const clear=document.getElementById('clear');
  const temptext= document.getElementById('temptext');

   textbox.value="";
  let text="";
  let stack= new Stack();

  textbox.onclick=function(){
    textbox.selectionStart=textbox.selectionEnd=textbox.value.length;
};
  clear.onclick=function(){
    stack.clear();
    text="";
    textbox.value="";
    temptext.innerHTML="LIFO REAL WORLD EXAMPLE";
  };
  textbox.oninput=function(event){
    switch(event.inputType){
      case "insertText":
        stack.push(0,event.data);
        break;
      case "deleteContentBackward":
        stack.push(1,text[text.length-1]);
        break;
    }
    temptext.innerHTML="On stack " + stack.top()+"<br>"+temptext.innerHTML;
    text=textbox.value;
  };
  undo.onclick=function(){
    let operation=stack.pop();
    
  }
  
