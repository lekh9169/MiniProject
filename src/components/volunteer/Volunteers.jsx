import React, { Component } from 'react';
import Volunteer from './Volunteer';
import Page from './Page';


// Ainesh's work for version 2
// once the user clicks connect, he should be relocated to the calendar to fix a date. the date shoudld be updated with the volunteer and the user.
// The user should be able to text the volunteer at that time.
// Implement Login functionality also.

 class Volunteers extends Component {
   
    render() {
        return (
            <div>
                <Volunteer />
            </div>
        )
    }
}

export default Volunteers;
