const npm = document.getElementById('npm-phrase-maker');
const phraseVault = ['Node Phrase Maker', 'Nifty Penguin Magic', 'No Prize Mate'];

npm.addEventListener('click', function() {
    const current = npm.querySelector('span');
    const currentIndex = phraseVault.indexOf(current.textContent);

    if(currentIndex === (phraseVault.length - 1)) {
        current.textContent = phraseVault[0];
    } else {
        current.textContent = phraseVault[(currentIndex + 1)];
    }
})
