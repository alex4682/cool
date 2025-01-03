const phone = {
    memory: 512,
    version: "eSIM",
    color: "natural",
    inCart: false,
    favourite: false,
    photo: 'photo4',
};

const textMemory = document.querySelector('#memory');
const memory512 = document.querySelector('#memory512');
const memory256 = document.querySelector('#memory256');
const memory128 = document.querySelector('#memory128');

const textVersion = document.querySelector('#version');
const eSim = document.querySelector('#eSim');
const global = document.querySelector('#global');

const textColor = document.querySelector('#color');
const black = document.querySelector('#black');
const natural = document.querySelector('#white');
const green = document.querySelector('#green');
const pink = document.querySelector('#pink');
const gold = document.querySelector('#gold');
const blue = document.querySelector('#blue');

const updateActiveButton = (buttons, activeValue) => {
    buttons.forEach(([button, value]) => {
        button.classList.toggle('btn-active', value === activeValue);
    });
};
const updateColorButton = (buttons, activeValue) => {
    buttons.forEach(([button, value]) => {
        button.classList.toggle('color-active', value === activeValue);
    });
};

const updateColor = (colorValue) => {
    phone.color = colorValue;
    textColor.textContent = phone.color;
    updateColorButton(
        [
            [black, 'black'],
            [natural, 'natural'],
            [green, 'green'],
            [pink, 'pink'],
            [gold, 'gold'],
            [blue, 'blue'],
        ],
        colorValue
    );
    localStorage.setItem('color', colorValue);
};

const updateMemory = (memoryValue) => {
    phone.memory = memoryValue;
    textMemory.textContent = `${phone.memory}GB`;
    updateActiveButton(
        [
            [memory512, 512],
            [memory256, 256],
            [memory128, 128],
        ],
        memoryValue
    );
    localStorage.setItem('memory', memoryValue);
};

const updateVersion = (versionValue) => {
    phone.version = versionValue;
    textVersion.textContent = phone.version;
    updateActiveButton(
        [
            [eSim, 'eSIM'],
            [global, 'global'],
        ],
        versionValue
    );
    localStorage.setItem('version', versionValue);
};

memory512.addEventListener('click', () => updateMemory(512));
memory256.addEventListener('click', () => updateMemory(256));
memory128.addEventListener('click', () => updateMemory(128));
eSim.addEventListener('click', () => updateVersion('eSIM'));
global.addEventListener('click', () => updateVersion('global'));
black.addEventListener('click', () => updateColor('black'));
natural.addEventListener('click', () => updateColor('natural'));
green.addEventListener('click', () => updateColor('green'));
pink.addEventListener('click', () => updateColor('pink'));
gold.addEventListener('click', () => updateColor('gold'));
blue.addEventListener('click', () => updateColor('blue'));


window.onload = () => {
    const savedMemory = parseInt(localStorage.getItem('memory'), 10);
    updateMemory(savedMemory === 512 || savedMemory === 256 || savedMemory === 128 ? savedMemory : phone.memory);

    const savedVersion = localStorage.getItem('version');
    updateVersion(savedVersion === 'eSIM' || savedVersion === 'global' ? savedVersion : phone.version);

    const savedColor = localStorage.getItem('color');
    updateColor(savedColor === 'black' || savedColor === 'natural' || savedColor === 'green' || savedColor === 'pink' || savedColor === 'gold' || savedColor === 'blue' ? savedColor : phone.color);

    const savedInCart = localStorage.getItem('inCart');
    phone.inCart = savedInCart === 'true';
    addToCart.classList.toggle('inCart', phone.inCart);
    addToCart.innerHTML = phone.inCart
        ? `Прибрати з кошика <svg width="27" height="27">
                  <use
                    href="./img/symbol-defs.svg#icon-buy"
                    style="fill: #fff"
                  ></use>
                </svg>`
        : `Додати у кошик <svg width="27" height="27">
                  <use
                    href="./img/symbol-defs.svg#icon-buy"
                    style="fill: #fff"
                  ></use>
                </svg>`;
    const savedFavourite = localStorage.getItem('favourite');
    phone.favourite = savedFavourite === 'true';
    addToFavourite.classList.toggle('favourite', phone.favourite);
    addToFavourite.innerHTML = phone.favourite
        ? `<svg width="27" height="27">
                  <use
                    href="./img/symbol-defs.svg#icon-heart"
                    style="fill: red"
                  ></use>
                </svg> Видалити з обраного `
        : `<svg width="27" height="27">
                  <use
                    href="./img/symbol-defs.svg#icon-heart"
                    style="fill: red"
                  ></use>
                </svg> Додати в обране `;
    const savedPhoto = localStorage.getItem('photo');
    phone.photo = savedPhoto === 'photo1' || savedPhoto === 'photo2' || savedPhoto === 'photo3' || savedPhoto === 'photo4' ? savedPhoto : phone.photo;
    mainPhoto.classList.remove('photo1', 'photo2', 'photo3', 'photo4');
    mainPhoto.classList.add(phone.photo);
    if (phone.photo === 'photo1') {
        photo1.classList.add('photo-active');
    } else if (phone.photo === 'photo2') {
        photo2.classList.add('photo-active');
    } else if (phone.photo === 'photo3') {
        photo3.classList.add('photo-active');
    } else if (phone.photo === 'photo4') {
        photo4.classList.add('photo-active');
    }
};

const addToCart = document.querySelector('#addToCart');
const addToFavourite = document.querySelector('#addToFavourite');

addToCart.addEventListener('click', () => {
    phone.inCart = !phone.inCart;
    if (phone.inCart) {
        addToCart.innerHTML = `Прибрати з кошика <svg width="27" height="27">
                  <use
                    href="./img/symbol-defs.svg#icon-buy"
                    style="fill: #fff"
                  ></use>
                </svg>`;
    } else {
        addToCart.innerHTML = `Додати у кошик <svg width="27" height="27">
                  <use
                    href="./img/symbol-defs.svg#icon-buy"
                    style="fill: #fff"
                  ></use>
                </svg>`;
    }

    addToCart.classList.toggle('inCart', phone.inCart);

    localStorage.setItem('inCart', phone.inCart);
});

addToFavourite.addEventListener('click', () => {
    phone.favourite = !phone.favourite;
    if (phone.favourite) {
        addToFavourite.innerHTML = `<svg width="27" height="27">
                  <use
                    href="./img/symbol-defs.svg#icon-heart"
                    style="fill: red"
                  ></use>
                </svg> Видалити з обраного `;
    } else {
        addToFavourite.innerHTML = `<svg width="27" height="27">
                  <use
                    href="./img/symbol-defs.svg#icon-heart"
                    style="fill: red"
                  ></use>
                </svg> Додати в обране `;
    }
    addToFavourite.classList.toggle('favourite', phone.favourite);
    localStorage.setItem('favourite', phone.favourite);
});

const photo1 = document.querySelector('#photo1');
const photo2 = document.querySelector('#photo2');
const photo3 = document.querySelector('#photo3');
const photo4 = document.querySelector('#photo4');
const mainPhoto = document.querySelector('#mainPhoto');

photo1.addEventListener('click', () => {
    phone.photo = 'photo1';
    localStorage.setItem('photo', phone.photo);
    mainPhoto.classList.remove('photo2', 'photo3', 'photo4');
    mainPhoto.classList.add('photo1');
    photo1.classList.add('photo-active');
    photo2.classList.remove('photo-active');
    photo3.classList.remove('photo-active');
    photo4.classList.remove('photo-active');
});
photo2.addEventListener('click', () => {
    phone.photo = 'photo2';
    localStorage.setItem('photo', phone.photo);
    mainPhoto.classList.remove('photo1', 'photo3', 'photo4');
    mainPhoto.classList.add('photo2');
    photo2.classList.add('photo-active');
    photo1.classList.remove('photo-active');
    photo3.classList.remove('photo-active');
    photo4.classList.remove('photo-active');
});
photo3.addEventListener('click', () => {
    phone.photo = 'photo3';
    localStorage.setItem('photo', phone.photo);
    mainPhoto.classList.remove('photo1', 'photo2', 'photo4');
    mainPhoto.classList.add('photo3');
    photo3.classList.add('photo-active');
    photo1.classList.remove('photo-active');
    photo2.classList.remove('photo-active');
    photo4.classList.remove('photo-active');
});
photo4.addEventListener('click', () => {
    phone.photo = 'photo4';
    localStorage.setItem('photo', phone.photo);
    mainPhoto.classList.remove('photo1', 'photo2', 'photo3');
    mainPhoto.classList.add('photo4');
    photo4.classList.add('photo-active');
    photo1.classList.remove('photo-active');
    photo2.classList.remove('photo-active');
    photo3.classList.remove('photo-active');
});