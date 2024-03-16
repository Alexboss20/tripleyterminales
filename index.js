// VARIABLES
    // Variables btn modal
        const btnTicket = document.querySelector('#btnModal');
        const ticket = document.querySelector('#modalTicket');
        const btnCerrarTicket = document.querySelector('#btnCerrarTicket');
    // variables de caja signos
        const btnSignosChance = document.querySelector('.btnSignosChance');
        const btnSignosZulia = document.querySelector('.btnSignosZulia');
        const btnCerrarChance = document.querySelector('.btnCerrarChance');
        const btnCerrarZulia = document.querySelector('.btnCerrarZulia');
        const listaSignosChance = document.querySelector('.listaSignosChance');
        const listaSignosZulia = document.querySelector('.listaSignosZulia');

    
// eventos
    // eventos modal
        btnTicket.addEventListener('click',() => {
            ticket.showModal();
        });
        btnCerrarTicket.addEventListener('click', () =>{
            ticket.close();
        });
    // Evento caja signos
    btnSignosChance.addEventListener('click', () => {
        // Alternar la visualización de listaSignosChance
        listaSignosChance.style.display = listaSignosChance.style.display === 'flex' ? 'none' : 'flex';
        });
        btnCerrarChance.addEventListener('click', () => {
            // Ocultar la lista de signos Chance
            listaSignosChance.style.display = 'none';
        });
    btnSignosZulia.addEventListener('click', () => {
        // Alternar la visualización de listaSignosZulia
        listaSignosZulia.style.display = listaSignosZulia.style.display === 'flex' ?  'none' :'flex';
        });
        btnCerrarZulia.addEventListener('click', () => {
            // Ocultar la lista de signos Chance
            listaSignosZulia.style.display = 'none';
        });
    
    
    
    
// funciones
    