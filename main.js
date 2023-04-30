const img1 = document.getElementById('post1');
const img2 = document.getElementById('post2');
const img3 = document.getElementById('post3');
const img4 = document.getElementById('post4');

const loadImg = (entradas,observer) => {

    // check if an image fits inside the viewport
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
        // optional:  to disappear when the image is loaded
        else {
            // entrada.target.classList.remove('visible');
        }
    });
}
const observer = new IntersectionObserver(loadImg, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    // allows us to indicate when we want it to execute the code.
    threshold: 1.0
});

observer.observe(post1);
observer.observe(post2);
observer.observe(post3);
observer.observe(post4);