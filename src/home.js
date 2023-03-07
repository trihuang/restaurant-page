function changeToHomeTab() {
    const parentDiv = document.getElementById('content');

    const photoDiv = document.createElement('div');
    photoDiv.classList.add('container');
    photoDiv.classList.add('img-container');
    photoDiv.classList.add('position-fixed');
    photoDiv.classList.add('d-flex');
    photoDiv.classList.add('justify-content-center');
    photoDiv.classList.add('justify-content-sm-start');
    
    const img = document.createElement('img');
    img.src = '../src/img/coffee.jpg';
    img.id = 'coffee';
    img.alt = 'Photo of a coffee';
    photoDiv.appendChild(img);

    const textContainer = document.createElement('div');
    textContainer.classList.add('container');
    textContainer.classList.add('text-center');

    const name = document.createElement('div');
    name.classList.add('text-warning');
    name.classList.add('big');
    name.classList.add('name');
    name.textContent = 'Yummy Bistro';
    textContainer.appendChild(name);

    const textDiv = document.createElement('div');
    textDiv.classList.add('text');
    textDiv.classList.add('d-flex');
    textDiv.classList.add('justify-content-center');
    textDiv.classList.add('justify-content-sm-end');
    textDiv.classList.add('mt-5');

    const leadText = document.createElement('div');
    leadText.classList.add('lead');
    leadText.classList.add('text-light');
    leadText.classList.add('about-us');

    const displayText = document.createElement('div');
    displayText.classList.add('display-4');
    displayText.textContent = 'About Us';
    leadText.appendChild(displayText);
    const div = document.createElement('div');
    div.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, architecto expedita iste a voluptatum saepe cupiditate inventore eos soluta, dignissimos adipisci iusto distinctio labore impedit ipsam quam quisquam possimus itaque perferendis sed reiciendis eveniet dicta neque? Sunt nostrum modi nemo mollitia, aut repudiandae, delectus eum rerum ea vitae, unde assumenda?';
    leadText.appendChild(div);
    textDiv.appendChild(leadText);
    textContainer.appendChild(textDiv);

    parentDiv.appendChild(photoDiv);
    parentDiv.appendChild(textContainer);
}

export { changeToHomeTab };