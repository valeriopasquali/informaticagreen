// Selezioniamo tutte le voci dell'accordion
const accordionTitles = document.querySelectorAll('.accordion-title');

// Aggiungiamo l'evento di click per ogni titolo
accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
        // Selezioniamo il contenuto dell'accordion associato al titolo
        const content = title.nextElementSibling;

        // Controlliamo se il contenuto è già visibile
        if (content.style.maxHeight) {
            // Se è visibile, lo nascondiamo
            content.style.maxHeight = null;
        } else {
            // Se non è visibile, lo mostriamo con l'animazione
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
