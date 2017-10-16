import React, {Component} from 'react';
import {connect} from "react-redux";

class CreateDepartament extends Component {
    constructor(props) {
        super(props)

        this.changeHandler = this.changeHandler.bind(this)
        this.create = this.create.bind(this)
        this.state = {name: ''}
    }

    changeHandler(event) {
        this.setState({name: event.target.value})
    }

    create() {
        this.props.create({...this.state})
        this.setState({name: ''})
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input className="form-control" type="text"
                           value={this.state.name} onChange={this.changeHandler}/>
                </div>

                <button className="btn btn-primary"
                        disabled={!this.state.name} onClick={this.create}>Create</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (departament) => dispatch({type: 'CREATE_DEPARTAMENT', departament})
    }
}

export default connect(null, mapDispatchToProps)(CreateDepartament)
