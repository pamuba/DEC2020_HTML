// describe('sum of 2 numbers', () => {
//     it(' 2 + 2 equal 4', () => {
//         expect(2 + 2).toEqual(4)
//     });
// });

const axios = require('./axiosConfig');
const getPhotosByAlbumId = require('./index');

jest.mock('./axiosConfig', () => {
    return {
        baseURL: 'https://jsonplaceholder.typicode.com/albums',
        request: jest.fn().mockResolvedValue({
            data: [
                {
                    albumId: 3,
                    id: 101,
                    title: 'incidunt alias vel enim',
                    url: 'https://via.placeholder.com/600/e743b',
                    thumbnailUrl: 'https://via.placeholder.com/150/e743b'
                },
                {
                    albumId: 3,
                    id: 102,
                    title: 'eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt',
                    url: 'https://via.placeholder.com/600/a393af',
                    thumbnailUrl: 'https://via.placeholder.com/150/a393af'
                },
                {
                    albumId: 3,
                    id: 103,
                    title: 'et eius nisi in ut reprehenderit labore eum',
                    url: 'https://via.placeholder.com/600/35cedf',
                    thumbnailUrl: 'https://via.placeholder.com/150/35cedf'
                }
            ]
        }),
    }
});

describe('test getPhotosByAlbumId', () => {
    afterEach(() => jest.resetAllMocks());

    it('fetches photos by album id', async () => {
        const photos = await getPhotosByAlbumId(3);
        expect(axios.request).toHaveBeenCalled();
        expect(axios.request).toHaveBeenCalledWith({ method: 'get', url: '/3/photos?_limit=3' });
        expect(photos.length).toEqual(3);
        expect(photos[0].albumId).toEqual(3)
    });
});