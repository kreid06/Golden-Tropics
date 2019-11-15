let galleryCont = document.getElementsByClassName('gallery-cont')[0]
let homeBack = document.getElementsByClassName('background-cont')[0]

function homeSlideShow(){
    let index = 0;
    let showArray = [0,1,2,3]
    let changeSlide = ()=>{
        homeBack.style.background = `url('./src/images/restaurant${showArray[index]}.jpg') center no-repeat `;
        homeBack.style['background-size'] = 'cover'
    }
    setInterval(()=>{
        index += 1
        if(index === showArray.length ){index = 0}
        changeSlide()
    },10000)
    
    changeSlide()
    
}


homeSlideShow()