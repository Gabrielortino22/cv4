document.addEventListener('DOMContentLoaded', function() {
    const educationLink = document.querySelector('#education-link');
    const experienceLink = document.querySelector('#experience-link');
    const skillsLink = document.querySelector('#skills-link');

    const educationSection = document.querySelector('#educacion');
    const experienceSection = document.querySelector('#experiencia');
    const skillsSection = document.querySelector('#habilidades');

    educationLink.addEventListener('click', function() {
        educationSection.classList.toggle('show');
        experienceSection.classList.remove('show');
        skillsSection.classList.remove('show');
    });

    experienceLink.addEventListener('click', function() {
        educationSection.classList.remove('show');
        experienceSection.classList.toggle('show');
        skillsSection.classList.remove('show');
    });

    skillsLink.addEventListener('click', function() {
        educationSection.classList.remove('show');
        experienceSection.classList.remove('show');
        skillsSection.classList.toggle('show');
    });

    const showEducationDetails = document.querySelector('#show-education-details');
    const educationDetails = document.querySelector('#education-details');

    showEducationDetails.addEventListener('click', function() {
        educationDetails.classList.toggle('show');
    });

    const showExperienceDetails = document.querySelector('#show-experience-details');
    const experienceDetails = document.querySelector('#experience-details');

    showExperienceDetails.addEventListener('click', function() {
        experienceDetails.classList.toggle('show');
    });
});