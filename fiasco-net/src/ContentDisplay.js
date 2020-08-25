import React from 'react';



class ContentDisplay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            internalPages: [
                { id:1, name: 'Home', content: 'Filler - Home' },
                { id:2, name: 'Projects', content: 'Filler - Projects' },
                { id:3, name: 'About', content: 'Filler - About' },
                { id:4, name: 'Contact', content: 'Filler - Contact' },
            ],
            pageToDisplay: Number(0),
        };
    }

    render() {
        return (
            <div className='Content-Div'>
                <p>Text in ContentDisplay</p>
                <p>{this.state.internalPages[this.state.pageToDisplay].content}</p>
            </div>
        )
    };
}

export default ContentDisplay;