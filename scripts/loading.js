// Show loading overlay when page starts loading
document.addEventListener('DOMContentLoaded', () => {
    const loadingOverlay = document.querySelector('.loading-overlay');
    
    // Show loading overlay immediately
    if (loadingOverlay) {
        loadingOverlay.classList.remove('hidden');
    }

    // Hide loading overlay when all assets are loaded
    window.addEventListener('load', () => {
        if (loadingOverlay) {
            // Add slight delay for better UX
            setTimeout(() => {
                loadingOverlay.classList.add('hidden');
                
                // Remove overlay after animation completes
                setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                }, 500);
            }, 300);
        }
    });

    // Fallback in case load event doesn't fire
    setTimeout(() => {
        if (loadingOverlay && !loadingOverlay.classList.contains('hidden')) {
            loadingOverlay.classList.add('hidden');
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }
    }, 5000); // 5 second timeout
});