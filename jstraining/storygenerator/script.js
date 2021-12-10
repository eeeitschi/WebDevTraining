const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

customName.focus();

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300/3) + " stone";
        const temperature =  Math.round(94-80) + " centigrade";
        newStory = newStory.replace("94 fahrenheit", temperature);
        newStory = newStory.replace("300 pounds", weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }


function wordReplacement(text, word, replacement) {
    return text.replace(word, replacement);
}