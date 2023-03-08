import cafe from './img/cafe.jpg';

function changeToContactTab() {
    const parentDiv = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('container');
    const contactUs = document.createElement('div');
    contactUs.classList.add('medium');
    contactUs.classList.add('name');
    contactUs.classList.add('text-info');
    contactUs.classList.add('mt-5');
    contactUs.classList.add('shadow');
    contactUs.textContent = 'Contact Us';
    container.appendChild(contactUs);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    contactContainer.classList.add('d-flex');

    const subContainer = document.createElement('div');
    subContainer.classList.add('container');

    const subDiv = document.createElement('div');
    subDiv.classList.add('container');
    subDiv.classList.add('text-light');
    subDiv.classList.add('readable');

    const email = document.createElement('p');
    const envelope = document.createElement('i');
    envelope.classList.add('bi');
    envelope.classList.add('bi-envelope');
    const emailAddress = document.createElement('span');
    emailAddress.textContent = '  yummybistro@yummybistro.com';
    email.appendChild(envelope);
    email.appendChild(emailAddress);
    subDiv.appendChild(email);

    const number = document.createElement('p');
    const phone = document.createElement('i');
    phone.classList.add('bi');
    phone.classList.add('bi-telephone');
    const phoneNumber = document.createElement('span');
    phoneNumber.textContent = '  (123) 123-1234';
    number.appendChild(phone);
    number.appendChild(phoneNumber);
    subDiv.appendChild(number);

    const location = document.createElement('p');
    const geoIcon = document.createElement('i');
    geoIcon.classList.add('bi');
    geoIcon.classList.add('bi-geo-alt-fill');
    const address = document.createElement('span');
    address.textContent = '  123 Main Street Yummyville';
    location.appendChild(geoIcon);
    location.appendChild(address);
    subDiv.appendChild(location);

    const row = document.createElement('div');
    row.classList.add('row');
    const hours = document.createElement('div');
    hours.classList.add('col-2');
    hours.textContent = 'Hours:';
    row.appendChild(hours);

    const mToF = document.createElement('div');
    mToF.classList.add('col-3');
    mToF.classList.add('name');
    mToF.textContent = 'Mon-Fri:';
    row.appendChild(mToF);

    const mToFHours = document.createElement('div');
    mToFHours.classList.add('col');
    mToFHours.classList.add('name');
    mToFHours.textContent = '10am - 8pm';
    row.appendChild(mToFHours);

    const subRow = document.createElement('div');
    subRow.classList.add('row');
    subRow.classList.add('name');
    const emptyCol = document.createElement('div');
    emptyCol.classList.add('col-2');
    subRow.appendChild(emptyCol);

    const weekend = document.createElement('div');
    weekend.classList.add('col-3');
    weekend.textContent = 'Sat-Sun:';
    subRow.appendChild(weekend);

    const weekendHours = document.createElement('div');
    weekendHours.classList.add('col');
    weekendHours.textContent = '   9am - 9pm';
    subRow.appendChild(weekendHours);
    row.appendChild(subRow);
    subDiv.appendChild(row);

    const icons = document.createElement('div');
    icons.classList.add('icons');
    icons.classList.add('mt-5');

    const twitter = document.createElement('i');
    twitter.classList.add('bi');
    twitter.classList.add('bi-twitter');
    icons.appendChild(twitter);

    const facebook = document.createElement('i');
    facebook.classList.add('bi');
    facebook.classList.add('bi-facebook');
    icons.appendChild(facebook);

    const instagram = document.createElement('i');
    instagram.classList.add('bi');
    instagram.classList.add('bi-instagram');
    icons.appendChild(instagram);

    const linkedin = document.createElement('i');
    linkedin.classList.add('bi');
    linkedin.classList.add('bi-linkedin');
    icons.appendChild(linkedin);
    subDiv.appendChild(icons);

    subContainer.appendChild(subDiv);
    contactContainer.appendChild(subContainer);

    const cafeImg = new Image();
    cafeImg.src = cafe;
    cafeImg.classList.add('rounded');
    cafeImg.alt = 'Photo of a cafe';
    contactContainer.appendChild(cafeImg);

    container.appendChild(contactContainer);
    parentDiv.appendChild(container);
}

export { changeToContactTab };