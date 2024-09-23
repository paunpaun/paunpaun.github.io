function switch_section(section) {
    
    const main_content = document.getElementById('main-content');
    const buttons = document.querySelectorAll('#sections button');
    
    buttons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(`${section}-btn`).classList.add('active');


    if (section === 'home') {
        main_content.innerHTML = `
            <p>home<p>
        `;
    } else if (section === 'about') {
        main_content.innerHTML = `
            <h2>About Me</h2>
        `;
    } else if (section === 'projects') {
        main_content.innerHTML = `
            <h2>My Projects</h2>
            <h3>Project x</h3>
            <p>project does x</p>
            <div class="scrollable-div">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
                <img src="/assets/pictures/steam2.webp">
            </div>              
            <a href="https://github.com/paunpaun/projectxr">
            github link
            </a>            
        `;
    } else if (section === 'contacts') {
        main_content.innerHTML = `
            <h2>Contact Me</h2>
            <ul>
                <a href="https://github.com/paunpaun" target="_blank">GitHub</a></li>
            </ul>
        `;
    }
}
