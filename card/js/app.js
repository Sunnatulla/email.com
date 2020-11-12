let close = document.querySelector('.close'),
    myModul = document.querySelector('.myModul'),
    myImg = document.querySelector('.myImg'),
    img01 = document.querySelector('.img01'),
    caption = document.querySelector('.caption');
    
    myImg.addEventListener('click', function(){
        myModul.style.display = 'block'; 
        img01.src = this.src;
        caption.innerHTML = this.alt;
    })

    close.addEventListener('click', function(){
        myModul.style.display = 'none';
    })