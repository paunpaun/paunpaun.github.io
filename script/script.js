function switch_section(section) {
    
    const main_content = document.getElementById('main-content');
    const buttons = document.querySelectorAll('#sections button');
    
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(`${section}-btn`).classList.add('active');

    if (section === 'home') {
        main_content.innerHTML = `
            <div id="first-line">
                <img src="/assets/pictures/cvpfp.jpg" style="width: 10em; margin: 1em;">
                Paun
            </div>
            <p>paunpaunpaunpaunpaunpaunpaunpaunpaunpaunpaunpaun<p>
`;
    } else if (section === 'about') {
        main_content.innerHTML = `
            <h2>About Me</h2>
            <p>paunpaunpaunpaunpaunpaunpaun<p>
            <p>paunpaunpaunpaunpaunpaunpaunpaun<p>
            <br>
            <p>paunpaunpaunpaunpaunpaunpaunpaunpaunpaunpaun<p>
            <p>paunpaunpaunpaunpaunpaunpaunpaun<p>
        `;
    } else if (section === 'projects') {
        main_content.innerHTML = `
            <h2>My Projects</h2>
            <h3>Project x</h3>
            <p>project does x</p>
            <div class="projects-div">
                <img src="/assets/pictures/github4.webp" style="width: 10em;">
                <img src="/assets/pictures/github4.webp" style="width: 10em;">
                <img src="/assets/pictures/github4.webp" style="width: 10em;">
            </div>                     
        `;
    } else if (section === 'contacts') {
        main_content.innerHTML = `
            <h2>Contact Me</h2>
            <div>
                <img src="/assets/pictures/github4.webp" style="width: 5em; margin: 1em">
                <a href="https://github.com/paunpaun" target="_blank" >
                GitHub
                </a>
            </div>
        `;
    }
}
