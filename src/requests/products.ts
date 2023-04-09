export const single = async (query: string) => {
    console.log('query: ', query);
    const data = {
        id: 'fc273802-d6ae-11ed-afa1-0242ac120002',
        name: 'CSS: Animation Using CSS Transforms',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nunc, blandit viverra luctus quis, cursus et neque. Sed imperdiet vestibulum tempus. Fusce nec malesuada sapien, id tempor mi. Phasellus commodo et nisi et condimentum. Proin quis hendrerit dolor, quis pulvinar lorem.',
        price: 15.32,
        imageUrl: 'https://parshop.by/wp-content/uploads/2023/03/128-2-800x800.jpg',
        images: ['https://parshop.by/wp-content/uploads/2023/03/128-2-800x800.jpg', 'https://parshop.by/wp-content/uploads/2023/03/ASAM9685-1-1000x480.jpg', 'https://parshop.by/wp-content/uploads/2022/10/Kids-666x570.jpg'],
    };

    return data;
};
