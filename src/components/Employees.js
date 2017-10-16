import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom'

class Employees extends Component {
    constructor(props) {
        super(props)
        this.remove = this.remove.bind(this)
    }

    componentWillMount() {
        this.props.fetchEmployees()
        this.props.fetchDepartaments()
    }

    getDepartamentName(id) {
        const departament = this.props.departaments.data.find(d => d.id === id)

        if (departament) {
            return departament.name
        }

        return <b>departament does not exist</b>
    }

    remove(employee) {
        this.props.removeEmployee(employee.id)
    }

    render() {
        const
            {employees, departaments} = this.props

        if (!employees.data || !departaments.data) {
            return (
                <div>Loading</div>
            )
        }

        return (
            <div>
                <Link to='/employees/create' className="btn btn-default">Create</Link>

                <hr/>

                <table className="table">
                    <thead>
                    <tr>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>departament</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.data.map((e, index) =>
                        <tr key={e.id}>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{this.getDepartamentName(e.departamentId)}</td>
                            <td>
                                <div className="btn-group">
                                    <Link to={'/employees/' + e.id} className="btn btn-default">Edit</Link>
                                    <button onClick={event => this.remove(e)} className="btn btn-danger">Remove</button>
                                </div>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        departaments: state.departaments,
        employees: state.employees
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDepartaments: () => dispatch({type: 'FETCH_DEPARTAMENTS'}),
        fetchEmployees: () => dispatch({type: 'FETCH_EMPLOYEES'}),
        removeEmployee: (id) => dispatch({type: 'REMOVE_EMPLOYEE', id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
