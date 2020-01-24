import React, { Component} from 'react';
import App from './App';
import Top from './top';
import Foot  from './foot'

class Layout extends Component {
 
    render() { 
        return ( 
            <div>
            <Top/>
            <br/>
            <br/>
            <br/>
            <App/>
            <Foot/>
            </div>

         );
    }
}
 
export default Layout;