const bottomTop = document.getElementById('topo');

function handleScroll(){
    if (window.scrollY > 400){
        bottomTop.classList.add('show');
    }else{
        bottomTop.classList.remove('show');
    }
}

window.addEventListener('scroll', handleScroll);


bottomTop.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const heart = document.querySelectorAll('.heart');

heart.forEach(function(heartIcon){
    heartIcon.addEventListener('click',function(){
        heartIcon.classList.toggle('far');
        heartIcon.classList.toggle('fas');
    });
});

document.getElementById('btnEntrar').addEventListener('click', function() {
    fetch('pages/modal.html')
        .then(response => response.text())
        .then(data => {

            document.getElementById('modalContainer').innerHTML = data;

            
            document.body.classList.add('modal-open');
            document.body.classList.add('modal-blur');

            
            const modal = document.getElementById('loginModal');
            modal.style.display = 'flex';

            
            const closeModal = document.querySelector('.header-login .close');
            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
                
                document.body.classList.remove('modal-open');
                document.body.classList.remove('modal-blur');
            });
        })
        .catch(error => console.error('Erro ao carregar o modal:', error));
});