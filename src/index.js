// let's go!

import React from 'react';  //déclarer une variable React
import { render } from 'react-dom'; // import render method from react dom
//routing
import { BrowserRouter, Match, Miss} from 'react-router';
import './css/style.css'
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker} />
                <Match pattern="/store/:storeId" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render (<Root/>, document.querySelector('#main'));

/*
// create 1st component (StorePicker) name start with capital letter 
// recuperer react DOM
// syntaxe < .... /> pour appeller un component
// render (<StorePicker/>, document.querySelector('#main'));
// Routing; create a component for the router
*/
//match can not be directly child of return
// exatly pattern, pattern, components are just props 
// component={variable}, component="string or int or etc"
//render (<App/>, document.querySelector('#main'));
/*
// put every component in a separate file
// alert('hiba')
/*
function render(){

}
*/ 