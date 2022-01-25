window.onload = () => {
    let writeOut = document.getElementById('writeOut');
    fetch('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json')
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.slice(0,7).length; i++) {
                let card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = ` 
   <img src="${data[i].hires}" class="card-img-top w-25%">
     <div class="card-body">
          <h5 class="card-title">${data[i].name.english}</h5>
         <p class="card-text">${data[i].description}</p>
     </div>`
                document.body.appendChild(card);
            }
        });
}