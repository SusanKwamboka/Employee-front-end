import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class EmployeeViewComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id
           
        }
        this.allEmployees = this.allEmployees.bind(this);

    }
 
      componentDidMount(){
     EmployeeService.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({firstName: employee.firstName, 
            lastName: employee.lastName, 
            emailId: employee.emailId
        });
    });
}

    allEmployees() {
        this.props.history.push('/employees');
    }

    

    render() {
        return (
            <div className="card col-md-6 offset-md-3 offset-md-3" style={{marginTop: "20px"}}>
                <h2 className="text-center"><b>Employee Details</b></h2>
                <div className= "card-body">
                    <div className = "row">
                        <table className="table table-striped table-bordered">
                            <tr>
                             <th>First Name</th>
                             <td>{this.state.firstName }</td>
                            </tr>

                            <tr>
                              <th>Last Name</th> 
                              <td>{this.state.lastName }</td>
                             </tr>
                            <tr>
                              <th>Email Address</th>
                              <td>{this.state.emailId}</td>
                            </tr>
                           
                        </table>
                        <button onClick={() => this.allEmployees()} className ="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>    
        );    
    }
    
}

export default EmployeeViewComponent;