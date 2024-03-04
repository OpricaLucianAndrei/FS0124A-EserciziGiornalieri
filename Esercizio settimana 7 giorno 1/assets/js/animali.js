class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName;
      this.ownerName = _ownerName;
      this.species = _species;
      this.breed = _breed;
    }
  
    verificaPadrone(y) {
      if (this.ownerName === y.ownerName) {
        return console.log(`${this.petName} e ${y.petName} hanno lo stesso proprietario.`);
      }
      return  console.log(`${this.petName} e ${y.petName} hanno proprietari diversi.`);
    }
  }

  const animale1 = new Pet("Ciccio", "lucian", "cane" , "bulldog");
  const animale2 = new Pet("Pluto", "Lucas", "gatto", "siamese");
  const animale3 = new Pet("milly", "lucian", "gatto", "persiano");

console.log(animale1.verificaPadrone(animale3)); // Ciccio e Pluto

  
  const btnAggiungi = document.getElementById("btnAggiungi");
  const animali = [];
  
  btnAggiungi.addEventListener("click", (e) => {
    e.preventDefault();
    let petNameInput = document.getElementById("petName");
    let ownerNameInput = document.getElementById("ownerName");
    let speciesInput = document.getElementById("species");
    let breedInput = document.getElementById("breed");
    
    let petName = petNameInput.value;
    let ownerName = ownerNameInput.value;
    let species = speciesInput.value;
    let breed = breedInput.value;
    
    const newAnimal = new Pet(petName, ownerName, species, breed);
    animali.push(newAnimal);
    console.log(animali);
    stampaAnimali(newAnimal);
    
    petNameInput.value = '';
    ownerNameInput.value = '';
    speciesInput.value = '';
    breedInput.value = '';
  });
  
  
  const stampaAnimali = (newAnimal) => {
    let listaAnimali = document.getElementById("listaAnimali");
    let elementiLista = document.createElement("li");
    elementiLista.setAttribute('class', 'fs-3 mt-3');
    let frase = `${newAnimal.petName} animale di ${newAnimal.ownerName} è un* ${newAnimal.species} di razza ${newAnimal.breed}.`;
    
    elementiLista.textContent = frase;
    listaAnimali.appendChild(elementiLista);
  };
  