const recorder = document.querySelector('#recorder');
const player = document.querySelector('#player');

recorder.addEventListener('change',  (e) => {
	const [file] = e.target.files;
	const url = URL.createObjectURL(file);
	player.src = url;
});