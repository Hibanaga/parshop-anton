import axios from 'axios';

export const list = async (params?: Record<string, string>): Promise<any> => {
    const { data } = await axios({ url: 'https://api.szamanita-pantherina.com/api/category', method: 'GET', params }).then((data) => {
        return data;
    });

    return {
        elements: data.results,
    };
};
