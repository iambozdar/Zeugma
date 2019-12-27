const countdown = document.querySelector('.countdown');

// Set Launch Date (in miliseconds)
const launchDate = new Date('Jan 14, 2020 09:00:00').getTime();

// Update Every Second
const interval = setInterval(() => {
    // Get todays date and time (ms)
    const now = new Date().getTime();
    
    // Distance from now to the launch date
    const difference = launchDate - now;

    // Time calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display result
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

    // If launch date passed
    if (difference < 0) {
        // Stop Counter
        clearInterval(interval);
        // Style and output text
        countdown.style.color = 'skyblue';
        countdown.innerHTML = 'Launched!';
    }

}, 1000);