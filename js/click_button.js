document.addEventListener('DOMContentLoaded', () => {
	const clickArea = document.getElementById('click-area');
	const countEl = document.getElementById('click-count');
	const resetBtn = document.getElementById('reset-btn');
	const imageContainer = document.getElementById('image-container');

	// Initialize count from the displayed text, or start at 0 if it's not a number
	let count = parseInt(countEl.textContent, 10) || 0;

	// Image Array
	const images = [
		'panda1.jpeg',
		'panda2.jpg',
		'panda3.jpg',
		'food.jpeg',
		'food2.jpeg',
		'food3.jpeg',
		'food4.jpeg',
		'plant.jpg',
		'plant2.jpg',
		'plant3.jpg',
		'plant4.jpg',
	];




	// Add click event listener to the click area
	if (clickArea) {
		clickArea.addEventListener('click', () => {
			count += 1;
			countEl.textContent = count;
		});
	}

	// Add click event listener to the reset button
	if (resetBtn) {
		resetBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			count = 0;
			countEl.textContent = count;
		});
	}
});