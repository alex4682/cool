document.addEventListener('DOMContentLoaded', () => {
    const splide = new Splide('#recommended-products', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        arrows: true,
        pagination: false,
        gap: '50px',
    });

    splide.mount();
});
