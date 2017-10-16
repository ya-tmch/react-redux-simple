import React, {Component} from 'react';
import {connect} from "react-redux";
import Departament from "./Departament";
import CreateDepartament from "./CreateDepartament";
import Loading from "./Loading";

class Departaments extends Component {
    componentWillMount() {
        this.props.fetchDepartaments()
    }

    render() {
        if (this.props.departaments === null) {
            return <Loading/>
        }

        return (
            <div>
                <CreateDepartament/>
                <hr/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.departaments.map((d, index) =>
                        <Departament key={d.id} departament={d}/>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        departaments: state.departaments.data,
        error: state.departaments.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDepartaments: () => dispatch({type: 'FETCH_DEPARTAMENTS', force: true}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Departaments)
