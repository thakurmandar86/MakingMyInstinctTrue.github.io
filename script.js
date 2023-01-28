const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const fultooBtn = document.getElementById('FULTOOO');
const btn1 = document.getElementById('clickHereBtn');
const cardsContainer = document.getElementById('cards');
const aboutContainer = document.getElementById('about');
const letterVideo = document.getElementById('letterVideo');

let wrapperRect;
let noBtnRect;

console.log(wrapperRect, noBtnRect);

btn1.addEventListener('click', function() {
    aboutContainer.style.display = 'block';

    setTimeout(myAutoScroll, 1000)

    wrapperRect = wrapper.getBoundingClientRect();
    noBtnRect = noBtn.getBoundingClientRect();

})

fultooBtn.addEventListener('click', function() {
    cardsContainer.style.display = 'flex';

      setTimeout(myAutoScroll, 1000)

    console.log(cardsContainer.scroll);
})

const myAutoScroll = () => {
    cardsContainer.scrollIntoView({
        behavior: 'smooth'
    });
}

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Love You Too :)';
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    console.log(i, j, wrapperRect, noBtnRect);

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

letterVideo.addEventListener('ended', function() {
    var content = document.getElementsByClassName('content');
    content[0].style.display = 'block'
})