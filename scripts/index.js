const changingMessageElement = document.querySelector('.header__charmMessage');
const changingTextElement = document.querySelector('.header__charmMessageText');
let messageIndex = 0;

const listOfMessages = [
  'Now Playing Mario',
  'Neverending Pun Machine',
  'Nascent Plasticine Materialist',
  'Narcoleptic Pony Machine',
  'Nattily Pimped Monster',
  'NASA: Pluto Matters!',
  'Nihilist Postmodern Mistake',
  'Nodding previously Managed',
  'Norwegian Puffin Movies',
  'Nachos Pillage Milwaukee',
  'Nine Pedestrians Mesmerized',
];

changingMessageElement.addEventListener('click', () => {
  changingTextElement.innerText = listOfMessages[messageIndex];
  if (messageIndex === listOfMessages.length - 1) {
    messageIndex = 0;
  } else {
    messageIndex++;
  }
});
