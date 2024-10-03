document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var scroll = window.scrollY;
        if (scroll >= 80) {
            document.getElementById('header').classList.add('add-drop');
        } else {
            document.getElementById('header').classList.remove('add-drop');
        }
    });
});