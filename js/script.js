console.log('hiii');

// code for toggling the menubar 
let toggle_btn=document.querySelector('.menu-toggle');
toggle_btn.addEventListener('click', ()=>{

    let menu_bar=document.querySelector('.header-right')
    if(menu_bar.style.display=='flex')
    {
        menu_bar.style.animation='out 1s'
        setTimeout(() => {
            menu_bar.style.display='none';
            
        }, 900);
    }
    else
    {
        menu_bar.style.display='flex';
        menu_bar.style.animation='in 1s'
    }
});



// code for playing and pausing each video 
let videos=document.querySelectorAll('.video');

videos.forEach((video)=>{
    video.addEventListener('click', (event)=>{
        openPlayer();
        document.getElementById('video-player').setAttribute('src', `${video.getAttribute('src')}`);
    });
});

//code for closing the player 
const closePlayer = ()=>{
    document.getElementById('video-player').setAttribute('src', '');
    document.querySelector('.modal-container').style.display='none';
}

//code for opening the player 
const openPlayer = ()=>{
    document.querySelector('.modal-container').style.display='flex';
}


// code for reels video in ngo work 
const reels = document.querySelectorAll('.gallery-reel');
reels.forEach((reel)=>{
    reel.addEventListener('click', ()=>{
        openPlayer();
        document.getElementById('video-player').setAttribute('src', `${reel.getAttribute('src')}`);
    });
});



// run auto resize when page will be loaded
window.dispatchEvent(new Event('resize'));