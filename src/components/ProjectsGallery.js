import React from 'react';
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class ProjectsGallery extends React.Component {
  state = {
    slideIndex: 0
  };
  render() {
    return (
      <div>
        <div className='projects__buttons'>
          <a href={this.props.projects[this.state.slideIndex].githubUrl} target='_blank'>
            <Button variant='contained'>
                Github
            </Button>
          </a>
          <a href={this.props.projects[this.state.slideIndex].onlineUrl} target='_blank'>
            <Button variant='contained'>
                Online
            </Button>
          </a>
        </div>
        <Carousel
          slideIndex={this.state.slideIndex}
          width='800px'
          afterSlide={slideIndex => {
            this.setState({ slideIndex });
          }}
        >
        {
          (
            this.props.projects.map((project, index) => {
              return <img key={index} src={project.imgUrl} alt={project.description}/>;
            })
          )
        }
        </Carousel>
        <div className='projects__description'>
          <p className='description__title'>{this.props.projects[this.state.slideIndex].title}</p>
          <p className='description__technologies'>{this.props.projects[this.state.slideIndex].technologies}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps)(ProjectsGallery);
