// Function to open a full-screen image modal
function openFullScreenImage(imageSrc) {
    // Create a new Bootstrap modal, disabling keyboard interaction
    const modal = new bootstrap.Modal(document.getElementById('fullScreenImageModal'), {
        keyboard: false
    });

    // Get the image element inside the modal
    const modalImage = document.getElementById('fullScreenImage');
    // Set the source of the image to the provided image source
    modalImage.src = imageSrc;

    // Show the modal
    modal.show();
}

// Event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all video elements on the page
    var videos = document.querySelectorAll('video');
    // Play each video
    videos.forEach(function(video) {
        video.play();
    });
});

// Function to toggle fullscreen mode for a video
function openFullscreenVideo(video) {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
}
