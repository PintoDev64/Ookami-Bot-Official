let stars = document.getElementById('stars');
let btn = document.getElementById('btn');
let main = document.getElementById('header')
let meter = 0;

    window.addEventListener('scroll', function () {
        let value = window.scrollY
        stars.style.top = value * 0.50 + 'px';
    })

    main.addEventListener('click', function clicks(){
        meter++;
        console.table(meter)
        if (meter === 5) {
            stars.classList.remove("active2")
            stars.classList.toggle("active");
            console.log("Img con class active")
        }
        if (meter === 10) {
            stars.classList.remove("active")
            stars.classList.toggle("active2");
            console.log("Img con class active-2");
            meter = 0;
        }})
    
    btn.addEventListener('click', function () {
        console.log("Button has been held down")
        window.scrollTo({
            top: 900,
            behavior: "smooth",
        })
    })