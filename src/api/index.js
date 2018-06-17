import R from 'ramda'
import request from 'superagent'

// import phones from './mockPhones'
import {getTotalBasketCount} from "../selectors";
// import categories from './mockCategories'

// donne
export const fetchPhones = async () => {
    // const {body} = await request.get(
    //     'http://www.mocky.io/v2/5918b9461200001f1040dbeb'
    // );
    // console.log(body.phones);
    // return body.phones


    const fetch = await request.get(
        'http://shop-api.local/phones.php'
    );

    const phones = JSON.parse(fetch.text);

    // console.log(phones);

    return phones
};

// пагінація
// export const loadMorePhones = async ({offset}) => {
//     return new Promise(resolve => {
//         resolve(phones)
//     })
// };


// donne

export const fetchPhoneById = async (id) => {

    const fetch = await request.get(
        'http://shop-api.local/phones.php'
    );

    const phones = JSON.parse(fetch.text);

    console.log(phones);

    return new Promise((resolve) => {
        const phone = R.find(R.propEq('id', id), phones);
        resolve(phone)
    })
};

// donne
export const fetchCategories = async () => {

    const fetch = await request.get(
        'http://shop-api.local/'
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