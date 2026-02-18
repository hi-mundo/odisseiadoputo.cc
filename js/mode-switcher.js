document.addEventListener('DOMContentLoaded', function () {
    var modeBtn = document.getElementById('mode-toggle');
    var icon2003 = document.querySelector('.mode-icon-2003');
    var iconRead = document.querySelector('.mode-icon-read');

    // Function to update UI based on mode
    function updateUI(isReadingMode) {
        if (isReadingMode) {
            document.body.classList.add('reading-mode');
            document.documentElement.classList.add('reading-mode');
            if (icon2003) icon2003.style.display = 'none';
            if (iconRead) iconRead.style.display = 'inline';
        } else {
            document.body.classList.remove('reading-mode');
            document.documentElement.classList.remove('reading-mode');
            if (icon2003) icon2003.style.display = 'inline';
            if (iconRead) iconRead.style.display = 'none';
        }
    }

    // Initial check
    var isReadingMode = localStorage.getItem('odisseia_read_mode') === 'true';
    updateUI(isReadingMode);

    if (modeBtn) {
        modeBtn.addEventListener('click', function () {
            var currentMode = document.body.classList.contains('reading-mode');
            var newMode = !currentMode; // Toggle

            localStorage.setItem('odisseia_read_mode', newMode);
            updateUI(newMode);
        });
    }
});
