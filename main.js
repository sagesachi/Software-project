var story;
function getStory(name)  {
  return {
    currentScene: "path",
    path: {
      title: "Choose your path",
      story: `One day during a normal walk in the evening, you come across a intersection of 3 different pathways. Each of the pathways lead to a different destination, an old house on a nearby hill(1), a silent graveyard(2) and a misty forest(3).',
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
