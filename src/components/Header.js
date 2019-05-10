import React from 'react';

class Header extends React.Component{
    render(){
        console.log(this);
        return (
             /*<p>Header</p>*/
            <header className="top">
            <h1>
                Catch
                <span className="ofThe">
                    <span className="of"> of </span>
                    <span className="the"> the </span>
                </span>  
                Day
            </h1>
            {/*<h3 className="tagline"> Fill Me In </h3>*/}
            {/*this refers to the components, props is the object */}
            <h3 className="menu"><span>{this.props.XXXX}</span> </h3> 

            </header>
        )
    }
}

export default Header; 