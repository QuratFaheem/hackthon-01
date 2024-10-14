var toggleButton = document.getElementById('skillsshow');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none' || skills.style.display === '') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
