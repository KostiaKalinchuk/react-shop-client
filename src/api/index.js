import R from 'ramda'
import request from 'superagent'

import {getTotalBasketCount} from "../selectors";


// donne
export const fetchPhones = async () => {
    // const {body} = await request.get(
    //     'http://www.mocky.io/v2/5918b9461200001f1040dbeb'
    // );
    // console.log(body.phones);
    // return body.phones

    const fetch = await request.get(
        'http://shop-api.local/API/phones.php'
    );
    const phones = JSON.parse(fetch.text);

    // console.log(phones);

    return phones
};



// in work
export const loadMorePhones = async ({offset}) => {

    const fetch = await request.get(
        `http://shop-api.local/API/phones.php?limit=10&offset=${offset}`
    );

    const phones = JSON.parse(fetch.text);


    return new Promise(resolve => {
        resolve(phones);
        console.log(offset);
    })
};



// donne

export const fetchPhoneById = async (id) => {

    const fetch = await request.get(
        'http://shop-api.local/API/phones.php'
    );

    const phones = JSON.parse(fetch.text);

    // console.log(phones);

    return new Promise((resolve) => {
        const phone = R.find(R.propEq('id', id), phones);
        resolve(phone)
    })
};

// donne
export const fetchCategories = async () => {

    const fetch = await request.get(
        'http://shop-api.local/API/index.php'
    );

    const categories = JSON.parse(fetch.text);

    // console.log(categories);

    return categories


        // fetch('https://123459kos.000webhostapp.com').then(function(response) {
        //         return response.json().then(function(categories) {
        //             // console.log(categories);
        //             // console.log(categories[0].id);
        //             // console.log(categories[0].name);
        //
        //             return categories
        //
        //         });
        //     });


        };

// const w = [{"id":"1","name":"Apple"},{"id":"2","name":"Samsung"},{"id":"3","name":"Htc"},{"id":"4","name":"Lenovo"},{"id":"5","name":"Mi"}];
//
// alert( w[0].id);
// alert( w[0].name);