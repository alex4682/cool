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
};
