var story;
function getStory(name)  {
  return {
    currentScene: "path",
    path: {
      title: "Choose your path",
      story: `One day during a normal walk in the evening, you come across a intersection of 3 different pathways. Each of the pathways lead to a different destination, an old house on a nearby hill(1), a silent graveyard(2) and a misty forest(3).`,
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
      buttonText: "Let's try this again..."
    },

    upstairs: {
      title: 'New discovery'
      story: "Upon heading upstairs, you make your way into a room and find a locked chest with gold trimmings with unknown treasures inside...",
    //Edit to include some sort of option of opening it
    },


    furtherin: {



      
      title: 'A seemingly mystical misty forest',
      story: 'As you make your way into the forest, you can either go further down the rocky path or deep into the trees...',

    },
    shed: {


      
      title: 'A seemingly mystical misty forest',
      story: 'As you make your way into the forest, you can either go further down the rocky path or deep into the trees...',

    },
    trees: {


      
      title: 'A seemingly mystical misty forest',
      story: 'As you make your way into the forest, you can either go further down the rocky path or deep into the trees...',

    },
    shed: {


      
      title: 'A seemingly mystical misty forest',
      story: 'As you make your way into the forest, you can either go further down the rocky path or deep into the trees...',

    },
