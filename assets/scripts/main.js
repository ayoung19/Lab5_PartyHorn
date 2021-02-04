let number = document.querySelector("#volume-number");
let slider = document.querySelector("#volume-slider");
let button = document.querySelector("#honk-btn");
let form = document.querySelector("#party-horn-form");
let audio = document.querySelector("#horn-sound");
let volume_image = document.querySelector("#volume-image");
let sound_image = document.querySelector("#sound-image");

let assets = new Map();
assets.set("radio-air-horn", { img: "./assets/media/images/air-horn.svg", audio: "./assets/media/audio/air-horn.mp3" });
assets.set("radio-car-horn", { img: "./assets/media/images/car.svg", audio: "./assets/media/audio/car-horn.mp3" });
assets.set("radio-party-horn", { img: "./assets/media/images/party-horn.svg", audio: "./assets/media/audio/party-horn.mp3" });

let functions = {
    "radio": function () {
        let asset = assets.get(this.id);
        sound_image.src = asset.img;
        audio.src = asset.audio;
    },
    "default": function () {
        let volume = Math.min(Math.max(+this.value, 0), 100);
        number.value = slider.value = volume;
        audio.volume = volume / 100;
        button.disabled = !volume;
        volume_image.src = `./assets/media/icons/volume-level-${Math.ceil(volume / (100 / 3))}.svg`;
    }
}

document.querySelectorAll("input").forEach(function (el) {
    el.oninput = functions[el.type] || functions["default"];
});

form.onsubmit = function () {
    audio.play();
    return false;
}
