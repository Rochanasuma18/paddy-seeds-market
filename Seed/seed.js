document.getElementById('viewMoreBtn').addEventListener('click', function() {
    var moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        this.textContent = 'View Less';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'View More';
    }
});

document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        this.innerHTML = '&#9776;'; // Menu icon
    } else {
        navbar.classList.add('active');
        this.innerHTML = '&times;'; // Close icon
    }
});
