let libreria = [];

window.addEventListener("load", init);

function init() {
  createLibrary();
}

async function createLibrary() {
  await fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      libreria = data;
      showBooks();
    })
    .catch((err) => {
      console.log("Errore nel recupero dei dati: ", err);
    });
}

function showBooks() {
  for (let i = 0; i < libreria.length; i++) {
    const row = document.getElementById("row");
    const bookDiv = document.createElement("div");
    const bookImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const titleH5 = document.createElement("h5");
    const paragraph = document.createElement("p");
    const prezzo = document.createElement("p");
    const btnCompraOra = document.createElement("a");
    const btnScarta = document.createElement("a");

    bookDiv.classList.add("col-3", "card", "gx-2", "mb-3");
    bookDiv.setAttribute("id", libreria[i]);
    bookImg.setAttribute("src", libreria[i].img);
    bookImg.classList.add("card-img-top", "cardImage");
    cardBody.classList.add("card-body");
    titleH5.classList.add("card-title");
    titleH5.textContent = `${libreria[i].title}`;
    paragraph.classList.add(
      "card-text",
      "text-center",
      "bg-black",
      "text-white",
      "w-25",
      "rounded-5",
      "p-2"
    );
    paragraph.textContent = `${libreria[i].category}`;
    prezzo.classList.add("card-text", "fs-3");
    prezzo.textContent = `${libreria[i].price} €`;
    btnCompraOra.classList.add("btn", "btn-danger", "me-2");
    btnCompraOra.setAttribute("href", "#");
    btnCompraOra.textContent = "Compra Ora";
    btnScarta.classList.add(
      "btn",
      "btn-light",
      "border-2",
      "border-danger",
      "text-danger"
    );
    btnScarta.setAttribute("href", "#");
    btnScarta.textContent = "Scarta";
    cardBody.appendChild(titleH5);
    cardBody.appendChild(paragraph);
    cardBody.appendChild(prezzo);
    cardBody.appendChild(btnCompraOra);
    cardBody.appendChild(btnScarta);
    bookDiv.appendChild(bookImg);
    bookDiv.appendChild(cardBody);
    row.appendChild(bookDiv);

    btnCompraOra.addEventListener("click", function (e) {
        e.preventDefault();
        aggiungiAlCarrello(libreria[i]); 
      });
  
      btnScarta.addEventListener("click", function (e) {
        e.preventDefault();
        rimuoviDalCarrello(libreria[i]); 
    });
    
  }
}

function aggiungiAlCarrello(idLibro) {
        let carrello = JSON.parse(localStorage.getItem("carrello")) || [];
        const libroGiaPresenteIndex = carrello.findIndex(
          (libro) => libro.id === idLibro.id
        );
      
        if (libroGiaPresenteIndex === -1) {
          carrello.push({ ...idLibro, quantity: 1 });
        } else {
          carrello[libroGiaPresenteIndex].quantity++;
        }
      
        localStorage.setItem("carrello", JSON.stringify(carrello));
        console.log("Carrello aggiornato:", carrello);
    
        const offcanvasBody = document.getElementById("carrelloHtml");
        offcanvasBody.innerHTML = "";
        
        carrello.forEach((item) => {
            const cardDiv = document.createElement("div");
            cardDiv.setAttribute("id", `${item.id}`);
            cardDiv.classList.add("card", "mb-3");
            cardDiv.innerHTML = `
                <img src="https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg" class="card-img-top cardImage">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.category}</p>
                    <p class="card-text">${item.price} €</p>
                    <button class="btn btn-danger" onclick="rimuoviDalCarrello(${item.id})">Rimuovi</button>
                </div>
            `;
            offcanvasBody.appendChild(cardDiv);
        });
    }
    
      

    function rimuoviDalCarrello(idLibro) {
        let carrello = JSON.parse(localStorage.getItem("carrello")) || [];
        const index = carrello.findIndex((item) => item.id === idLibro);
        if (index !== -1) {
            carrello.splice(index, 1);
            localStorage.setItem("carrello", JSON.stringify(carrello));
            
            const cardToRemove = document.getElementById(idLibro);
            if (cardToRemove) {
                cardToRemove.remove();
            }
        }
    }
    
    