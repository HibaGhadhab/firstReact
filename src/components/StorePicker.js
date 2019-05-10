import React from 'react';  //déclarer une variable React

class  StorePicker  extends React.Component {
    render(){
        //return <p> Hello </p> //using JS6 to write html inside JS 
        //return React.createElement('p', {className:'Testing'}, 'I love you'); // how wants to code like this ?! 
        return (
             //write all the html that we need 
            <div>
            <form className="store-selecctor">
            {/*this is a comment with wierd notation :/ works only inside the only returned tag*/}
            <h2>Please enter a store</h2>
            <input type="text" required placeholder="Store Name"/>
            <button type="submit"> Visit Store </button>
            </form>
            </div>
        )
    }
}

export default StorePicker;