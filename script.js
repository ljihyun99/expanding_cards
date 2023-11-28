const panels= document.querySelectorAll('.panel');
panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        panels.forEach((panel)=>{
            if(panel.classList.contains('active')){
                panel.classList.remove('active');
            }
        })
        panel.classList.add('active');


    })
})

const panels2= document.querySelectorAll('.panel2');
panels2.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        panels2.forEach((panel)=>{
            if(panel.classList.contains('active2')){
                panel.classList.remove('active2');
            }
        })
        panel.classList.add('active2');


    })
})