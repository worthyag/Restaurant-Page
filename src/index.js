import './style.css';
import salmon from './salmon-dish.png';
import icon from './github-icon.svg';

function addToBody(element, txt, style, add='y') {
    const content = document.querySelector('#content');
    element.textContent = txt;
    element.classList.add(style);

    if (add === 'y') {
        content.appendChild(element);
    }
    else {
        return element;
    }
}

// h1- title
addToBody(document.createElement('h1'), 'Global Flavour', 'title');

// p- subheading
addToBody(document.createElement('p'), 'Taste the flavours of the world....', 'subheading');

// Nav menu
const nav = document.createElement('nav');

const home = document.createElement('a');
home.textContent = "Home";
home.classList.add('current');
nav.appendChild(home);

const menu = document.createElement('a');
menu.textContent = "Menu";
nav.appendChild(menu);

const contact = document.createElement('a');
contact.textContent = "Contact";
nav.appendChild(contact);

const content = document.querySelector('#content');
content.appendChild(nav);

// Div Wrapper
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const section = document.createElement('section');
section.classList.add('hero');

const heroImg = document.createElement('img');
heroImg.src = salmon;
heroImg.alt = 'A salmon dish';
heroImg.classList.add('hero-img');

const info = document.createElement('div');

const msgUp = document.createElement('p');
msgUp.innerHTML = 'The <span class="blue">best</span>  foods from all over the world.';
msgUp.classList.add('msg');

const msgDown = document.createElement('p');
msgDown.innerHTML = 'In <span class="blue">one</span> place.';
msgDown.classList.add('msg');

info.appendChild(msgUp);
info.appendChild(msgDown);

section.appendChild(heroImg);
section.appendChild(info);

wrapper.appendChild(section);
content.appendChild(wrapper);


// Footer
const footer = document.createElement('footer');

const copyright = document.createElement('p');
copyright.textContent = 'Copyright © 2022 worthyag';

const github = document.createElement('a');
github.href = 'https://github.com/worthyag';
github.target = '_blank';

const gitHubIcon = document.createElement('img');
gitHubIcon.src = icon;
gitHubIcon.alt = 'Github Icon';
github.appendChild(gitHubIcon);

footer.appendChild(copyright);
footer.appendChild(github);
content.appendChild(footer);