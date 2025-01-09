const phone = {
    memory: 512,
    version: "eSIM",
    color: "natural",
    inCart: false,
    favourite: false,
    photoNum: 4,
    photo: 'natural4',
};

const textMemory = document.querySelector('#memory');
const textVersion = document.querySelector('#version');
const textColor = document.querySelector('#color');

const memoryButtons = [
    { button: document.querySelector('#memory512'), value: 512 },
    { button: document.querySelector('#memory256'), value: 256 },
    { button: document.querySelector('#memory128'), value: 128 },
];

const versionButtons = [
    { button: document.querySelector('#eSim'), value: 'eSIM' },
    { button: document.querySelector('#global'), value: 'global' },
];

const colorButtons = [
    { button: document.querySelector('#black'), value: 'black' },
    { button: document.querySelector('#white'), value: 'natural' },
    { button: document.querySelector('#green'), value: 'green' },
    { button: document.querySelector('#pink'), value: 'pink' },
    { button: document.querySelector('#gold'), value: 'gold' },
    { button: document.querySelector('#blue'), value: 'blue' },
];

const photoButtons = [
    { button: document.querySelector('#photo1'), value: 1 },
    { button: document.querySelector('#photo2'), value: 2 },
    { button: document.querySelector('#photo3'), value: 3 },
    { button: document.querySelector('#photo4'), value: 4 },
];
const mainPhoto = document.querySelector('#mainPhoto');

const addToCart = document.querySelector('#addToCart');
const addToFavourite = document.querySelector('#addToFavourite');

const updateActiveButton = (buttons, activeValue, activeClass) => {
    buttons.forEach(({ button, value }) => {
        button.classList.toggle(activeClass, value === activeValue);
    });
};

const updateMemory = (memoryValue) => {
    phone.memory = memoryValue;
    textMemory.textContent = `${phone.memory}GB`;
    updateActiveButton(memoryButtons, memoryValue, 'btn-active');
    localStorage.setItem('memory', memoryValue);
};

const updateVersion = (versionValue) => {
    phone.version = versionValue;
    textVersion.textContent = phone.version;
    updateActiveButton(versionButtons, versionValue, 'btn-active');
    localStorage.setItem('version', versionValue);
};

const updateColor = (colorValue) => {
    phone.color = colorValue;
    textColor.textContent = phone.color;
    updateActiveButton(colorButtons, colorValue, 'color-active');
    phone.photo = `${phone.color}${phone.photoNum}`;
    updatePhotoClass();
    localStorage.setItem('color', colorValue);
    updateSecondaryPhoto();
};

const updateSecondaryPhoto = () => {
    photo1.classList = `buy-photo-item ${phone.color}1`;
    photo2.classList = `buy-photo-item ${phone.color}2`;
    photo3.classList = `buy-photo-item ${phone.color}3`;
    photo4.classList = `buy-photo-item ${phone.color}4`;
}
const updatePhoto = (photoNum) => {
    phone.photoNum = photoNum;
    phone.photo = `${phone.color}${photoNum}`;
    updateActiveButton(photoButtons, photoNum, 'photo-active');
    updatePhotoClass();
    localStorage.setItem('photoNum', photoNum);
};

const updatePhotoClass = () => {
    mainPhoto.className = 'buy-main-photo';
    mainPhoto.classList.add(phone.photo);
};

const updateCartButton = () => {
    addToCart.innerHTML = phone.inCart
        ? `Прибрати з кошика <svg width="27" height="27"><use href="./img/symbol-defs.svg#icon-buy" style="fill: #fff"></use></svg>`
        : `Додати у кошик <svg width="27" height="27"><use href="./img/symbol-defs.svg#icon-buy" style="fill: #fff"></use></svg>`;
    addToCart.classList.toggle('inCart', phone.inCart);
    localStorage.setItem('inCart', phone.inCart);
};

const updateFavouriteButton = () => {
    addToFavourite.innerHTML = phone.favourite
        ? `Видалити з обраного`
        : `Додати в обране`;
    addToFavourite.classList.toggle('favourite', phone.favourite);
    localStorage.setItem('favourite', phone.favourite);
};

window.onload = () => {
    const savedMemory = parseInt(localStorage.getItem('memory'), 10);
    updateMemory([512, 256, 128].includes(savedMemory) ? savedMemory : phone.memory);

    const savedVersion = localStorage.getItem('version');
    updateVersion(['eSIM', 'global'].includes(savedVersion) ? savedVersion : phone.version);

    const savedColor = localStorage.getItem('color');
    updateColor(['black', 'natural', 'green', 'pink', 'gold', 'blue'].includes(savedColor) ? savedColor : phone.color);

    const savedPhotoNum = parseInt(localStorage.getItem('photoNum'), 10);
    updatePhoto([1, 2, 3, 4].includes(savedPhotoNum) ? savedPhotoNum : phone.photoNum);

    phone.inCart = localStorage.getItem('inCart') === 'true';
    updateCartButton();

    phone.favourite = localStorage.getItem('favourite') === 'true';
    updateFavouriteButton();
};

memoryButtons.forEach(({ button, value }) => {
    button.addEventListener('click', () => updateMemory(value));
});

versionButtons.forEach(({ button, value }) => {
    button.addEventListener('click', () => updateVersion(value));
});

colorButtons.forEach(({ button, value }) => {
    button.addEventListener('click', () => updateColor(value));
});

photoButtons.forEach(({ button, value }) => {
    button.addEventListener('click', () => updatePhoto(value));
});

addToCart.addEventListener('click', () => {
    phone.inCart = !phone.inCart;
    updateCartButton();
});

addToFavourite.addEventListener('click', () => {
    phone.favourite = !phone.favourite;
    updateFavouriteButton();
});
