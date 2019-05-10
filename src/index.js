// let's go!

import React from 'react';  //déclarer une variable React

import { render } from 'react-dom'; // import render method from react dom

import StorePicker from './components/StorePicker';

//create 1st component (StorePicker) name start with capital letter 
// recuperer react DOM
// syntaxe < .... /> pour appeller un component
render (<StorePicker/>, document.querySelector('#main'));

//put every component in a separate file

//alert('hiba')

/*
function render(){

}
*/