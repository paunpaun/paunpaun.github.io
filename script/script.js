function switch_section(section) {
    
    const main_content = document.getElementById('main-content');
    const buttons = document.querySelectorAll('#sections button');
    
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(`${section}-btn`).classList.add('active');

    if (section === 'home') {
        main_content.innerHTML = `
            <div style="display: flex; flex-flow: row wrap; justify-content: center; align-items: end; height: 100%;">
            <div style="background-color: #C0C0C0; padding: 3em; margin: 1em; color: #0D0D0D;"
            onclick="switch_section('about')">ABOUT</div>
            <div style="background-color: #C0C0C0; padding: 3em; margin: 1em; color: #0D0D0D;"
            onclick="switch_section('projects')">PROJECTS</div>
            <div style="background-color: #C0C0C0; padding: 3em; margin: 1em; color: #0D0D0D;"
            onclick="switch_section('contacts')">CONTACTS</div>
            </div>
`;
    } else if (section === 'about') {
        main_content.innerHTML = `
            <h2>About Me</h2>
            <div id="first-line">
                <img src="/assets/pictures/cvpfp-circle.png" style="width: 10em; margin: 1em;">
                Paun
            </div>
            <p>Sono Paun Stefan, studente al volta e studio informatica.<p>
            <p>Ho 18 anni e sto frequentando l'ultimo anno.</p>
        `;
    } else if (section === 'projects') {
        main_content.innerHTML = `
            <h2>My Projects</h2>
            <h3>Iris-classifier</h3>
            <p>MLP model that recognizes Iris flower species given an image</p>
            <div class="projects-div">
                <img src="https://github.com/user-attachments/assets/eab47550-1b92-41a2-8aaa-61e724b3cde9" style="width: 10em; padding: 0.5em;">
                <img src="https://github.com/user-attachments/assets/ce24a900-7780-47ae-8411-06950ba4adbc" style="width: 10em; padding: 0.5em;">
                <img src="https://github.com/user-attachments/assets/5de0a14d-fe7d-45ee-abe5-f8594b75f2ef" style="width: 10em; padding: 0.5em;">
                <img src="https://github.com/user-attachments/assets/bf59a062-189d-464c-ab58-2dc96466947a" style="width: 10em; padding: 0.5em;">
            </div>     
            <a href="https://github.com/paunpaun/Iris_classifier" target="_blank" style="margin-top: 1em;">
            GitHub link
            </a>
            
        `;
    } else if (section === 'contacts') {
        main_content.innerHTML = `
            <h2>Contact Me</h2>
            <div>
                <img src="/assets/pictures/github4.webp" style="width: 5em; margin: 1em">
                <a href="https://github.com/paunpaun" target="_blank" >
                GitHub
                </a>
                <img src="/assets/pictures/instagram.png" style="width: 5em; margin: 1em">
                <a href="https://instagram.com/spraunz/" target="_blank" >
                Instagram
                </a>
            </div>
            <div style="display: flex; flex-flow: column nowrap; align-items: start;">
                <p>Gmail: paun.stefan@volta.ts.it</p>
                </br>
                <p>Tel: +39 3513240975</p>
            </div>

        `;
    }
}
