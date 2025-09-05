// Select the title and subtitle elements
const title = document.querySelector('.header-container .title');
const subtitle = document.querySelector('.header-container h2');

let titleAnimation;
let subtitleAnimation;

// Function to start animations
function startAnimations() {
  // Rotate the title continuously with default speed
  titleAnimation = gsap.to(title, {
    rotation: 360,
    duration: 5,
    ease: "linear",
    repeat: -1,
  });

  // Rotate the subtitle with custom settings (speed, degree, direction)
  subtitleAnimation = gsap.to(subtitle, {
    rotation: 5,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    repeatDelay: 0.1,
    yoyoEase: "power1.inOut",
    // Reverse direction by alternating between +5 and -5 degrees
    onRepeat: () => {
      subtitleAnimation.vars.rotation = subtitleAnimation.vars.rotation === 5 ? -5 : 5;
    }
  });
}

// Function to reset animations
function resetAnimations() {
  if (titleAnimation) titleAnimation.kill();
  if (subtitleAnimation) subtitleAnimation.kill();

  // Reset rotation angles to zero
  gsap.set([title, subtitle], { rotation: 0 });
}

// Start animations initially when the page loads
startAnimations();

// Attach click handlers to buttons
document.querySelector('.reset').addEventListener('click', () => {
  resetAnimations();
});

document.querySelector('.restart').addEventListener('click', () => {
  resetAnimations();
  startAnimations();
});
