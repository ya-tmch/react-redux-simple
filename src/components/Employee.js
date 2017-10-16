import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import Loading from "./Loading";

class Employee extends Component {
    constructor(props) {
        super(props)
        this.changeForm = this.changeForm.bind(this)
        this.save = this.save.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentWillMount() {
        this.props.fetchDepartaments()
        this.props.fetchEmployee(this.getId())
    }

    getId() {
        return this.props.match.params.id
    }

    changeForm(event) {
        let {value, name} = event.target

        if (event.target.name === 'departamentId') {
            value = Number(value)
        }

        this.props.changeEmployee({[name]: value})
    }

    save() {
        this.props.updateEmployee()
    }

    reset() {
        this.props.fetchEmployee(this.getId())
    }

    render() {
        const
            {employee, departaments} = this.props,
            data = employee.data

        if (!employee.data || !departaments.data) {
            return <Loading/>
        }

        return (
            <form>
                <Link to='/employees' className="btn btn-default">Back</Link>
                <hr/>
                <div className="form-group">
                    <label>First name</label>
                    <input
                        type="text" className="form-control"
                        value={data.firstName} name="firstName" onChange={this.changeForm}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input
                        type="text" className="form-control"
                        value={data.lastName} name="lastName" onChange={this.changeForm}/>
                </div>

                <div className="form-group">
                    <label>Departament</label>
                    <select
                        className="form-control" name="departamentId"
                        value={data.departamentId} onChange={this.changeForm}>

                        {departaments.data.map(d =>
                            <option key={d.id} value={d.id}>{d.name}</option>
                        )}
                    </select>
                </div>

                <div className="btn-group">
                    <button
                        disabled={!employee.needSave} onClick={this.save}
                        type="button" className="btn btn-warning">Save</button>

                    <button
                        disabled={!employee.needSave} onClick={this.reset}
                        type="button" className="btn btn-default">Reset</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        departaments: state.departaments,
        employee: state.employee,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmployee: (id) => dispatch({type: 'FETCH_EMPLOYEE', id}),
        fetchDepartaments: () => dispatch({type: 'FETCH_DEPARTAMENTS'}),
        changeEmployee: (data) => dispatch({type: 'CHANGE_EMPLOYEE', data}),
        updateEmployee: () => dispatch({type: 'UPDATE_EMPLOYEE'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee)
