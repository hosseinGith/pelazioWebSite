const svgMenu = document.querySelector('.svgMenu')
const navbarContainer = document.querySelector('.navbarContainer')

const menuLiOpener = document.querySelector('.menuLiOpener')
const menuLiContent = document.querySelector('.navbarContainer .menu nav ul li ul')
const menuLis = document.querySelectorAll('.navbarContainer .menu nav>ul>li>ul>li')
const menuLisContent = document.querySelectorAll('.navbarContainer .menu nav>ul>li>ul>li ul')

const containerSignLogin = document.querySelector('.loginContainer')
const signUpContainer = document.querySelector('.signUpContainer')
const loginContainer = document.querySelector('.loginC')

const slides = document.getElementsByClassName('slider')
const dots1 = document.getElementsByClassName('dot')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const mainMenuBtn = document.querySelector('.menuBtn')
const containerMainMenu = document.querySelector('.menuBtn nav')
const lis = document.querySelectorAll('.menuBtn nav ul li')
const imgsMainMenu = document.querySelectorAll('.mainMenuimg img')

const topPageBtn = document.querySelector('.topPageBtn')


const phoneContent = [...document.querySelectorAll('.btnPhone')]
const uls = document.querySelectorAll('.phoneList')
const svgAbout = document.querySelectorAll('.svgAbout')
let sliderIndex = 0

function displayNone(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].style.display = 'none'
    }
}

function removeActive(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove('active')
    }
}

function nextF(array, array2) {
    sliderIndex++
    if (sliderIndex > array.length - 1) {
        sliderIndex = 0
    }
    displayNone(array)
    removeActive(array)
    for (let i = 0; i < dots1.length; i++) {
        array2[i].classList.remove('dotActive')
    }
    array2[sliderIndex].classList.add('dotActive')
    array[sliderIndex].style.display = 'block'
    array[sliderIndex].classList.add('active')
}

function prevF(array, array2) {
    sliderIndex--
    if (sliderIndex < 0) {
        sliderIndex = array.length - 1
    }
    displayNone(array)
    removeActive(array)
    for (let i = 0; i < array2.length; i++) {
        array2[i].classList.remove('dotActive')
    }
    array2[sliderIndex].classList.add('dotActive')
    array[sliderIndex].style.display = 'block'
    array[sliderIndex].classList.add('active')
}
next.addEventListener('click', () => {
    nextF(slides, dots1)
})
prev.addEventListener('click', () => {
    prevF(slides, dots1)

})


setInterval(() => {
    nextF(slides, dots1)

}, 4000)

for (let key = 0; key < dots1.length; key++) {
    dots1[key].addEventListener('click', () => {
        displayNone(slides)
        removeActive(slides)
        for (let i = 0; i < dots1.length; i++) {
            dots1[i].classList.remove('dotActive')
        }
        dots1[key].classList.add('dotActive')
        slides[key].style.display = 'block'
        slides[key].classList.add('active')

    })
}

$(svgMenu).click(() => {
    $(navbarContainer).show();
});


$(window).click(e => {
    if (navbarContainer === e.target || containerSignLogin === e.target) {
        $(navbarContainer).hide();
        containerSignLogin.style.display = 'none';
        loginContainer.style.display = 'flex';
        signUpContainer.style.display = 'none';
    };
});

let containerOpened = false

$(menuLiOpener).click(() => {
    if (!containerOpened) {
        $(menuLiContent).show()
        containerOpened = true
    } else {
        containerOpened = false
        $(menuLiContent).hide()
    };

});
$('.loginbtn').click(() => {
    containerSignLogin.style.display = 'flex'
});

$('.outLoginContainer').click(() => {
    containerSignLogin.style.display = 'none'
});
$('.outSignUpContainer').click(() => {
    containerSignLogin.style.display = 'none'
    loginContainer.style.display = 'flex'
    signUpContainer.style.display = 'none'
});
$('.signContBtn').click(() => {
    signUpContainer.style.display = 'flex'
    loginContainer.style.display = 'none'
});
$('.loginCoBtn').click(() => {
    loginContainer.style.display = 'flex'
    signUpContainer.style.display = 'none'
});
$('.outSignUpContainer').click(() => {
    containerSignLogin.style.display = 'none'
});


function forimg(array) {
    for (let key = 0; key < array.length; key++) {
        array[key].style.display = 'none'
    }
};
containerMainMenu.addEventListener('mouseleave', () => {
    forimg(imgsMainMenu)
});
for (let key = 0; key < lis.length; key++) {
    lis[key].addEventListener('mouseover', () => {
        forimg(imgsMainMenu)
        imgsMainMenu[key].style.display = 'inline'
    })
};

$(document).ready(() => {
    $('.sliderImage2').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        nav: false,
        margin: 20,
        stagePadding: 20,
        responsive: {
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $('.sliderImage3').owlCarousel({
        items: 1,
        dots: false,
        nav: false,
        margin: 10,
        stagePadding: 20,
        responsive: {

            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $('.images').owlCarousel({
        items: 1,
        dots: true,
        margin: 30,
        responsiveRefreshRate: 300,
        responsive: {

            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
    $('.lastImagesSlider').owlCarousel({
        dots: true,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 400,
        slideTransition: false,
        autoplaySpeed: 3000,
        animateOut: true,
        callbacks: false,
    })
});
window.addEventListener('scroll', (e) => {
    if (window.scrollY > 100) {
        topPageBtn.classList.remove('hide');
        return;
    }
    topPageBtn.classList.add('hide')
});
topPageBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
phoneContent.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (!uls[index].classList.contains('active')) {
            console.log(1);
            svgAbout[index].style.rotate = '180deg'
            svgAbout[index].style.fill = '#df02029f'
            uls[index].style.display = 'block'
            uls[index].classList.add('active')
        } else {
            console.log(2);
            svgAbout[index].style.rotate = '0deg'
            svgAbout[index].style.fill = '#000'
            uls[index].style.display = 'none'
            uls[index].classList.remove('active')
        }
    })
});
