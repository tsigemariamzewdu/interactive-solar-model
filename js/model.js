const welcomeText = document.getElementById('welcome-text');
const backgroundSound = document.getElementById('background-sound');

let isPlaying=false;
welcomeText.addEventListener('click', () => {
    if (isPlaying) {
        backgroundSound.pause();
        backgroundSound.currentTime = 0; // Reset to the beginning
    } else {
        backgroundSound.play();
    }
    isPlaying = !isPlaying; // Toggle the state
});
// window.onload = function() {
//     const stars = document.querySelectorAll('.stars img');
    
//     // Show each star with a delay
//     stars.forEach((star) => {
//         setTimeout(() => {
//             star.style.display='block';
//             star.classList.add('show'); // Add class to start the fade-in
//         }); // Stagger the animations
//     });
// };

const planetData = {
    mercury: {
        name: "Mercury",
        description: "Mercury is the closest planet to the Sun and has a very thin atmosphere.",
        video: "path/to/mercury-video.mp4",
        moreInfo: "https://example.com/mercury" // Link to more information
    },
    venus: {
        name: "Venus",
        description: "Venus is the second planet from the Sun and is similar in structure to Earth.",
        video: "path/to/venus-video.mp4"
    },
    earth: {
        name: "Earth",
        description: "Earth is the third planet from the Sun and the only known planet to support life.",
        video: "path/to/earth-video.mp4"
    },
    mars: {
        name: "Mars",
        description: "Mars is known as the Red Planet due to its reddish appearance. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.Mars was named by the Romans for their god of war because its reddish color was reminiscent of blood. The Egyptians called it 'Her Desher,' meaning 'the red one.'Even today, it is frequently called the 'Red Planet' because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.more",
        video: "path/to/mars-video.mp4"
    },
    jupiter: {
        name: "Jupiter",
        description: "Jupiter is the largest planet in our solar system and has a Great Red Spot.",
        video: "path/to/jupiter-video.mp4"
    },
    saturn: {
        name: "Saturn",
        description: "Saturn is famous for its stunning rings made of ice and rock particles.",
        video: "path/to/saturn-video.mp4"
    },
    uranus: {
        name: "Uranus",
        description: "Uranus is an ice giant and has a unique tilt, making it appear on its side.",
        video: "path/to/uranus-video.mp4"
    },
    neptune: {
        name: "Neptune",
        description: "Neptune is known for its deep blue color and strong winds.",
        video: "path/to/neptune-video.mp4"
    }
};
document.querySelectorAll('.planets > div').forEach(planet => {
    planet.addEventListener('click', () => {
        const planetName = planet.className;
        const data = planetData[planetName];

        if (data) {
            document.getElementById('planet-name').innerText = data.name;
            document.getElementById('planet-description').innerText = data.description;
            document.getElementById('video-source').src = data.video;
            document.getElementById('planet-video').load(); // Load the new video

            //set up the read more link
            const readmorebutton=document.getElementById('read-more');
            readmorebutton.href=data.moreInfo;
            readmorebutton.style.display='inline-block'

            document.getElementById('planet-info').style.display = 'block'; // Show the info section
        }
    });
});

const close=document.getElementById('close');
close.addEventListener('click',()=>{
    document.getElementById('planet-info').style.display='none';
});

