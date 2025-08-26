var story;
function getStory(name)  {
  return {
    currentScene: "path",
    path: {
      title: "Choose your path",
      story: `One day during a normal walk in the evening, ${name} comes across a intersection of 3 different pathways. Each of the pathways lead to a different destination, an old house on a nearby hill(1), a silent graveyard(2) and a misty forest(3).`,
      choices: [
        {
          choice: "Up the hill towards the old house",
          destination: 'house'
        },
        {
          choice: "Into the silent graveyard",
          destination: 'graveyard'
        }        
        {
          choice: "To the misty forest",
          destination: 'forest'
        },        
      ]
    },
    house: {
      title: 'Exploring around creeking floorboards',
      story: 'There seems to be a basement and a second floor to the old house...',
      choices: [
        {
        choice: "Go down to the basement.",
        destination: 'basement'
        },
        {
        choice: "Go upstairs.",
        destination: 'upstairs'
        }
      ]
    },
    graveyard: {
      title: 'The silent spooky graveyard looming',
      story: 'As you head into the graveyard, you can see you can either go further in or towards a nearby unusual shed...',
      choices: [
        {
        choice: "Go further into the graveyard",
        destination: 'furtherin'
        },
        {
        choice: "Check out the unusual shed",
        destination: 'shed'
        }
      ]
    },
    forest: {
      title: 'A seemingly mystical misty forest',
      story: 'As you make your way into the forest, you can either go further down the rocky path or deep into the trees...',
      choices: [
        {
        choice: "Go through the trees",
        destination: 'trees'
        },
        {
        choice: "Continue down the path",
        destination: 'path'
        }
      ]
    },

    basement: {
      title: 'Youre stuck.',
      story: "As soon as you go down into the basement, the door closes and locks behind you. There's nothing in the basement, all empty and dusty and now you're stuck.",
      image: "basement.PNG",      
      defaultDestination: 'path',
      buttonText: "Lets try this again..."
    },

    upstairs: {
      title: 'New discovery',
      story: "Upon heading upstairs, you make your way into a room and find a locked chest with gold trimmings with unknown treasures inside...",
      image: "upstairs.PNG",       
    //Edit to include some sort of option of opening it
    },

    furtherin: {
      title: 'further into the graveyard...',
      story: "You go deeper into the graveyard, the night slowly approaching... Suddenly, you trip and fall into a somehow empty grave, unable to get out.",
      image: "grave.PNG",
      defaultDestination: 'path',
      buttonText: "Lets try this again..."
    },

    shed: {
      title: 'The unusual and creepy shed',
      story: "You head into the old shed, floorboards creeping beneath you. The small amount of light from outside still reflects into the room, making an old rusty key visible across the room... which seems to be a key for some kind of chest.",
      image: "shed.PNG"
      //Edit to add to some kind of inventory etc or change variable smt
    },
    
    trees: {
      title: 'Stumbling through the dense forest...',
      story: "You try to forge your own path through the dense trees instead, your surroundings being hard to see. All of a sudden, a large tree branch cracks and falls on top of you.",
      image: "tree.PNG",
      defaultDestination: 'path',
      buttonText: "Lets try this again..."
    },

    path: {
      title: 'A new friendly face.',
      story: "As you continue to go down the path, an unusual face appears in front of you of a green forest nymph. Youre hesitant at first to accept but he helps guide you to the other sight of the forest to safety.",
      image: "elf?.PNG",
    //Something something...
    }
  }
}


var el = document.getElementById("start-button");
if (el.addEventListener)
    el.addEventListener("click", doFunction, false);
else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);



//document.addEventListener('DOMContentLoaded', function() {
//  var button = document.querySelector('#start-button')
//  var content = document.querySelector('#content')
//  button.addEventListener('click', function() {
//    var name = document.querySelector('#name-input')
//    story = getStory(name.value)
 //   renderScene()
//  })
//})

//function renderScene() {
//  var text = "Next"
//  var image = ""
//  if (story[story.currentScene].image) {
//    image = "<img></img>"
//  }
//  if (story[story.currentScene].buttonText) {
//    text = story[story.currentScene].buttonText
//  }
//  content.innerHTML = `
//  <h1>${story[story.currentScene].title}</h1>
//  <p>${story[story.currentScene].story}</p>
//  ${image}
//  ${getInputs()}
//  <button id = "submit-button">${text}</button>
//  `
//  if (story[story.currentScene].image) {
//    document.querySelector("img").src = `./img/${story[story.currentScene].image}`
//  }
//  var button = document.querySelector("#submit-button");
//  button.addEventListener('click', function() {
//    getInputValue()
//  })
//}

//function getInputValue() {
//  var inputs = document.querySelectorAll('input[type="radio"]');
//  for (var i = 0; i < inputs.length; i++) {
//    if (inputs[i].checked) {
//      story.currentScene = inputs[i].getAttribute('data-destination')
//      renderScene();
//      return;
//    }
//  }
//  story.currentScene = story[story.currentScene].defaultDestination
//  renderScene()
//}

//function getInputs() {
//  var input = ""
//  if (!story[story.currentScene].choices) {
//    return ""
//  }
//  for(var i = 0; i < story[story.currentScene].choices.length; i++) {
//    input += `
//    <div>
//      <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
//      <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
//    </div>`
//  }
//  return input;
//}
