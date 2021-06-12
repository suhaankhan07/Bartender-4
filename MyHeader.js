import React from 'react';
import {Header,Icon} from 'react-native-elements';

export const MyHeader = props => {
 return(
    <Header 
     backgroundColor = 'orange'
     centerComponent = {{text:props.title,style :{color:'#fff',fontWeight:'bold',fontSize:18} }}
    />
 )
}