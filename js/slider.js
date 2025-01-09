document.addEventListener('DOMContentLoaded', () => {
    const splide = new Splide('#recommended-products', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        arrows: true,
        pagination: false,
        gap: '50px',
        rewind: false,
        breakpoints: {
            480: {
                perPage: 1,
                gap: '20px',
            },
            768: {
                perPage: 2,
                gap: '20px',
            },
            1400: {
                perPage: 3,
                gap: '20px',
            },
        },
    });

    splide.mount();
});
