var footer = document.querySelector('#footer');
var newNode = document.createElement('p');
newNode.appendChild(document.createTextNode(`Copyright ©R3BL ${new Date().getFullYear()}`));
footer.appendChild(newNode);