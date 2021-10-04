let stars = document.getElementById('EasterEgg');
let main = document.getElementById('header')
let meter = 0;

    main.addEventListener('click', function clicks(){
        meter++;
        console.table(meter)
        if (meter === 5) {
            stars.classList.remove("Egg2")
            stars.classList.toggle("Egg");
            console.log("Pascua!!!")
        }
        if (meter === 10) {
            stars.classList.remove("Egg")
            stars.classList.toggle("Egg2");
            console.log("Pascua 2!!!");
            meter = 0;
        }})