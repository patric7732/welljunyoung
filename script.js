function zoomIn(event) {
    event.target.style.width = "200px";
    event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
    event.target.style.width = "150px";
    event.target.style.transition = "all 0.5s";
}




let showModalButton1 = document.querySelector('.fpsbtn');
let closeModalButton1 = document.querySelector('.cls1');

let showModalButton2 = document.querySelector('.spobtn');
let closeModalButton2 = document.querySelector('.cls2');

let showModalButton3 = document.querySelector('.aosbtn');
let closeModalButton3 = document.querySelector('.cls3');

let showModalButton4 = document.querySelector('.rpgbtn');
let closeModalButton4 = document.querySelector('.cls4');

let showModalButton5 = document.querySelector('.mscbtn');
let closeModalButton5 = document.querySelector('.cls5');

let folder = document.querySelector('.intimg');
let folder1 = document.querySelector('.int2');
let tproject1 = document.querySelector('.fpsshow');
let tproject2 = document.querySelector('.sposhow');
let tproject3 = document.querySelector('.aosshow');
let tproject4 = document.querySelector('.rpgshow');
let tproject5 = document.querySelector('.mscshow');


showModalButton1.addEventListener('click', showModal1);
closeModalButton1.addEventListener('click', closeModal1);

showModalButton2.addEventListener('click', showModal2);
closeModalButton2.addEventListener('click', closeModal2);

showModalButton3.addEventListener('click', showModal3);
closeModalButton3.addEventListener('click', closeModal3);

showModalButton4.addEventListener('click', showModal4);
closeModalButton4.addEventListener('click', closeModal4);

showModalButton5.addEventListener('click', showModal5);
closeModalButton5.addEventListener('click', closeModal5);


function closeModal1(e) {
    closeModalAnimate1();
}

function showModal1(e) {
    showModalAnimate1();
}

function closeModal2(e) {
    closeModalAnimate2();
}

function showModal2(e) {
    showModalAnimate2();
}

function closeModal3(e) {
    closeModalAnimate3();
}

function showModal3(e) {
    showModalAnimate3();
}

function closeModal4(e) {
    closeModalAnimate4();
}

function showModal4(e) {
    showModalAnimate4();
}

function closeModal5(e) {
    closeModalAnimate5();
}

function showModal5(e) {
    showModalAnimate5();
}


function closeModalAnimate1() {
    folder.style.display = "flex";
    tproject1.style.display = "none";
    folder1.style.display = "block";
}

function showModalAnimate1() {
    folder.style.display = "none";
    folder1.style.display = "none";
    tproject1.style.display = "block";
}

function closeModalAnimate2() {
    folder.style.display = "flex";
    folder1.style.display = "block";
    tproject2.style.display = "none";
}

function showModalAnimate2() {
    folder.style.display = "none";
    folder1.style.display = "none";
    tproject2.style.display = "block";
}

function closeModalAnimate3() {
    folder.style.display = "flex";
    folder1.style.display = "block";
    tproject3.style.display = "none";
}

function showModalAnimate3() {
    folder.style.display = "none";
    folder1.style.display = "none";
    tproject3.style.display = "block";
}

function closeModalAnimate4() {
    folder.style.display = "flex";
    folder1.style.display = "block";
    tproject4.style.display = "none";
}

function showModalAnimate4() {
    folder.style.display = "none";
    folder1.style.display = "none";
    tproject4.style.display = "block";
}

function closeModalAnimate5() {
    folder.style.display = "flex";
    folder1.style.display = "block";
    tproject5.style.display = "none";
}

function showModalAnimate5() {
    folder.style.display = "none";
    folder1.style.display = "none";
    tproject5.style.display = "block";
}

function showNav() {
    document.getElementsByClassName("mnav")[0].classList.toggle("active");
}

// 
