const dataURL = 'https://api.pexels.com/v1/search?query=';
const API_KEY = '3M2GYqXbjOUYEb8Vri4Flg3k7ElBCrYMxdykZflBdT4checz4Y4VBCZG';
let query = 'people';
const cards = document.getElementById('cards');
const btnSearch = document.getElementById('button-addon2');
const input = document.getElementById('search');

window.addEventListener('load', init);

function init() {
	loadImages(query);
}

const loadImages = async query => {
	try {
		let response = await fetch(dataURL + query, {
			headers: {
				Authorization: API_KEY,
			},
		});
		let data = await response.json();
		printData(data, query);
	} catch (error) {
		console.log(error);
	}
};

const printData = data => {
	cards.innerHTML = '';
	data.photos.forEach(item => {
		let div = document.createElement('div');
		div.classList.add('col-md-4');
        div.id = `${item.id}`;
		div.innerHTML = `
            <div class="card mb-4">
                <img src="${item.src.original}" style="width: 100%" />
                <div class="card-title p-4 m-0">
                    <h5>Lorem Ipsum</h5>
                </div>
                <div class="card-body pt-0 ps-4 mt-0">
                    <p class="card-text">
                        ${item.alt}
                    </p>
                </div>
                <div class="card-footer p-4">
                    <div class="row">
                        <button
                            type="button"
                            class="col-2 btn btn-sm btn-outline-secondary d-flex align-items-center"
                            data-bs-toggle="modal" 
                            data-bs-target="#id-${item.id}">
                            <ion-icon class="pe-1" name="eye-outline"></ion-icon>
                            View
                        </button>
                        <button 
                            type="button" 
                            class="col-2 btn btn-sm btn-outline-secondary d-flex align-items-center" 
                            onclick="nascondi(${item.id});">
                            <ion-icon class="pe-1" name="eye-off-outline"></ion-icon>
                            Hide
                        </button>
                        <div
			                class="modal fade"
			                id="id-${item.id}"
			                tabindex="-1"
			                aria-labelledby="exampleModalLabel"
			                aria-hidden="true">
			                <div class="modal-dialog modal-xl p-5">
				                <div class="modal-content">
					                <div class="modal-header">
					    	            <h1 class="modal-title fs-5" id="exampleModalLabel">
					    		
					    	            </h1>
					    	            <button
					    		            type="button"
					    		            class="btn-close"
					    		            data-bs-dismiss="modal"
					    		            aria-label="Close"></button>
					                    </div>
					                    <div class="modal-body" id="cardImage">
                                            <img src="${item.src.original}" style="width: 100%" />
					                    </div>
				                    </div>
			                    </div>
		                    </div>
                        </div>
                    </div>
                </div>
            `;
		cards.appendChild(div);
	});
};

btnSearch.addEventListener('click', function (e) {
	e.preventDefault();
	query = input.value;
	loadImages(query);
});

function nascondi(cardId) {
    let card = document.getElementById(cardId);
    card.style.display = 'none';
}
