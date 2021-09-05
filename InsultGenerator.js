let insults = ['schmoe', 'ugly', 'tubby', 'jerkface', 'silly goose', 'bozo', 'dumbo'];
let animals = ['marmot', 'heron', 'chipmunk', 'pachyderm', 'worm', 'capybara'];
let bodyParts = ['spinal cord', 'legs', 'hands', 'face', 'neck', 'abdomen'];

/*function generateInsult() {
  let randomInsult = insults[Math.floor(Math.random() * insults.length)];
  let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  let randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];

  if (randomAnimal === 'heron') {
    let output = `Hey ${randomInsult}! You have the ${randomBodyPart} of an ${randomAnimal}!`;
    console.log(output);
    return output;
  } else {
    let output = `Hey ${randomInsult}! You have the ${randomBodyPart} of a ${randomAnimal}!`;
    console.log(output);
    return output;
  }
}*/

document.addEventListener('DOMContentLoaded', function() {
  var button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = 'Press me';
  button.className = 'btn-styled';

  button.onclick = function generateInsult() {
    let randomInsult = insults[Math.floor(Math.random() * insults.length)];
    let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    let randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
  
    if (randomAnimal === 'heron') {
      let output = `Hey ${randomInsult}! You have the ${randomBodyPart} of an ${randomAnimal}!`;
      console.log(output);
      return output;
    } else {
      let output = `Hey ${randomInsult}! You have the ${randomBodyPart} of a ${randomAnimal}!`;
      console.log(output);
      return output;
    }
  }

  var container = document.getElementById('container');
  container.appendChild(button);
}, false);



// document.getElementById("theInsult").innerHTML = output;