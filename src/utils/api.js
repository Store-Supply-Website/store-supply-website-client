import React from 'react'
// const BASE_URL = 'http://127.0.0.1:5000'
const BASE_URL = 'https://cs5610project.herokuapp.com'
// Login.js
export const LOGIN_URL = BASE_URL + '/'

// Home.js
export const Home_URL = BASE_URL + '/home'
// Profile.js
export const Profile_URL = BASE_URL + '/profile'
// Register.js
export const Register_URL = BASE_URL + '/register'
//test get request
export const TEST_URL = BASE_URL

//update
export const UPDATE_URL = BASE_URL + '/catalog' + '/supplier/update'
//commodity
export const Home_COMMODITY_URL = BASE_URL + '/catalog' + '/homepage'
export const Home_MYCOMMODITY_URL = BASE_URL + '/catalog' + '/homepagelist'
export const DElETE_COMMODITY_URL = BASE_URL + '/catalog' + '/commodity' + '/delete'
export const UPDATE_COMMODITY_URL = BASE_URL + '/catalog' + '/commodity' + '/update'
export const CREATE_COMMODITY_URL = BASE_URL + '/catalog' + '/commodity' + '/create'
export const SEARCH_COMMODITY_URL = BASE_URL + '/catalog' + '/commodity'
export const Get_Detail_URL = BASE_URL + '/catalog' + '/commodity/:id'