document.querySelectorAll('nav a, .link-icon-ancora').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var sectionId = this.getAttribute('href');
        var section = document.querySelector(sectionId);
        if (section) {
            window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
        }
    });
});

document.querySelectorAll('.mobilemenu li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var sectionId = this.getAttribute('href');
        var section = document.querySelector(sectionId);
        if (section) {
            window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
        }
    });
});

var elementosSkill = document.querySelectorAll('.link-icon-ancora-skill')

elementosSkill.forEach(function (Skill) {
    Skill.addEventListener('click', function (event) {
        event.preventDefault(); // Isso previne o comportamento padrão do link

        var habilidades = document.querySelector('.habilidades');
        habilidades.classList.toggle('habilidadesativas');

        var icones = document.querySelectorAll('.arrow-icon-skill');
        icones.forEach(function (icone) {
            icone.classList.toggle('rotacionado');
        });
    })
})

var elementosSkill = document.querySelectorAll('.link-icon-ancora-skill2');

elementosSkill.forEach(function (Skill) {
    Skill.addEventListener('click', function (event) {
        event.preventDefault(); // Isso previne o comportamento padrão do link

        var habilidades = document.querySelector('.habilidades02');
        habilidades.classList.toggle('habilidadesativas');

        var icone = this.querySelector('.arrow-icon-skill2');
        icone.classList.toggle('rotacionado');
    });
});

var elementosSkill = document.querySelectorAll('.link-icon-ancora-skill3');

elementosSkill.forEach(function (Skill) {
    Skill.addEventListener('click', function (event) {
        event.preventDefault(); // Isso previne o comportamento padrão do link

        var habilidades = document.querySelector('.habilidades03');
        habilidades.classList.toggle('habilidadesativas');

        var icone = this.querySelector('.arrow-icon-skill3');
        icone.classList.toggle('rotacionado');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var elementosMenu = document.querySelectorAll('.menu-link-icon');

    elementosMenu.forEach(function (menuLink) {
        menuLink.addEventListener('click', function (event) {
            event.preventDefault(); // Isso previne o comportamento padrão do link

            var mobileMenu = document.querySelector('.mobilemenu');
            mobileMenu.classList.toggle('mobilemenu-ativa');

            var linkIcon2 = document.querySelector('.link-icon-2');
            linkIcon2.classList.toggle('link-icon-2-ativa');
        });
    });
});
