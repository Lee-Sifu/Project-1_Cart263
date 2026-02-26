document.addEventListener('DOMContentLoaded', () => {
	const clickArea = document.getElementById('click-area');
	const countEl = document.getElementById('click-count');
	const resetBtn = document.getElementById('reset-btn');

    // Initialize count from the displayed text, or start at 0 if it's not a number
	let count = parseInt(countEl.textContent, 10) || 0;

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