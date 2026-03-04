console.log("JS Loaded");

document.addEventListener('DOMContentLoaded', () => {
	const clickArea = document.getElementById('click-area');
	const countEl = document.getElementById('click-count');
	const resetBtn = document.getElementById('reset-btn');
	const imageContainer = document.getElementById('image-container');
	
	// Initialize count from the displayed text, or start at 0 if it's not a number
	let count = 0;

	// Image Array
	const images = [
		'img/food.jpeg',
		'img/food2.jpg',
		'img/food3.jpeg',
		'img/food4.jpg',
		'img/panda1.jpeg',
		'img/panda2.jpg',
		'img/panda3.jpg',
		'img/plant.jpg',
		'img/plant2.jpg',
		'img/plant3.jpg',
		'img/plant4.jpg',
	];

	// Avoid repeated image spawn
	let showAt10 = false;
	let showAt15 = false;


	// Add click event listener to the click area
	clickArea.addEventListener('click', () => {
		count += 1;
		countEl.textContent = count;
		changeBackgroundColor();
		//Random picture spawn when 10 clicks
		if (count >= 10 && !showAt10) {
			showRandomImage();
			showAt10 = true;
		}

		// One more picture spawn when 15 clicks
		if (count >= 15 && !showAt15) {
			showRandomImage();
			showAt15 = true;
		}
	});

	// Add click event listener to the reset button
	resetBtn.addEventListener('click', (e) => {
		e.stopPropagation();

		count = 0;
		countEl.textContent = count;

		showAt10 = false;
		showAt15 = false;

		imageContainer.innerHTML = '';
	});

	// Function to show a random image
	function showRandomImage() {

		// Random index
		const randomIndex = Math.floor(Math.random() * images.length);

		// Create image element
		const img = document.createElement('img');

		img.src = images[randomIndex];
		img.classList.add('random-image');

		imageContainer.appendChild(img);
	}

	// Function to change background color
	function changeBackgroundColor() {
		const bgColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		document.body.style.backgroundColor = bgColor;
	}
});