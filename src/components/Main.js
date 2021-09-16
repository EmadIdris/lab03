import React from "react";
import HornedBeasts from './HornedBeasts';
import data from './myData/data.json';
import SelectedBeast from './SelectedBeast';

class Main extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            sTitle : '',
            sImage :'',
            sDesc : '',
            showModel : false
        };
    }
    show = (title , imgage , description) => {
        this.setState ({
            sTitle : title , 
            sImage : imgage ,
            sDesc : description,
            showModel : true
        });
    };
    close = () => {this.setState ({showModel : false});};

    render(){
        let myData = data.map(element => {
        return(
                    <>
                        <HornedBeasts 
                        imageSrc ={element.image_url}
                        title ={element.title}
                        desc ={element.description}
                        show={this.show.bind(this)}
                         />
                        <SelectedBeast 
                        show = {this.state.showModel}
                        close = {this.close}
                        sTitle = {this.state.sTitle}
                        sImage = {this.state.sImage}
                        sDesc = {this.state.sDesc} />
                    </>
                );
            });
             return myData; 
    }
}
export default Main;
