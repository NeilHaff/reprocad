import React from 'react';


class Scroll extends React.Component {

    HandleScroll(event) {
        // Save the element we're wanting to scroll
        var el = document.querySelector("#target");
        var pageY = window.scrollY
        //  If  we've scrolled past the height of the element, add a class
        if (el.getBoundingClientRect().bottom <= 0) {
            console.log(el.getBoundingClientRect().bottom + " bottom");
            this.setState({
                headerIsActive: true
            });
            //  If we've scrolled back up to  the top of the container, remove the class
        } else if (pageY == 0) {
            console.log("at top");
            this.setState({
                headerIsActive: false
            });
        }
    },

    render(){
        return(
            <div className='HeaderBox'>
                <p>Header</p>
            </div>
        );
    }
}

export default Scroll;