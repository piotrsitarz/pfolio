import React from 'react';
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';

class ProjectsGallery extends React.Component {
  state = {
    slideIndex: 0
  };

  render() {
    return (
      <Carousel
        slideIndex={this.state.slideIndex}
        width="800px"
        afterSlide={slideIndex => {
          this.setState({ slideIndex });
          console.log('siemanko', slideIndex);
          console.log('propsy',this.props.projects);
        }}
      >
      {
        (
          this.props.projects.map((project) => {
            return <img src={project.imgUrl} alt={project.description}/>;
          })
        )
      }
      </Carousel>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps)(ProjectsGallery);
