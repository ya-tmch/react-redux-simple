import React, {Component} from 'react';
import {connect} from "react-redux";

class Departament extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newName: null
        }

        this.edit = this.edit.bind(this)
        this.save = this.save.bind(this)
        this.remove = this.remove.bind(this)
        this.reset = this.reset.bind(this)
        this.changeName = this.changeName.bind(this)
    }

    edit() {
        this.setState({newName: this.props.departament.name}, () => {
            this.input.focus()
        })
    }

    save() {
        this.props.updateDepartament({id: this.props.departament.id, name: this.state.newName})
        this.reset()
    }

    remove() {
        this.props.remove(this.props.departament.id)
    }

    reset() {
        this.setState({newName: null})
    }

    changeName(event) {
        this.setState({newName: event.target.value})
    }

    render() {
        const
            {departament} = this.props,
            {newName} = this.state

        if (newName !== null) {
            return (
                <tr>
                    <td>
                        <input
                            ref={el => this.input = el} className="form-control"
                            type="text" value={newName} onChange={this.changeName}/>
                    </td>
                    <td>
                        <div className="btn-group">
                            <button onClick={this.save} className="btn btn-success">Save</button>
                            <button onClick={this.reset} className="btn btn-warning">Reset</button>
                            <button onClick={this.remove} className="btn btn-danger">Remove</button>
                        </div>
                    </td>
                </tr>
            )
        }

        return (
            <tr>
                <td>{departament.name}</td>
                <td>
                    <div className="btn-group">
                        <button onClick={this.edit} className="btn btn-warning">Edit</button>
                        <button onClick={this.remove} className="btn btn-danger">Remove</button>
                    </div>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDepartament: (departament) => dispatch({type: 'UPDATE_DEPARTAMENT', departament}),
        remove: (id) => dispatch({type: 'REMOVE_DEPARTAMENT', id}),
    }
}

export default connect(null, mapDispatchToProps)(Departament)
