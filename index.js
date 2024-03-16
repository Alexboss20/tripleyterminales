// VARIABLES
    // Variables btn modal
        const btnTicket = document.querySelector('#btnModal');
        const ticket = document.querySelector('#modalTicket');
        const btnCerrarTicket = document.querySelector('#btnCerrarTicket');
    // variables de caja signos
        const btnModalSignos = document.querySelector('.btnModalSignos');
        const btnCerrarSignos = document.querySelector('.btnCerrarSignos');
        const listaSignos = document.querySelector('.listaSignos');

    
// eventos
    // eventos modal
        btnTicket.addEventListener('click',() => {
            ticket.showModal();
        });
        btnCerrarTicket.addEventListener('click', () =>{
            ticket.close();
        });
    // Evento caja signos
        btnModalSignos.addEventListener('click', () => {
            listaSignos.style.display = 'flex';
        });
        btnCerrarSignos.addEventListener('click', () => {
            listaSignos.style.display = 'none';
        });
    
    
    
    
// funciones
    