//hamburger button 
document.querySelector("body > div.ui.pointing.menu.stackable > div.hamburger").addEventListener("click", function(e) { 
		$menu = $(this).parent();
		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
			$menu.addClass('open');
		} else {
			$(this).removeClass('active');
			$menu.removeClass('open');
		}
		e.preventDefault();
	});

// this one is jut to wait for the page to load
// this one is jut to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark-theme.css';
            themeToggle.innerText = 'Light Mode';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light-theme.css';
            themeToggle.innerText = 'Dark Mode';
        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href)  
    })
})

