const placeList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

placeList.appendChild(li);

const mainContainer =document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My food List"
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = "biryani"
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = "burger"
ul.appendChild(li2);
section.appendChild(ul)

mainContainer.appendChild(section);


const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section </h1>
<ul>
<li>T-shirt</li>
</ul>
`
mainContainer.appendChild(sectionDress)