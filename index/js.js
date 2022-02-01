let arr = [];

window.onload = () => {
    let input = document.getElementById('search')
    const ctr = document.getElementById("ctr")
    input.addEventListener('keyup', e => {
        if(e.key === "Enter") {
            f(arr, ctr, input.value)
        }
    })
    let writeOut = document.getElementById('writeOut');
    fetch('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json')
        .then((response) => response.json())
        .then((data) => {
            arr = data
            f(data, ctr)

        });

}

function f(data, ctr, filter = "") {
    let count = 0
    ctr.innerHTML = ""
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].name.english.toLowerCase().startsWith(filter)) {
            count++
            let card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('small-card');
            card.innerHTML = ` 
   <img src="${data[i].hires}" class="card-img-top">
     <div class="card-body">
          <h5 class="card-title">${data[i].name.english}</h5>
         <p class="card-text">${data[i].description}</p>
     </div>`
            arr.push(data);
            ctr.appendChild(card);
            if(count === 8) break
        }
    }
}