const tabs = document.querySelectorAll('.damage-tab');
const contents = document.querySelectorAll('.damage-contents .content');

const leftImg = document.querySelector('.damage-hero .left-img');
const rightImg = document.querySelector('.damage-hero .right-img');

const heroImages = [
    {
        left: '../images/damage_image/damage_hero_img01.png',
        right: '../images/damage_image/damage_hero_img02.png'
    },
    {
        left: '../images/damage_image/damage_hero_img03.png',
        right: '../images/damage_image/damage_hero_img04.png'
    },
    {
        left: '../images/damage_image/damage_hero_img06.png',
        right: '../images/damage_image/damage_hero_img07.png'
    }
];

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');


        contents.forEach(content => {
            content.classList.remove('active');
        });
        contents[index].classList.add('active');


        leftImg.src = heroImages[index].left;
        rightImg.src = heroImages[index].right;
    });
});