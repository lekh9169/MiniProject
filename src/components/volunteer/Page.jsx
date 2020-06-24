import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_VOLUNTEERS } from '../../actions/types';

 class Page extends Component {

    componentDidMount(){
        this.props.getVolunteers();
    }

    handleClick = () => {
        console.log(this.props.volunteers);
    }
    render() {
        return ( <>
             
        <section class="container">
            <h1 class="display-4 m-3">Volunteer Details</h1>
            <div class="line"></div>

        
            <div class="row bg-light basic mx-5 p-2">
                <div class="col-12 py-3">
                    <i class="far fa-2x fa-file-alt"></i>
                    <h4 class="d-inline ml-2 font-weight-bold">Basic Information</h4>
                </div>
                <div class="col-md-4 p-1">
                    <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    class="img img-fluid border border-dark"
                    alt=""
                    srcset=""
                    />
                </div>
                
                <div className="col">


                {this.props.volunteers.map(v=>(
                    <ul className="list-group list-group-flush mb-5">
                    <li className="list-group-item">
                        Name of the Volunteer: {v.name}
                    </li>
                    <li className="list-group-item">
                        Job of the Volunteer:
                    </li>
                    <li className="list-group-item">
                        Name of the Volunteer:
                    </li>
                    <li className="list-group-item">
                        Their special areas of advise :
                    </li>
                    
                    </ul>
                     ))}
                </div>
                <button className="btn btn-primary" onClick={this.handleClick}>Click</button>
                
            </div>
            </section>
            
        
        </>
             
        )
    }
}

Page.propTypes = {
    volunteers: PropTypes.array.isRequired,
    getVolunteers: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    volunteers : state.volunteer.volunteers
})

const mapDispatchToProps = (dispatch) => ({
    getVolunteers: () => dispatch({type:GET_VOLUNTEERS})
})

export default connect(mapStateToProps,mapDispatchToProps)(Page);
