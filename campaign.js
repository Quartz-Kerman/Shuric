document.addEventListener('DOMContentLoaded', function () {
    const translateButton = document.getElementById('translate-button');
    const donationPopup = document.getElementById('donation-popup');
    const closePopup = document.getElementById('close-popup');
    const donateButton = document.getElementById('donate-button');
    let isAurebesh = false;

    // Toggle translation
    translateButton.addEventListener('click', function () {
        const elementsToTranslate = document.querySelectorAll('body *:not(.translate-button)');
        elementsToTranslate.forEach(element => {
            if (isAurebesh) {
                element.style.fontFamily = 'Arial, sans-serif';
            } else {
                element.style.fontFamily = 'Aurebesh, Arial, sans-serif';
            }
        });

        if (isAurebesh) {
            translateButton.textContent = 'Translate to Aurebesh';
            translateButton.style.fontFamily = 'Aurebesh, Arial, sans-serif';
        } else {
            translateButton.textContent = 'Translate to English';
            translateButton.style.fontFamily = 'Arial, sans-serif';
        }
        
        isAurebesh = !isAurebesh;
    });

    // Show donation popup on page load
    donationPopup.style.display = 'flex';

    // Close donation popup
    closePopup.addEventListener('click', function () {
        donationPopup.style.display = 'none';
    });

    // Close donation popup on donate button click
    donateButton.addEventListener('click', function () {
        donationPopup.style.display = 'none';
    });
});
