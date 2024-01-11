const accordionBtns = document.querySelectorAll('.nf-qa-btn');

function closeOpenAccords(curElement) {
    const accordionList = document.querySelectorAll(".nf-qa-answer[data-is-open=\"true\"");

    for (const accordionDiv of accordionList) {
        const isOpen = accordionDiv.dataset.isOpen;

        // if (event.target.classList) {
            
        // }

        // if accordion is open other then one already open then close it 
        if (isOpen === "true" && accordionDiv !== curElement) {
            accordionDiv.dataset.isOpen = "false"; 
            
        }
    }
}

accordionBtns.forEach((accordionBtn) => {
    accordionBtn.addEventListener('click', (event) => {
        const answerDiv = event.currentTarget.querySelector('.nf-qa-answer');
        
        // console.log(event.target);
        // console.log();
        // Need Fix
        if (event.target.classList[0] === "nf-qa-answer") {
            return
        }

        closeOpenAccords(answerDiv);
        
        

        answerDiv.dataset.isOpen = answerDiv.dataset.isOpen === "true" ? "false" : "true";   
    })
});

