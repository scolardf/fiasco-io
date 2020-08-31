import React from 'react';

class ProjectItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectObject: "",
        }
    }

    componentDidMount() {
        this.setState({projectObject: this.props,})
    }

    render() {
        const projectObject = this.state.projectObject;
        return(
            <div id="projectItemContainer">
                <div id="projectTitleLine">
        <p id="dateTime">{projectObject.dateTime}</p>
                    <p id="titleP">{projectObject.title}</p>
                </div>
                <div id="imageContainer">{projectObject.image}</div>
                <div id="descriptionAndRepo">
                    <p id="descriptionP">{projectObject.description}</p>
                    <p id="repoP">Repo: <a href="#">{projectObject.repoLink}</a></p>
                </div>
            </div>
        );
    }
}

export default ProjectItem;