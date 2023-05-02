export const single = async (query: string) => {
    const response = {
        elements: Array.from(Array(100).keys()).map((id) => ({
            id: id.toString(),
            name: 'Костюм женский JUST BEAUTIFUL',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
            price: 13 * id + 1,
            imageUrl: 'https://parshop.by/wp-content/uploads/2023/03/28-600x600.jpg',
            hoverImageUrl: 'https://parshop.by/wp-content/uploads/2023/02/IMG_1740-600x600.jpg',
        })),
    };

    const element = response.elements.filter((element) => element.id === query);

    return element ? element[0] : {};
};
