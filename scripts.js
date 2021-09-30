let stars = document.getElementById('stars');
let btn = document.getElementById('btn');

    window.addEventListener('scroll', function () {
        let value = window.scrollY
        stars.style.top = value * 0.50 + 'px';
        console.table(scrollY)
    })

    btn.addEventListener('click', function () {
        console.log("Button has been held down")
        window.scrollTo({
            top: 700,
            behavior: "smooth",
        })
    })