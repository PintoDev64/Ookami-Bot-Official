let btn = document.getElementById('btn');

    btn.addEventListener('click', function () {
        console.log("Button has been held down")
        window.scrollTo({
            top: 850,
            behavior: "smooth",
        })
    })