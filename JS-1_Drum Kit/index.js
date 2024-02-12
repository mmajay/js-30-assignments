const myArray = [
  {
    id: 1,
    bgImg: "./vehicle images/racing.jpg",
    title: "racing",
    text: "A",
    audio: "./vehicle sounds/mixkit-motorcycle-engine-doing-gearshift-2725.wav",
  },
  {
    id: 2,
    bgImg: "./vehicle images/car-horn.jpg",
    title: "car horn",
    text: "B",
    audio: "./vehicle sounds/mixkit-car-horn-718.wav",
  },
  {
    id: 3,
    bgImg: "./vehicle images/car starting.png",
    title: "car starting",
    text: "C",
    audio: "./vehicle sounds/mixkit-cars-starting-1561.wav",
  },
  {
    id: 4,
    bgImg: "./vehicle images/helicopter.jpg",
    title: "helicopter",
    text: "D",
    audio: "./vehicle sounds/mixkit-cinematic-riser-helicopter-engine-2719.wav",
  },
  {
    id: 5,
    bgImg: "./vehicle images/bulldozer.jpg",
    title: "bulldozer",
    text: "E",
    audio:
      "./vehicle sounds/mixkit-construction-place-and-bulldozer-ambiance-800.wav",
  },
  {
    id: 6,
    bgImg:
      "./vehicle images/truck-with-white-trailer-that-says-scania-side.jpg",
    title: "truck",
    text: "F",
    audio: "./vehicle sounds/mixkit-truck-accelerating-1617.wav",
  },
  {
    id: 7,
    bgImg: "./vehicle images/riding-motorcycle.jpg",
    title: "riding Bike",
    text: "G",
    audio: "./vehicle sounds/mixkit-motocross-motorcycle-engine-2727.wav",
  },
  {
    id: 8,
    bgImg: "./vehicle images/motorcycle throttle.jpg",
    title: "Bike throttle",
    text: "H",
    audio: "./vehicle sounds/mixkit-motorcycle-changing-gears-2730.wav",
  },
  {
    id: 9,
    bgImg: "./vehicle images/tractor.jpg",
    title: "tractor",
    text: "I",
    audio: "./vehicle sounds/mixkit-tractor-driving-away-1599.wav",
  },
  {
    id: 10,
    bgImg:
      "./vehicle images/steam-train-chugs-through-mountain-forest-scene-generative-ai.jpg",
    title: "train",
    text: "J",
    audio: "./vehicle sounds/mixkit-train-passing-by-with-horn-1632.wav",
  },
  {
    id: 11,
    bgImg: "./vehicle images/bicycle bell.jpg",
    title: "Bicycle Bell",
    text: "K",
    audio: "./vehicle sounds/mixkit-loud-bike-bell-1607.wav",
  },
  {
    id: 12,
    bgImg: "./vehicle images/car ignition failed.jpg",
    title: "car ignition",
    text: "L",
    audio: "./vehicle sounds/mixkit-failed-car-ignition-1540.wav",
  },
];

function renderContainer() {
  let mainContainer = document.getElementById("mainContainer");
  myArray.forEach((each) => {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    cardContainer.style.backgroundImage = `url("${each.bgImg}")`;
    mainContainer.appendChild(cardContainer);

    let textContainer = document.createElement("div");
    textContainer.id = "textContainer" + each.id;
    textContainer.classList.add("text-container");
    cardContainer.appendChild(textContainer);

    let textEl = document.createElement("p");
    textEl.textContent = each.text;
    textEl.classList.add("text");
    textContainer.appendChild(textEl);

    let titleEl = document.createElement("p");
    titleEl.textContent = each.title.toUpperCase();
    titleEl.classList.add("title");
    textContainer.appendChild(titleEl);

    let audioEl = document.createElement("audio");
    audioEl.src = each.audio;
    audioEl.id = each.id;
    mainContainer.appendChild(audioEl);
  });
}

// function removeTransition(e) {
//   if (e.propertyName !== 'animation') return;
//   e.target.classList.remove('playing');
// }

window.addEventListener("keyup", (event) => {
  let userInput = event.key;
  let targetedEleObj = myArray.find(
    (eachObj) => eachObj.text.toLocaleLowerCase() === userInput.toLowerCase()
  );
  // console.log(targetedEleObj);
  if (targetedEleObj) {
    let audioELement = document.getElementById(targetedEleObj.id);
    let textContainerEl = document.getElementById(
      "textContainer" + targetedEleObj.id
    );
    el = textContainerEl;
    // console.log(audioELement);
    // console.log(textContainerEl);
    textContainerEl.classList.remove("playing");
    // audioELement.currentTime = 0;
    audioELement.pause();
  }
});

window.addEventListener("keypress", (event) => {
  let userInput = event.key;
  let targetedEleObj = myArray.find(
    (eachObj) => eachObj.text.toLocaleLowerCase() === userInput.toLowerCase()
  );
  // console.log(targetedEleObj);
  if (targetedEleObj) {
    let audioELement = document.getElementById(targetedEleObj.id);
    let textContainerEl = document.getElementById(
      "textContainer" + targetedEleObj.id
    );
    el = textContainerEl;
    // console.log(audioELement);
    // console.log(textContainerEl);
    textContainerEl.classList.add("playing");
    audioELement.currentTime = 0;
    audioELement.play();
  }
});
renderContainer();

let textContainerElList = document.querySelectorAll(".text-container");
// console.log(textContainerElList);
textContainerElList.forEach((eachEl) =>
  eachEl.addEventListener("transitionend", (e) =>
    e.target.classList.remove(".playing")
  )
);
