<div align="center">
  <div align="center">
    <img src="https://img.shields.io/badge/-html-black?style=for-the-badge&logoColor=white&logo=html5&color=orange" alt="react" />
    <img src="https://img.shields.io/badge/-css-black?style=for-the-badge&logoColor=white&logo=css3&color=blue" alt="css" />
    <img src="https://img.shields.io/badge/-javascript-black?style=for-the-badge&logoColor=white&logo=javascript&color=yellow" alt="js" />
  </div>
  <h3 align="center">Une application web de e-commerce</h3>
  <a align="center" href='https://www.figma.com/design/1adKZcdECK6WTJUvoiT7bj/Product-e-commerce-web-app?node-id=0-1&p=f&t=lZRQ3M6XpICjCiny-0' target='_blank'>🎨 Lien figma</a>
</div>

### 📋 Table des matières

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Technologies utilisées](#tech-stack)
3. 📜 [Prérequis](#prerequisites)
4. 📂 [Structure du projet](#structure)
5. 📝 [Codes a copier](#snippets)
6. 🤸 [Démarrage rapide](#quick-start)
7. 🚀 [Plus d'infos](#more)

## 🚨 Tutoriel

Suivez notre tutoriel pour apprendre à créer des projets comme celui-ci, étape par étape, de manière accessible aux débutants !

[![Tutoriel](https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d)](#)

## <a name="introduction" id="introduction">🤖 1. Introduction  </a>

Ce projet a été développé avec **HTML, CSS et JavaScript**.  

Son principal objectif est de d'approfondir les compétences de bases en développement web

## <a name="tech-stack" id="tech-stack">⚙️ 2. Technologies utilisées</a>

- **HTML**
- **CSS**
- **JavaScript**

## <a name="prerequisites" id="prerequisites">📜 3. Prérequis</a>

Assurez-vous d'avoir installé les éléments suivants sur votre machine :

- Un navigateur web, ex : [Chrome](https://www.google.com/intl/fr/chrome/){:target="_blank"}
- Un éditeur de texte, ex : [VSCode](https://code.visualstudio.com/){:target="_blank"}
- Les images et icons : [Lien de telechargement](https://drive.google.com/file/d/1jQ05AIsFan21ZTsUVp_1bnfLYBRH_i6S/view?usp=drive_link){:target="_blank"}

## <a name="structure" id="structure">📂 4. Structure du projet</a>

🗂️ assets
> 🗂️ images <br>
> 🗂️ icons

📁 css
> 🗂️ pages <br>
>> 🗂️ admin <br>
>> 🗂️ client 

📁 html
> 🗂️ admin <br>
> 🗂️ clients

📁 js

## <a name="snippets" id="snippets">📝 5. Codes a copier</a>

<details>
<summary><code>css/components.css</code></summary>

```css
/* Heading */
.heading {
    display: grid;
    grid-template-columns: 0.65fr 20fr;
    gap: 10px;
    margin: 10px 0;
}

.heading span {
    background-color: #F8D442;
}

.heading h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 39.01px;
}

/*Input Text*/
/*OUTLINED LABEL INPUT TEXT (DEFAULT)*/

.input-text {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
}

.input-text label {
    font-weight: 500;
    font-size: 14px;
    line-height: 17.07px;
    margin-bottom: 0.5rem;
    text-align: left;
    color: #6C6C6C;
}

.input-text:focus-within label {
    color: #FEAF00;
}

.input-text input,
.input-text textarea {
    border: 1px solid #E5E5E5;
    background-color: #FFFFFF;
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.63px;
    padding: 15px;
    color: black;
}

.input-text input::placeholder,
.input-text textarea::placeholder {
    color: #CDCDCD;
}

.input-text input:focus,
.input-text textarea:focus {
    outline: none;
    border: 1px solid #FEAF00;
}

/*INLINED LABEL INPUT TEXT*/

.input-text-inlined {
    background-color: #F3F3F3;
    border-radius: 8px;
    position: relative;
    width: 100%;
}

.input-text-inlined label {
    position: absolute;
    left: 25px;
    top: 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 14.63px;
    color: #ACACAC;

}

.input-text-inlined input {
    padding: 0;
    background-color: inherit;
    border: none;
    width: calc(100% - 50px);
    height: 100%;
    padding: 25px;
    color: #000000;
    width: 100%;
}

.input-text-inlined input::placeholder {
    color: #000000;
}

/*Button*/
.button {
    width: 100%;
    background-color: #FEAF00;
    font-weight: 400;
    font-size: 14px;
    line-height: 17.07px;
    color: white;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 5px 0;
}

.button:hover {
    transform: scale(1.05);
}

.button-rounded {
    border-radius: 50px;
    box-shadow: 0px 1px 2px 0px #1018280D;
    text-transform: none;
    font-family: Inter;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.36px;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

/*Typography */
.typography {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #667085;
    text-align: center;
    /* width: 300px;*/
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}

/*Sidebar*/
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 350px;
    background-color: #F2EAE1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    overflow: auto;
}
@media screen and (max-width: 1400px) {
    .sidebar {
        width: 300px;
    }
}

.sidebar aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-bottom: 100px;
}

.sidebar aside .profile {
    display: grid;
    gap: 10px;
    justify-items: center;
    align-items: center;
}

.sidebar aside .profile img {
    border-radius: 50%;
}

/*Icon Link*/
.icon-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 30px;
    gap: 10px;
    text-decoration: none;
    width: 100%;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
}

.icon-link:hover {
    background-color: #feae0055;
    transform: scale(1.025);
}

.icon-link span {
    font-weight: 500;
    font-size: 14px;
    line-height: 17.07px;
    color: black;
}

/*ACTIVE LINK*/
.active-icon-link {
    background-color: #FEAF00;
}

.active-icon-link span {
    font-weight: 700;
}

/*REVERSE ALTERNATIVE*/
.reversed-icon-link {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
}

/*Toolbar*/
.toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    width: 100%;
    height: 70px;
    background-color: white;
}

/*Action heading*/
.action-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #E5E5E5;
    padding: 10px 0;
}

.action-heading .action {
    display: flex;
    align-items: center;
    gap: 30px;
}

/*Action icon*/
.action-icon {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    width: 24px;
    height: 24px;
}

.action-icon:hover {
    transform: scale(1.1);
}

/*Modal*/
.modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #00000080;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.modal .content {
    background-color: white;
    border-radius: 8px;
    padding: 30px;
    width: 500px;
    display: grid;
    gap: 20px;
}

/*Hero*/
.hero {
    height: 287px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 18px;
    background: linear-gradient(75.04deg, #F4E8F3 0%, #F3EFF6 52.07%, #EEE0F9 102.02%);
    padding: 0 50px;
}

.hero .action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    width: 50%;
}

.hero .image {
    height: 100%;
    width: auto;
    display: flex;
}

.hero .image img {
    width: 100%;
    height: 115%;
    margin-top: -14.5%;
}

/*Select*/
.select {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #EBEDEC;
    padding: 7px 14px;
    border-radius: 28px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    width: auto;
}

.select:hover {
    background-color: #E4E7E2;
}

.select p {
    width: auto;
}

/*Product*/
.product {
    border: 1.54px solid #F7F5F7;
    border-radius: 18.48px;
    overflow: hidden;
}

.product .image {
    background-color: #F7F5F7;
    position: relative;
    padding: 20px 40px;
}

.product .image img:nth-child(1) {
    width: 100%;
    height: 100%;
}

.product .image img:nth-child(2) {
    position: absolute;
    top: 10px;
    right: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

.product .image img:nth-child(2):hover {
    scale: 1.1;
}

.product .info {
    background-color: white;
    position: relative;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

.product .info .stats {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/*Stars*/
.stars {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: auto;
}

.stars div {
    display: flex;
    align-items: center;
    justify-content: center;
}

/*Pagination*/
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    height: 100%;
}

.pagination span {
    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    color: #1D364D;
    border: 1px solid #F3F3F3;
    padding: 17.5px 20px;
    background-color: white;
}

.pagination span.active {
    font-weight: 600;
    background: linear-gradient(75.04deg, #F4E8F3 0%, #F3EFF6 52.07%, #EEE0F9 102.02%);
}

/*Cart*/
.cart {
    position: relative;
}

.cart .icon {
    height: 100%;
    width: 100%;
}

.cart span {
    position: absolute;
    top: -15px;
    right: -5px;
    background-color: #1D364D;
    border: 1.5px solid #FFFFFF;
    border-radius: 50%;
    color: white;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 500;
}

/*Notification*/
.notification {
    position: relative;
}

.notification .icon {
    height: 100%;
    width: 100%;
}

.notification span {
    position: absolute;
    top: 2.5px;
    right: 2.5px;
    background-color: #D75951;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    animation: ping-animation 1.5s infinite;
}

@keyframes ping-animation {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(1.5);
        opacity: 0.8;
    }

    100% {
        transform: scale(1);
        opacity: 0;
    }
}

/*User*/
.user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.user div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    justify-content: center;
}

.toggle-bar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 4px solid #EAECF0;
}

.toggle-bar p {
    padding: 20px;
    cursor: pointer;
}

.toggle-bar p.active {
    font-weight: 600;
    color: #164C96;
    border-bottom: 4px solid #164C96;
    margin-bottom: -4px;
}

/*Breadcrumb*/
.breadcrumb {
    background-color: #EDF0F8;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 14px;
    width: auto;
    height: auto;
    border-radius: 8px;
}

.breadcrumb .active {
    font-weight: 600;
    color: #3A4980;
}

/*Tag*/
.tag {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 7px 10px;
    border-radius: 27px;
}

.tag span {
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
}

/*Divider*/
.divider {
    border: 1px solid #E4E4E4;
    width: 100%;
}

/*Radio text*/
.radio {
    display: flex;
    align-items: center;
    background-color: #F3F3F3;
    border-radius: 8px;
    gap: 8px;
    padding: 5px 10px;
    width: auto;
}

.radio.active {
    background-color: #EDF0F8;
}

.radio.active .typography {
    color: #3A4980;

}

.radio input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    border: 1px solid #726C6C;
    background: transparent;
    width: 16px;
    height: 16px;
    border-radius: 50%;
}

.radio input[type="radio"]:checked {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    border: 1px solid #EDF0F8;
    outline: 1px solid #3A4980;
    background: #3A4980;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

/*Radio color*/

.color-radio {
    display: flex;
    align-items: center;
    background-color: #ECDECC;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    position: relative;
}

.color-radio.active {
    background-color: #EDF0F8;
}

.color-radio img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.color-radio.active .typography {
    color: #3A4980;

}

.color-radio input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    border: none;
    background: transparent;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
}

.color-radio input[type="radio"]:checked {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    outline: 3px solid #ECDECC;
    border: 5px solid white;
    width: 100%;
    height: 100%;
    background: #ECDECC;
    border-radius: 50%;
}

/*Quantity input*/
.quantity-input {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 29.5px;
    background: #F3F3F3;
    padding: 0 50px;
    width: auto;
}

.quantity-input input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    background: inherit;
    border: none;
    padding: 10px;
    color: #3A4980;
    max-width: 75px;
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;

}

.quantity-input span {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    cursor: pointer;
    padding: 10px;
    transition: all 0.3s ease-in-out;
}

/*Header*/
header {
    display: flex;
    gap: 50px;
    align-items: center;
    padding: 20px 80px;
    height: 100px;
    border-bottom: 1px solid #EDEDED;
}

header .logo p {
    font-weight: 800;
    font-style: italic;
    font-size: 32.8px;
    line-height: 100%;
    color: #0D3356;
}

header .links {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
}

header .links a {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #1D364D;
}

header .user-info {
    display: flex;
    gap: 15px;
}

/*Footer*/
footer {
    background: linear-gradient(75.04deg, #F4E8F3 0%, #F3EFF6 52.07%, #EEE0F9 102.02%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
}

```

</details>

<details>
<summary><code>css/style.css</code></summary>

```css
:root {
  font-family: "Montserrat", sans-serif;
  ;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: black;
  background-color: #F8F8F8;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  width: 100%;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;


  /* Track (background) */
  

}
* {
  scrollbar-width: thin;              /* "auto" or "thin" */
  scrollbar-color: #ffffff #FEAF00;      /* thumb color and track color */
}

a {
  text-decoration: none;
}
```

</details>

<details>
<summary><code>js/script.js</code></summary>

```js
// Select the modal and toggle icon elements
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.modal .action-icon'); // Close icon inside the modal

// Function to show the modal
function openModal() {
    modal.style.display = 'flex';
}

// Function to hide the modal
function closeModal() {
    modal.style.display = 'none';
}


// Login function
function login() {
    // Get the email and password values from the form
    const email = document.querySelector('.signin-form input[type="email"]').value;
    const password = document.querySelector('.signin-form input[type="password"]').value;

    if (email === 'admin@email' && password === 'admin') {
        window.location.href='../html/admin/liste-produits.html'
    } else {
        window.location.href='../html/client/liste-produits.html'
    }
}
```

</details>

## <a name="#quick-start" id="#quick-start">🤸 6.  Démarrage rapide</a>

Suivez ces étapes pour structurer et lancer le projet localement sur votre machine.

### **Exécuter le projet**

Vous pouvez exécuter le projet en utilisant l'extension Live Server sur VSCode (<https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer>)

Ou en ouvrant le fichier **index.html** dans votre navigateur.

> Ouvrez [localhost:5500](http://localhost:5500) dans votre navigateur pour voir le projet avec Live Server.

## <a name="#more" id="#more">🚀 7. Plus d'infos</a>

### **Cloner le dépôt**

```bash
git clone https://github.com/cia-formation/projet-e-commerce-html-css-js.git
```

Pour plus d'information sur la specialite *developpement web* chez CIA Formation, consultez le [site web de la formation](https://cia-formation.com/formations/formation-dqp/dqp-developpement-d-applications-web).
