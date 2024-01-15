document.addEventListener('DOMContentLoaded', function () {
    createYouTubeVideo('phiOLJpFgns?si=tmKjlpZTT4omnOyM?rel=0', 'video-container-1');
    createYouTubeVideo('0qSarZpylxs?si=Z8aEMbmXHAkopuef?rel=0', 'video-container-2');
});
function createYouTubeVideo(videoId, containerId) {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoId;
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('loading', 'lazy');
    
    var container = document.getElementById(containerId);
    
    if (container) {
        container.appendChild(iframe);
    } else {
        console.error('Container with ID ' + containerId + ' not found.');
    }
}