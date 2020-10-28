
// <div class="card" style="width: 18rem;">
{/* <img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */}

const div = document.createElement('div');

const imgElement = document.createElement('img');
imgElement.classList.add('card-img-top');
imgElement.appendChild('card');

const divCardBody = document.createElement('div');
divCardBody.classList.add('card-body');
divCardBody.appendChild('card');

const h5 = document.createElement('h5');
h5.classList.add('card-title');
h5.textContent = 'Card Title';
h5.appendChild('card-body');

const p = document.createElement('p');
p.classList.add('card-text');
p.textContent = 'Example';
p.appendChild('card-body');

const a = document.createElement('a');
p.classList.add('btn btn-primary');
a.textContent = 'Go somewhere';
a.appendChild('cardbody')
