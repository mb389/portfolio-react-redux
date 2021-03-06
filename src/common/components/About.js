import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';
import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      	  <div className="about">

      	  	<h3>About Me</h3>
            <div className="profile_pic"></div>
            <p>Born in Moldova and raised in Needham, MA, I've been living in NYC since graduating from <a href="http://www.cornell.edu" target="_blank">Cornell University</a> in 2007. After completing a major in Industrial Relations & Economics, I joined <a href="http://www.jpmorgan.com" target="_blank">J.P. Morgan</a> as an Internal Consulting Analyst, 2 years later transitioning into Market Risk. </p>
            <p>After 8 years at J.P. Morgan, I chose to leave to pursue my passion for technology, shortly thereafter enrolling at Fullstack Academy of Code, a 17-week immersive program focusing on JavaScript and the MEAN stack.</p>
            <p>I'm currently a full stack software engineer at <a href="http://staydomio.com" target="_blank">Domio</a>, a tech start-up seeking to reinvent the alternative lodging space.</p>

      	  	<h3>About This Site</h3>

      	  	<p>This site is a single page web app built with React and Redux, and utilizes server-side rendering.</p>

	      </div>

	      <div className="repos">
	      	<h3><a href="https://github.com/mb389?tab=repositories" target="_blank">My Latest GitHub Repos</a></h3>
	        {isFetching && results.length === 0 &&
	          	<Loader />
	        }
	        {!isFetching && error && results.length === 0 &&
	          <h3 className="post-error">There has been an Error</h3>
	        }
	        {!isFetching && !error && results.length === 0 &&
	          <h3>Empty</h3>
	        }
	        {results.length > 0 &&
	          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	            <Repos results={results} />
	          </div>
	        }
	      </div>
      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;
