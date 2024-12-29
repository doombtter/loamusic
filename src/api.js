// localhost
// const URL = 'http://localhost:3010/'

//prod
const URL = 'https://api.loavesting.com/'

const searchMusic = async (char, category) => {
    try {
        let body = {'keyword': char, 'category': category}
        const result = await $fetch(URL + 'api/searchMusic', {method: 'POST', body: body});
        return result
        } catch (error) {
        throw error;
    }
};

export default {
    searchMusic,
 };