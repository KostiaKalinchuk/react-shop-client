import R from 'ramda'
import request from 'superagent'

import phones from './mockPhones'
import {getTotalBasketCount} from "../selectors";
// import categories from './mockCategories'

export const fetchPhones = async () => {
    const {body} = await request.get(
        'http://www.mocky.io/v2/5918b9461200001f1040dbeb'
    );
    // console.log(body.phones);
    return body.phones
};

export const loadMorePhones = async ({offset}) => {
    return new Promise(resolve => {
        resolve(phones)
    })
};

export const fetchPhoneById = async (id) => {
    return new Promise((resolve, reject) => {
        const phone = R.find(R.propEq('id', id), phones);
        resolve(phone)
    })
};

export const fetchCategories = async () => {
    // return new Promise((resolve, reject) => {
    //   resolve(categories)
    // })

    // const {body} = await request.get(
    //     'http://www.mocky.io/v2/5b219e4430000091265c7541'
    // );
    // // console.log(body.categories);
    // return body.categories

    const fetch = await request.get(
        'http://shop-api.local/'
    );

    const categories = JSON.parse(fetch.text);
    // console.log(event);
    // console.log(g.text);
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