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
animalDiv.style.marginBottom = "20px";

const MainDiv = document.createElement("div");
document.body.append(MainDiv);

class Father {
  constructor(name, age, eyes, weight) {
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.weight = weight;
  }

  static i = 0;

  InfoCards() {
    Father.i += 1;
    const FilledCard = document.createElement("div");
    const cardClassName = "Cards";
    FilledCard.className = cardClassName;
    let CardName = document.createElement("h4");
    CardName.innerText = "Name: " + this.name;
    let CardAge = document.createElement("p");
    CardAge.innerText = "Age: " + this.age;
    let CardEyes = document.createElement("p");
    CardEyes.innerText = "Eyes: " + this.eyes;
    let CardWeight = document.createElement("p");
    CardWeight.innerText = "Weight: " + this.weight;

    FilledCard.append(CardName, CardAge, CardEyes, CardWeight);
    MainDiv.appendChild(FilledCard);

    // Return the generated class name for removal later
    return cardClassName;
  }
}

// Keep track of added class names
const addedClassNames = [];

class Fish extends Father {
  constructor(name, age, eyes, weight, fins, scales) {
    super(name, age, eyes, weight);
    this.fins = fins;
    this.scales = scales;
  }

  InfoCards() {
    // Remove previously added class name
    if (addedClassNames.length > 0) {
      const lastClassName = addedClassNames.pop();
      const lastCard = document.querySelector("." + lastClassName);
      MainDiv.removeChild(lastCard);
    }

    // Get the new class name and add it to the array
    const newClassName = super.InfoCards();
    addedClassNames.push(newClassName);

    const FilledCard = document.querySelector("." + newClassName);

    let CardFins = document.createElement("p");
    CardFins.innerText = "Fins: " + this.fins;
    let CardScales = document.createElement("p");
    CardScales.innerText = "Scales: " + this.scales;

    FilledCard.append(CardFins, CardScales);
  }
}

class Cat extends Father {
  constructor(name, age, eyes, weight, legs, fur) {
    super(name, age, eyes, weight);
    this.legs = legs;
    this.fur = fur;
  }

  InfoCards() {
    // Remove previously added class name
    if (addedClassNames.length > 0) {
      const lastClassName = addedClassNames.pop();
      const lastCard = document.querySelector("." + lastClassName);
      MainDiv.removeChild(lastCard);
    }

    // Get the new class name and add it to the array
    const newClassName = super.InfoCards();
    addedClassNames.push(newClassName);

    const FilledCard = document.querySelector("." + newClassName);

    let CardLegs = document.createElement("p");
    CardLegs.innerText = "Legs: " + this.legs;
    let CardFur = document.createElement("p");
    CardFur.innerText = "Fur: " + this.fur;

    FilledCard.append(CardLegs, CardFur);
  }
}

class Bird extends Father {
  constructor(name, age, eyes, weight, wings, beak) {
    super(name, age, eyes, weight);
    this.wings = wings;
    this.beak = beak;
  }

  InfoCards() {
    // Remove previously added class name
    if (addedClassNames.length > 0) {
      const lastClassName = addedClassNames.pop();
      const lastCard = document.querySelector("." + lastClassName);
      MainDiv.removeChild(lastCard);
    }

    // Get the new class name and add it to the array
    const newClassName = super.InfoCards();
    addedClassNames.push(newClassName);

    const FilledCard = document.querySelector("." + newClassName);

    let CardWings = document.createElement("p");
    CardWings.innerText = "Wings: " + this.wings;
    let CardBeak = document.createElement("p");
    CardBeak.innerText = "Beak: " + this.beak;

    FilledCard.append(CardWings, CardBeak);
  }
}
///////////////////////BIRD FUNCTION AND EVENTLISTENER START/////////////////
function BirdForm() {
  const my_form = document.createElement("form");

  const NameL = document.createElement("label");
  NameL.innerHTML = "Name: ";
  const Name = document.createElement("input");
  Name.id = "Name";
  const AgeL = document.createElement("label");
  AgeL.innerHTML = "Age: ";
  const Age = document.createElement("input");
  Age.id = "Age";
  const EyesL = document.createElement("label");
  EyesL.innerHTML = "Eyes: ";
  const Eyes = document.createElement("input");
  Eyes.id = "Eyes";
  const WeightL = document.createElement("label");
  WeightL.innerHTML = "Weight: ";
  const Weight = document.createElement("input");
  Weight.id = "Weight";
  const WingsL = document.createElement("label");
  WingsL.innerHTML = "Wings: ";
  const Wings = document.createElement("input");
  Wings.id = "Wings";
  const BeakL = document.createElement("label");
  BeakL.innerHTML = "Beak: ";
  const Beak = document.createElement("input");
  Beak.id = "Beak";

  const my_button = document.createElement("button");
  my_button.innerText = "Submit";
  my_button.id = "submitBtn";

  my_form.append(
    NameL,
    Name,
    AgeL,
    Age,
    EyesL,
    Eyes,
    WeightL,
    Weight,
    WingsL,
    Wings,
    BeakL,
    Beak,
    my_button
  );
  MainDiv.append(my_form);
}

bird.addEventListener("click", () => {
  if (document.querySelector("form") == null) {
    BirdForm();
  } else {
    MainDiv.removeChild(document.querySelector("form"));
    BirdForm();
  }

  const my_button = document.getElementById("submitBtn");
  my_button.addEventListener("click", (e) => {
    e.preventDefault();
    let animal_name = document.getElementById("Name").value;
    let animal_age = document.getElementById("Age").value;
    let animal_eyes = document.getElementById("Eyes").value;
    let animal_weight = document.getElementById("Weight").value;
    let animal_wings = document.getElementById("Wings").value;
    let animal_beak = document.getElementById("Beak").value;
    let bird = new Bird(
      animal_name,
      animal_age,
      animal_eyes,
      animal_weight,
      animal_wings,
      animal_beak
    );
    bird.InfoCards();
  });
});
////////////////////////////BIRD END///////////////////////////////

//////////////////////////////////CAT START////////////////
function CatForm() {
  const my_form = document.createElement("form");

  const NameL = document.createElement("label");
  NameL.innerHTML = "Name: ";
  const Name = document.createElement("input");
  Name.id = "Name";
  const AgeL = document.createElement("label");
  AgeL.innerHTML = "Age: ";
  const Age = document.createElement("input");
  Age.id = "Age";
  const EyesL = document.createElement("label");
  EyesL.innerHTML = "Eyes: ";
  const Eyes = document.createElement("input");
  Eyes.id = "Eyes";
  const WeightL = document.createElement("label");
  WeightL.innerHTML = "Weight: ";
  const Weight = document.createElement("input");
  Weight.id = "Weight";
  const LegsL = document.createElement("label");
  LegsL.innerHTML = "Legs: ";
  const Legs = document.createElement("input");
  Legs.id = "Legs";
  const FurL = document.createElement("label");
  FurL.innerHTML = "Fur: ";
  const Fur = document.createElement("input");
  Fur.id = "Fur";

  const my_button = document.createElement("button");
  my_button.innerText = "Submit";
  my_button.id = "submitBtn";

  my_form.append(
    NameL,
    Name,
    AgeL,
    Age,
    EyesL,
    Eyes,
    WeightL,
    Weight,
    LegsL,
    Legs,
    FurL,
    Fur,
    my_button
  );
  MainDiv.append(my_form);
}

cat.addEventListener("click", () => {
  if (document.querySelector("form") == null) {
    CatForm();
  } else {
    MainDiv.removeChild(document.querySelector("form"));
    CatForm();
  }

  const my_button = document.getElementById("submitBtn");
  my_button.addEventListener("click", (e) => {
    e.preventDefault();
    let animal_name = document.getElementById("Name").value;
    let animal_age = document.getElementById("Age").value;
    let animal_eyes = document.getElementById("Eyes").value;
    let animal_legs = document.getElementById("Legs").value;
    let animal_weight = document.getElementById("Weight").value;
    let animal_fur = document.getElementById("Fur").value;

    let cat = new Cat(
      animal_name,
      animal_age,
      animal_eyes,
      animal_weight,
      animal_legs,
      animal_fur
    );
    cat.InfoCards();
  });
});
/////////////////////////////////CAT END////////////////////////////////

////////////////////////////////FISH START///////////////////////////
function fishForm() {
  const my_form = document.createElement("form");

  const NameL = document.createElement("label");
  NameL.innerHTML = "Name: ";
  const Name = document.createElement("input");
  Name.id = "Name";
  const AgeL = document.createElement("label");
  AgeL.innerHTML = "Age: ";
  const Age = document.createElement("input");
  Age.id = "Age";
  const EyesL = document.createElement("label");
  EyesL.innerHTML = "Eyes: ";
  const Eyes = document.createElement("input");
  Eyes.id = "Eyes";
  const WeightL = document.createElement("label");
  WeightL.innerHTML = "Weight: ";
  const Weight = document.createElement("input");
  Weight.id = "Weight";
  const FinsL = document.createElement("label");
  FinsL.innerHTML = "Fins: ";
  const Fins = document.createElement("input");
  Fins.id = "Fins";
  const ScalesL = document.createElement("label");
  ScalesL.innerHTML = "Scales: ";
  const Scales = document.createElement("input");
  Scales.id = "Scales";

  const my_button = document.createElement("button");
  my_button.innerText = "Submit";
  my_button.id = "submitBtn";

  my_form.append(
    NameL,
    Name,
    AgeL,
    Age,
    EyesL,
    Eyes,
    WeightL,
    Weight,
    FinsL,
    Fins,
    ScalesL,
    Scales,
    my_button
  );
  MainDiv.append(my_form);
}

fish.addEventListener("click", () => {
  if (document.querySelector("form") == null) {
    fishForm();
  } else {
    MainDiv.removeChild(document.querySelector("form"));
    fishForm();
  }

  const my_button = document.getElementById("submitBtn");
  my_button.addEventListener("click", (e) => {
    e.preventDefault();
    let animal_name = document.getElementById("Name").value;
    let animal_age = document.getElementById("Age").value;
    let animal_eyes = document.getElementById("Eyes").value;
    let animal_weight = document.getElementById("Weight").value;
    let animal_fins = document.getElementById("Fins").value;
    let animal_scales = document.getElementById("Scales").value;

    let fish = new Fish(
      animal_name,
      animal_age,
      animal_eyes,
      animal_weight,
      animal_fins,
      animal_scales
    );
    fish.InfoCards();
  });
});
