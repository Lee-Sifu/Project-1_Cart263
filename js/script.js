document.addEventListener('DOMContentLoaded', () => {
	const clickArea = document.getElementById('click-area');
	const countEl = document.getElementById('click-count');
	const resetBtn = document.getElementById('reset-btn');

	let count = parseInt(countEl.textContent, 10) || 0;

	if (clickArea) {
		clickArea.addEventListener('click', () => {
			count += 1;
			countEl.textContent = count;
		});
	}

	if (resetBtn) {
		resetBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			count = 0;
			countEl.textContent = count;
		});
	}
});