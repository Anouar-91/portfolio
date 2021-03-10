
/* permet de faire le scroll */
window.addEventListener('scroll', ()=>{

    let content = document.querySelector('.scroll1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.4;
    
    if(contentPosition < screenPosition){
        content.classList.add('active')

    }
    else{
        
        content.classList.remove('active');
    }
    
    });
    

window.addEventListener('scroll', ()=>{

    let content2 = document.querySelector('.scroll2');
    let content2Position = content2.getBoundingClientRect().top;
    let screenPosition2 = window.innerHeight / 1.4;

    if(content2Position < screenPosition2){
        content2.classList.add('animate__animated animate__fadeInLeft')
        
        
    }
    else{
        content2.classList.remove('active');
        
    }

});
        
window.addEventListener('scroll', ()=>{
           
    let content3 = document.querySelector('.scroll3');
    let content3Position = content3.getBoundingClientRect().top;
    let screenPosition3 = window.innerHeight / 1.4;
    
    if(content3Position < screenPosition3){
        content3.classList.add('active')
        
        
    }
    else{
        content3.classList.remove('active');
        
    }
    
            });

window.addEventListener('scroll', ()=>{

    let content4 = document.querySelector('.scroll4');
    let content4Position = content4.getBoundingClientRect().top;
    let screenPosition4 = window.innerHeight / 1.4;
    
    if(content4Position < screenPosition4){
        content4.classList.add('active')
        
        
    }
    else{
        content4.classList.remove('active');
        
    }
    
    });
window.addEventListener('scroll', ()=>{

    let content5 = document.querySelector('.scroll5');
    let content5Position = content5.getBoundingClientRect().top;
    let screenPosition5 = window.innerHeight / 1.4;
    
    if(content5Position < screenPosition5){
        content5.classList.add('active')
        
        
    }
    else{
        content5.classList.remove('active');
        
    }
    
    });

