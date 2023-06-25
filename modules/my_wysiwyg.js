export default class MyWysiwyg{
    constructor(document, options){
      let dict = {};
      var bold = function(){
        console.log("test");
      }
      dict['bold'] = bold;
      if(options.buttons != undefined){
        const button = Object.values(options);
        button.forEach(element => element.forEach(value => dict[value]()))
      }
      else{
        console.log("Erreur");
      }
      this.document = document;
    }
  }
  export { MyWysiwyg };
  
  
  const textarea = document.getElementById("textarea");
  
  const allbuttons = document.getElementById('buttons');
  
  const buttonsave = document.getElementById('save');
  
  const saveButton = document.createElement('button');
  saveButton.innerHTML = "Save";
  saveButton.setAttribute('class', 'savebutton')
  buttonsave.appendChild(saveButton);
  
  saveButton.addEventListener('click', () => {
  localStorage.setItem('content', textarea.innerHTML);
  });
  
  const interval = 10; 
  setInterval(() => {
  localStorage.setItem('content', textarea.innerHTML);
  }, interval * 60 * 1000);
  
  window.addEventListener('load', () => {
  textarea.innerHTML = localStorage.getItem('content');
  });
  
  const buttons = [
  { id: 'bold', command: 'bold', text: 'Bold' },
  { id: 'italic', command: 'italic', text: 'Italic' },
  { id: 'strike', command: 'strikeThrough', text: 'Strike' },
  { id: 'color', command: 'foreColor', text: 'Color', prompt: 'Enter color code or name:' },
  { id: 'size', command: 'fontSize', text: 'Size', prompt: 'Enter font size:' },
  { id: 'link', command: 'createLink', text: 'Link', prompt: 'Enter link URL:' },
  { id: 'increase', text: '+', action: increase },
  { id: 'decrease', text: '-', action: decrease },
  { id: 'left-align', text: 'Left', action: alignLeft },
  { id: 'right-align', text: 'Right', action: alignRight },
  { id: 'center-align', text: 'Center', action: alignCenter },
  { id: 'justify-text', text: 'Justify', action: alignJustify },
  ];
  
  let fontSize = 2;
  
  buttons.forEach(button => {
  const btn = document.createElement('button');
  btn.innerHTML = button.text;
  btn.id = button.id;
  allbuttons.appendChild(btn);
  
  if (button.command) {
  btn.addEventListener('click', () => {
  const value = button.prompt ? window.prompt(button.prompt, '') : null;
  document.execCommand(button.command, false, value);
  });
  } else if (button.action) {
  btn.addEventListener('click', button.action);
  }
  });
  
  function increase() {
  fontSize += 1;
  textarea.style.fontSize = fontSize + 'em';
  }
  
  function decrease() {
  fontSize -= 1;
  textarea.style.fontSize = fontSize + 'em';
  }
  
  function alignLeft() {
  textarea.style.textAlign = 'left';
  }
  
  function alignRight() {
  textarea.style.textAlign = 'right';
  }
  
  function alignCenter() {
  textarea.style.textAlign = 'center';
  }
  
  function alignJustify() {
  textarea.style.textAlign = 'justify';
  }
  allbuttons.appendChild(allbuttons);
  textarea.appendChild(textarea);
  
  
  textarea.addEventListener('input', () => {
  console.log(textarea.innerHTML);
  });