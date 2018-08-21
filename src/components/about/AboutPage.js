import React from 'react';
import {Link} from 'react-router';


class AboutPage extends React.Component {
    render() {
       return(
        <div className="jumbotron">
        <h1>About</h1>
        <p>This is a portal to manage your courses</p>
        <Link to="courses" className="btn btn-primary btn-lg">Manage Courses</Link>
        </div>    

       );
    }
}

export default AboutPage;