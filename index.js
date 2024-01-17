const animalDiv = document.createElement("div");
const cat = document.createElement("button");
const fish = document.createElement("button");
const bird = document.createElement("button");
fish.innerText = "Fish";
cat.innerText = "Cat";
bird.innerText = "Bird";
document.body.append(animalDiv);
animalDiv.append(cat, bird, fish);
animalDiv.style.display = "flex";
animalDiv.style.justifyContent = "center";
animalDiv.style.gap = "30px";

class Father {
  constructor(name, age, eyes, weight) {
    (this.vardas = name),
      (this.metai = age),
      (this.akys = eyes),
      (this.svoris = weight);
  }
}

class Fish extends Father {
  constructor(name, age, eyes, weight, fins, scales) {
    super(name, age, eyes, weight);
    this.pelekai = fins;
    this.žvynai = scales;
  }
}

class Cat extends Father {
  constructor(name, age, eyes, weight, legs, fur) {
    super(name, age, eyes, weight);
    this.kojos = legs;
    this.kailis = fur;
  }
}
class Bird extends Father {
  constructor(name, age, eyes, weight, wings, beak) {
    super(name, age, eyes, weight);
    this.sparnai = wings;
    this.snapas = beak;
  }
}

fish.addEventListener("click", (event) => {
  event.preventDefault();
});

function createformCard() {
  const divForm = document.createElement("div");
  const formCard = document.createElement("form");
  formCard.classList.add("form-card");

  for (let i = 1; i <= 4; i++) {
    const label = document.createElement("label");
    label.textContent = `Input ${i}`;

    const input = document.createElement("input");
    input.type = "text";
    input.id = `input${i}`;

    formCard.appendChild(label);
    formCard.appendChild(input);
  }
  document.body.append(divForm);
  divForm.append(formCard);
  divForm.style.display = "flex";
  divForm.style.justifyContent = "center";
}
createformCard();
