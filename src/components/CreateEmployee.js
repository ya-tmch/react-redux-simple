import React, {Component} from 'react';
import {connect} from "react-redux";
import Loading from "./Loading";

class CreateEmployee extends Component {
    constructor(props) {
        super(props)
        this.save = this.save.bind(this)
        this.changeForm = this.changeForm.bind(this)

        this.state = {
            firstName: '', lastName: '', departamentId: '',
        }
    }

    componentWillMount() {
        this.props.fetchDepartaments()
    }

    changeForm(event) {
        let {value, name} = event.target

        if (name === 'departamentId') {
            value = Number(value)
        }

        this.setState({...this.state, ...{[name]: value}})
    }

    save() {
        const employee = {...this.state}

        if (!employee.departamentId) {
            employee.departamentId = this.props.departaments.data[0].id
        }

        this.props.createEmployee(employee)
        this.setState({firstName: '', lastName: '', departamentId: ''})
    }

    render() {
        const
            {departaments} = this.props

        if (!departaments.data) {
            return <Loading/>
        }

        if (!departaments.data.length) {
            return <b>First, create a department!</b>
        }

        return (
            <form>
                <div className="form-group">
                    <label>First name</label>
                    <input
                        type="text" className="form-control"
                        value={this.state.firstName} name="firstName" onChange={this.changeForm}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input
                        type="text" className="form-control"
                        value={this.state.lastName} name="lastName" onChange={this.changeForm}/>
                </div>

                <div className="form-group">
                    <label>Departament</label>
                    <select
                        className="form-control" name="departamentId"
                        value={this.state.departamentId} onChange={this.changeForm}>
                        {departaments.data.map((d, index) =>
                            <option key={d.id} value={d.id}>{d.name}</option>
                        )}
                    </select>
                </div>

                <button
                    onClick={this.save} disabled={!this.state.firstName || !this.state.lastName}
                    type="button" className="btn btn-warning">Save</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        departaments: state.departaments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDepartaments: () => dispatch({type: 'FETCH_DEPARTAMENTS'}),
        createEmployee: (employee) => dispatch({type: 'CREATE_EMPLOYEE', employee}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee)
