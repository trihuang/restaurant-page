import pizza from './img/pizza.jpg';
import pasta from './img/seafood-pasta.jpg';
import burger from './img/burger.jpg';
import risotto from './img/risotto.jpg';
import toast from './img/french-toast.jpg';
import cake from './img/cake.jpg';
import coffee from './img/coffee.jpg';
import smoothie from './img/smoothie.jpg';

function changeToMenuTab() {
    const parentDiv = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('mt-5');

    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('g-5');
    row.classList.add('row-cols-1');
    row.classList.add('row-cols-sm-2');
    row.classList.add('row-cols-md-3');
    row.classList.add('row-cols-lg-4');

    const pizzaCard = makeCard(pizza, 'Hawaiian Pizza', '$10');
    row.appendChild(pizzaCard);

    container.appendChild(row);
    parentDiv.appendChild(container);
}

function makeCard(img, item, price) {
    const element = document.createElement('div');
    element.classList.add('col');

    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('mx-auto');

    const image = new Image();
    image.src = img;
    image.classList.add('card-img-top');
    image.alt = `Photo of a ${item}`;
    card.appendChild(image);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const itemName = document.createElement('p');
    itemName.classList.add('card-text');
    itemName.classList.add('name');
    itemName.classList.add('text-center');
    itemName.textContent = item;
    cardBody.appendChild(itemName);

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, debitis qui. Rem itaque ipsam corrupti.';
    cardBody.appendChild(description);

    const flexDiv = document.createElement('div');
    flexDiv.classList.add('d-flex');
    flexDiv.classList.add('justify-content-end');

    const priceText = document.createElement('p');
    priceText.classList.add('card-text');
    priceText.textContent = price;
    flexDiv.appendChild(priceText);
    cardBody.appendChild(flexDiv);
    card.appendChild(cardBody);
    element.appendChild(card);

    return element;
}

export { changeToMenuTab };