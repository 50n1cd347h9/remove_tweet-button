const hideTweetButton = () => {
  	const tweetButton = document.querySelector('[aria-label="Post"], [aria-label="ポストする"]');
	if (tweetButton) {
	    tweetButton.style.display = 'none';
	}
};

const disableTweetShortcut = (event) => {
  if (event.key === 'n' && !event.ctrlKey && !event.altKey && !event.shiftKey && !event.metaKey) {
    event.preventDefault();
    event.stopPropagation();
  }
};

const observer = new MutationObserver(hideTweetButton);
observer.observe(document.body, { childList: true, subtree: true });

hideTweetButton();
document.addEventListener('keydown', disableTweetShortcut, true);
