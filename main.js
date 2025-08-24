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
      defaultDestination: 'path',
      buttonText: "Lets try this again..."
    },

    upstairs: {
      title: 'New discovery',
      story: "Upon heading upstairs, you make your way into a room and find a locked chest with gold trimmings with unknown treasures inside...",
    //Edit to include some sort of option of opening it
    },

    furtherin: {
      title: 'further into the graveyard...',
      story: "You go deeper into the graveyard, the night slowly approaching... Suddenly, you trip and fall into a somehow empty grave, unable to get out.",
      defaultDestination: 'path',
      buttonText: "Lets try this again..."
    },

    shed: {
      title: 'The unusual and creepy shed',
      story: "You head into the old shed, floorboards creeping beneath you. The small amount of light from outside still reflects into the room, making an old rusty key visible across the room... which seems to be a key for some kind of chest.",
    //Edit to add to some kind of inventory etc or change variable smt
    },
    
    trees: {
      title: 'Stumbling through the dense forest...',
      story: "You try to forge your own path through the dense trees instead, your surroundings being hard to see. All of a sudden, a large tree branch cracks and falls on top of you.",
      defaultDestination: 'path',
      buttonText: "Lets try this again..."
    },

    path: {
      title: 'A new friendly face.',
      story: "As you continue to go down the path, an unusual face appears in front of you of a green forest nymph. Youre hesitant at first to accept but he helps guide you to the other sight of the forest to safety.",
    //Something something...
    }
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('#start-button')
  var content = document.querySelector('#content')
  button.addEventListener('click', function() {
    var name = document.querySelector('#name-input')
    story = getStory(name.value)
    renderScene()
  })
})
