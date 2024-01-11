const accordionBtns = document.querySelectorAll('.nf-qa-btn');

function closeOpenAccords(item) {
    const accordionList = document.querySelectorAll(".nf-qa-answer[data-is-open]");

    for (const accordionDiv of accordionList) {
        const isOpen = accordionDiv.dataset.isOpen;

        // if accordion is open other then one already open then close it 
        if (isOpen === "true" && accordionDiv !== item) {
            accordionDiv.dataset.isOpen = "false"; 
            
        }
    }
}

accordionBtns.forEach((accordionBtn) => {
    accordionBtn.addEventListener('click', (event) => {
        const answerDiv = event.currentTarget.querySelector('.nf-qa-answer');
        
        closeOpenAccords(answerDiv);
        
        answerDiv.dataset.isOpen = answerDiv.dataset.isOpen === "true" ? "false" : "true";   
    })
});

