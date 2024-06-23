// Script para dar nota aos games
const slider = document.getElementById("ratingSlider");
    const ratingValue = document.getElementById("ratingValue");

    slider.oninput = function() {
        ratingValue.textContent = this.value;
    };

//

