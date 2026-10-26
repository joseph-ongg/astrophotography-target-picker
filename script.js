// Remember the answer to the first question.
let lens = '';
const originalPhoto = document.querySelector('.photo').getAttribute('src');
const originalAlt = document.querySelector('.photo').alt;

// You can change these recommendations later.
const targets = {
  wide: {
    spring: 'Northern Lights',
    summer: 'Rising Milky Way',
    fall: 'Setting Milky Way',
    winter: 'Milky Way and Andromeda'
  },
  telephoto: {
    spring: 'Pleiades Star Cluster',
    summer: 'Lagoon Nebula in the Milky Way',
    fall: 'North America Nebula',
    winter: 'Andromeda Galaxy'
  }
};

const images = {
  wide: {
    spring: 'images/aurora.webp',
    summer: 'images/rising-mw.webp',
    fall: 'images/setting-mw-optimized.webp',
    winter: 'images/mw-andromeda-updated.webp'
  },
  telephoto: {
    spring: 'images/pleiades.webp',
    summer: 'images/lagoon.webp',
    fall: 'images/north-america.webp',
    winter: 'images/andromeda.webp'
  }
};

// Write your own descriptions between the quotes.
const desc = {
  wide: {
    spring: 'You may think I\'m crazy for suggesting this, but at the right time, under a dark sky, the northern lights can be photographed. Spring can offer favorable aurora conditions, but sightings in California require strong geomagnetic activity. When you see a northern lights forecast for your area, head to a dark site with your camera ready!',
    summer: 'Summer is a great time to photograph the rising Milky Way, with its bright nebulae and star clusters above the horizon. Although this time of year has the least amount of darkness, seeing the summer Milky Way from a dark-sky site is still astonishing. Plan to photograph it in the early morning, around 2 AM, when the Milky Way is above the horizon but still low enough to include the landscape. The exact timing depends on your date and location.',
    fall: 'The setting Milky Way is the core\'s last hurrah, when we see its star clusters and nebulae for the last time until next year. Plan to photograph it as soon as the sky gets dark, before the core sets later in the evening.',
    winter: 'In winter, the bright Milky Way core is out of view, but a fainter stretch of the Milky Way is visible. In this part of the sky, we can see the Andromeda Galaxy and the Pleiades star cluster, two objects that can actually be seen with the naked eye from a dark site.'
  },
  telephoto: {
    spring: 'The Pleiades are one of the most recognizable star clusters in the night sky. You may have noticed the Pleiades as a small, tightly packed group of stars. Long exposures reveal beautiful blue nebulosity around the stars. In March, look toward the western sky after dark.',
    summer: 'The Lagoon Nebula is one of the brightest nebulae in the sky and is visible to the naked eye from a dark site. The image also shows nearby star clusters and smaller nebulae.',
    fall: 'The North America Nebula is a large emission nebula named for its resemblance to North America. Unfortunately, if you are using an unmodified DSLR or mirrorless camera, much of its light is emitted at the hydrogen-alpha wavelength, which the internal filter in many unmodified cameras strongly reduces. Capturing its faint details can require hours of imaging, which takes patience but is worth it in the end. At this time of year, look for the nebula high overhead.',
    winter: 'The Andromeda Galaxy is one of the most distant objects visible with the naked eye. Its full photographic extent spans about six times the apparent diameter of the full Moon, and its orange core and blue outer stars make it a vibrant target for a telephoto lens. Look for it near the constellations Andromeda and Cassiopeia, and you may be able to spot its bright center with the naked eye from a dark site.'
  }
};

function chooseLens(choice) {
  lens = choice;
  document.getElementById('lens-question').hidden = true;
  document.getElementById('season-question').hidden = false;
}

function chooseSeason(season) {
  document.getElementById('season-question').hidden = true;
  document.getElementById('target-name').textContent = targets[lens][season];
  const photo = document.querySelector('.photo');
  photo.onload = function () {
    document.body.classList.toggle('vertical-result', photo.naturalHeight > photo.naturalWidth);
  };
  photo.src = images[lens][season];
  photo.alt = targets[lens][season];
  document.getElementById('backdrop').src = images[lens][season];
  document.getElementById('target-desc').textContent = desc[lens][season];
  document.getElementById('quiz').hidden = true;
  document.getElementById('result').hidden = false;
}

function goBack() {
  lens = '';
  document.getElementById('result').hidden = true;
  document.getElementById('quiz').hidden = false;
  document.getElementById('season-question').hidden = true;
  document.getElementById('lens-question').hidden = false;
  document.querySelector('.photo').onload = null;
  document.body.classList.remove('vertical-result');
  document.querySelector('.photo').src = originalPhoto;
  document.querySelector('.photo').alt = originalAlt;
  window.scrollTo(0, 0);
}
