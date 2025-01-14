let bodyStyle = document.querySelector('body')
bodyStyle.style.width = '100%'
bodyStyle.style.height = '50em'
bodyStyle.style.display = 'flex'
bodyStyle.style.justifyContent = 'center'
bodyStyle.style.alignItems = 'center'
bodyStyle.style.background = 'linear-gradient(to bottom, #87ceeb, #f0f8ff)'
bodyStyle.style.backgroundRepeat = 'no-repeat'

// creation elemenet div
let elementDiv = document.createElement('div');
elementDiv.id = 'myDiv';
elementDiv.className = 'container';
document.body.appendChild(elementDiv);

// style css
elementDiv.style.width = '25em';
elementDiv.style.height = '25em';
elementDiv.style.display = 'flex';
elementDiv.style.flexDirection = 'column-reverse';
elementDiv.style.justifyContent = 'center'
elementDiv.style.alignItems = 'center'
elementDiv.style.background = 'rgba(255, 255, 255, .5)'
elementDiv.style.borderRadius = '10%'

let elementDiv2 = document.createElement('div');
elementDiv2.className = 'btn';
elementDiv.appendChild(elementDiv2);
//style css
elementDiv2.style.marginTop = '1em';

// creation element label
let label = document.createElement('label');
label.className = 'primary'
label.textContent = ''
elementDiv.appendChild(label)
// style css
label.style.fontSize = '1.5em'
label.style.width = '5em';
label.style.borderRadius = '50%';
label.style.textAlign = 'center'
label.style.background = '#4caf50'
label.style.border = '.5mm ridge rgba(211, 220, 50, .6)';


//creation element h1
let title = document.createElement('h1');
title.textContent = 'Welcome to the counter!'
elementDiv.appendChild(title)

// creation element bouton poour incrementer
let button1 = document.createElement('button')
button1.textContent = '+'
elementDiv2.appendChild(button1) 
button1.style.fontSize = '1em'

// creation element bouton pour rafraichir
let button2 = document.createElement('button');
button2.textContent = ''
elementDiv2.appendChild(button2)

let buttonIn = document.createElement('i')
buttonIn.className = 'fa-solid fa-rotate-right';
button2.appendChild(buttonIn)
// style css
buttonIn.style.color = 'blue'
buttonIn.style.fontSize = '30px'


// creation element bouton moins décrémenter
let button3 = document.createElement('button');
button3.textContent = '-'
elementDiv2.appendChild(button3)
button3.style.fontSize = '1em'

console.log(elementDiv);

// Initialiser le compteur
let counter = 0


function updateCounterDisplay() {
    counterDisplay.textContent = counter;
  
   
}


function compteur() {
    // afficher le conteur
    label.textContent = counter

      // Ajoute une classe d'animation pour un effet visuel
    label.classList.add('animate');
    // Retire l'animation après un court délai
    setTimeout(() => {
    label.classList.remove('animate');
    }, 300);
    // Change la couleur en rouge si la valeur est négative
    if (counter < 0) {
        label.style.color = 'red';

    } else {
        // Remet en noir si la valeur n'est plus négative
        label.style.color = 'black';
    }
}

compteur()

// Incrémenter le compteur
button1.addEventListener('click', () => {
    counter++
    compteur()
})

// rafraichir le compte
button2.addEventListener('click', () => {
    counter = 0;
    compteur();
});

// Décrémenter le compteur
button3.addEventListener('click', () => {
    counter--;
    compteur();
});



let elementButton = Array.from(document.querySelectorAll('button'))
elementButton.forEach(element => {
    element.style.backgroundColor = '#4caf50'
    element.style.alignItems = 'center';
    element.style.width = '5em';
    element.style.height = '5em';
    element.style.borderRadius = '50%';
    element.style.border = '1mm ridge rgba(211, 220, 50, .6)'; 
});



