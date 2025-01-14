document.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector('body')
    body.style.fontFamily = "Anton"
    body.style.fontSize = "2em"
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.alignItems = 'center';
    body.style.background = 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)'

    
    // Création du premier div pour les contrôles
    let divElement = document.createElement('div');
    divElement.id = 'controle';
    document.body.appendChild(divElement);
    divElement.style.color = 'green'
    
  
    // Label pour la taille de la grille
    let label = document.createElement('label');
    label.textContent = 'Size Grid :';
    divElement.appendChild(label);
 
    
    // Input pour la taille de la grille
    let input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('min', '1');
    input.setAttribute('max', '100');
    input.value = 20; // Taille par défaut
    divElement.appendChild(input);
    input.style.color = '#8B15CB'
    input.style.fontFamily = "Anton"
    input.style.fontSize = "1em"
  
    // Bouton pour créer la grille
    let button = document.createElement('button');
    button.textContent = 'Create Grid';
    divElement.appendChild(button);
    button.style.margin = '10px'
    button.style.background = '#8B15CB'
    button.style.color = '#fff'
    button.style.border = '1mm ridge rgba(134, 27, 192, .6)'; 
    button.style.fontSize = "1em"
  
    // Input pour la sélection de couleur
    let inputTwo = document.createElement('input');
    inputTwo.setAttribute('type', 'color');
    inputTwo.setAttribute('value', '#000000');
    inputTwo.id = 'inputTwo';
    divElement.appendChild(inputTwo);
  
    // Bouton pour supprimer la grille
    let buttonTwo = document.createElement('button');
    buttonTwo.textContent = 'Remove Grid';
    divElement.appendChild(buttonTwo);
    buttonTwo.style.background = '#8B15CB'
    buttonTwo.style.color = '#fff'
    buttonTwo.style.border = '1mm ridge rgba(134, 27, 192, .6)'; 
    buttonTwo.style.fontSize = "1em"
  
    // Div pour la grille
    let divElementTwo = document.createElement('div');
    divElementTwo.id = 'grid';
    document.body.appendChild(divElementTwo);
    // Style de base pour la grille
    divElementTwo.style.display = 'grid';
    divElementTwo.style.marginTop = '20px';
    divElementTwo.style.border = '1px solid #ccc';
  
    // Sélection de la couleur
    let selectedColor = inputTwo.value;
  
    // Mettre à jour la sélection de la couleur
    inputTwo.addEventListener('input', (e) => {
      selectedColor = e.target.value;
    });
  
    // Fonction pour créer la grille
    let createGrid = (size) => {
      divElementTwo.innerHTML = ''; // Vider la grille existante
      divElementTwo.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      divElementTwo.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
      for (let i = 0; i < size * size; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = '20px'; // Taille des pixels
        pixel.style.height = '20px';
        pixel.style.borderRadius = '20px';
        pixel.style.border = '1mm ridge rgba(134, 27, 192, .6)'; // Bordure légère pour visibilité
        pixel.style.background = 'rgba(134, 27, 192, .5)'; // Bordure légère pour visibilité
        pixel.addEventListener('mousedown', () => (pixel.style.backgroundColor = selectedColor));
        pixel.addEventListener('mouseover', (e) => {
          if (e.buttons === 1) {
            pixel.style.backgroundColor = selectedColor;
          }
        });
        divElementTwo.appendChild(pixel);
      }
    };
  
    // Supprimer les couleurs de la grille
    buttonTwo.addEventListener('click', () => {
      let pixels = document.querySelectorAll('.pixel');
      pixels.forEach((pixel) => (pixel.style.backgroundColor = ''));
    });
  
    // Créer la grille au clic
    button.addEventListener('click', () => {
      let size = parseInt(input.value);
      if (size >= 1 && size <= 100) {
        createGrid(size);
      } else {
        alert('veuillez Entrer un chiffre entre 1 et 100.');
      }
    });
  
    // Initialiser une grille par défaut
    createGrid(20);
  });
  
  