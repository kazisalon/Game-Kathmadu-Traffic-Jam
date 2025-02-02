// Save as: kathmandu-traffic-game/js/main.js
window.addEventListener("load", () => {
	const game = new Game();

	// Start game loop
	function gameLoop() {
		game.update();
		game.draw();
		requestAnimationFrame(gameLoop);
	}

	gameLoop();
});
