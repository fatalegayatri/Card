document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.main-card').forEach(card => {
        card.addEventListener('click', (event) => {
            if (event.target.closest('select')) return;

            const cardNumber = Array.from(document.querySelectorAll('.main-card')).indexOf(card) + 1;
            selectCard(cardNumber);
        });
    });
});

function selectCard(cardNumber) {
    const cards = document.querySelectorAll('.main-card');
    const radios = document.querySelectorAll('.input');

    cards.forEach((card, index) => {
        const cardLeft = card.querySelector('.card-left');
        const offerContainer = card.querySelector('.offer-container');
        const strike = card.querySelector('.strike');
        const cardRight = card.querySelector('.btwn');
        const gapSection = card.querySelector('.gap');

        if (index + 1 === cardNumber) {
            const isActive = card.classList.contains('acitve-card');

            if (isActive) {
            } else {
                card.classList.add('acitve-card');
                cardLeft.classList.add('none');
                cardRight.classList.remove('py');
                radios[index].checked = true;

                if (offerContainer) offerContainer.classList.remove('none');
                if (strike) strike.classList.remove('none');
                if (gapSection) gapSection.style.display = 'flex';

                cards.forEach((otherCard, otherIndex) => {
                    if (otherIndex !== index) {
                        const otherCardLeft = otherCard.querySelector('.card-left');
                        const otherCardRight = otherCard.querySelector('.btwn');
                        const otherOfferContainer = otherCard.querySelector('.offer-container');
                        const otherStrike = otherCard.querySelector('.strike');
                        const otherGapSection = otherCard.querySelector('.gap');

                        otherCard.classList.remove('acitve-card');
                        otherCardLeft.classList.remove('none');
                        otherCardRight.classList.add('py');
                        radios[otherIndex].checked = false;

                        if (otherOfferContainer) otherOfferContainer.classList.add('none');
                        if (otherStrike) otherStrike.classList.add('none');
                        if (otherGapSection) otherGapSection.style.display = 'none';
                    }
                });
            }
        }
    });
}
