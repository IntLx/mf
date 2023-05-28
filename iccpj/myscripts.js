// Disable Ctrl+U and Ctrl+Shift+I
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === 'u' || event.key === 'U' || event.key === 'i' || event.key === 'I')) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
});
