document.addEventListener('DOMContentLoaded', function() {
    // Xử lý video
    const videoLink = document.querySelector('.aavideo a');
    if (videoLink) {
        videoLink.addEventListener('click', function(e) {
            e.preventDefault();
            const videoUrl = this.getAttribute('href');
            if (videoUrl.includes('youtube.com')) {
                // Mở video YouTube trong light