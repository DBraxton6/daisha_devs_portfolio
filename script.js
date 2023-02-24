/* light-mode colors */
/* 
#516C5F -- headers
#9EA396 -- text
#E3DEDA -- background color 
#D3C0B6 -- accent 
*/

/* dark-mode colors */
/* 
#272727 -- background color
#D3C0B6 -- headers
#E3DEDA -- text
#9EA396 or #516C5F -- accent
*/

let mode = 'light';

let changeMode = (element) => {
    // change items to dark mode
    if (mode === 'light') {
        element.style.backgroundColor('#272727');
        
        mode = 'dark'
    }


    // change items to light mode
    if (mode === 'dark') {
        element.style.backgroundColor('#E3DEDA');
        
        mode = 'light'
    }
}

document.getElementById('mode').onclick = changeMode;