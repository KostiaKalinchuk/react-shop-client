import R from 'ramda'
import request from 'superagent'

// import {getTotalBasketCount} from "../selectors";

export const fetchPhones = async () => {

    const fetch = await request.get(
        'http://shop-api.local/API/phones.php'
    );
    const phones = JSON.parse(fetch.text);
    return phones
};

export const loadMorePhones = async ({offset}) => {

    const fetch = await request.get(
        `http://shop-api.local/API/phones.php?offset=${offset}`
    );

    const phones = JSON.parse(fetch.text);
    return new Promise(resolve => {
        resolve(phones);
    })
};

export const fetchPhoneById = async (id) => {

    const fetch = await request.get(
        'http://shop-api.local/API/phones.php?limit=100'
    );

    const phones = JSON.parse(fetch.text);

    return new Promise((resolve) => {
        const phone = R.find(R.propEq('id', id), phones);
        resolve(phone)
    })
};

export const fetchCategories = async () => {

    const fetch = await request.get(
        'http://shop-api.local/API/categories.php'
    );

    const categories = JSON.parse(fetch.text);

    return categories

};
