let insults = ['schmoe', 'ugly', 'tubby', 'jerkface', 'silly goose', 'bozo', 'dumbo'];
let animals = ['marmot', 'heron', 'chipmunk', 'pachyderm', 'worm', 'capybara'];
let bodyParts = ['spinal cord', 'legs', 'hands', 'face', 'neck', 'abdomen'];
let insult = document.getElementById("insult");
let output = '';

button.onclick = function generateInsult() {
  let randomInsult = insults[Math.floor(Math.random() * insults.length)];
  let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  let randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
  let output = '';

  if (randomAnimal === 'marmot') {
    document.body.style.backgroundImage = "url('./marmot.jpg')"
  } else if (randomAnimal === 'heron') {
      document.body.style.backgroundImage = "url('./Heron.jpg')"
  } else if (randomAnimal === 'chipmunk') {
    document.body.style.backgroundImage = "url('./chipmunk.jpg')"
  } else if (randomAnimal === 'pachyderm') {
    document.body.style.backgroundImage = "url('./pachyderm.jpg')"
  } else if (randomAnimal === 'worm') {
    document.body.style.backgroundImage = "url('./worm.jpg')"
  } else {
    document.body.style.backgroundImage = "url('./capybara.JPG')"
  }
  if (randomAnimal === 'heron') {
    output = `Hey ${randomInsult}! You have the ${randomBodyPart} of an ${randomAnimal}!`;
    console.log(output);
    container.innerHTML = output;
    return output;
  } else {
    output = `Hey ${randomInsult}! You have the ${randomBodyPart} of a ${randomAnimal}!`;
    console.log(output);
    container.innerHTML = output;
    return output;
  }
}