var sentences = ['Never Pet Mermaids',
'Nanobots Producing Megastructures',
'Nature\'s Powerful Meme',
'Needful Program Management',
'Nihilistic Pool Man',
'Nihil Prius Modulus',
'Noiseless Peaceful Morning',
'Noodle Printing Machine',
'Neutrinos Peludos Magnéticos',
'Nine Pedestrians Mesmerized'
];

var paragraph = document.getElementById('npm-clone');
var clicks = -1;

function change() {
    clicks += 1;
    paragraph.textContent = sentences[clicks % sentences.length];
}

paragraph.addEventListener('click', change);
