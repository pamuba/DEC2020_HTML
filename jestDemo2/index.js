const axios = require('./axiosConfig');

const getPhotosByAlbumId = async (id) => {
    const result = await axios.request({
        method: 'get',
        url: `/${id}/photos?_limit=3`
    });
    const { data } = result;
    return data;
};

module.exports = getPhotosByAlbumId;