import React,{Component} from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';
import PropTypes from 'prop-types';

class ControlPrespuesto extends Component {
    render() {
        return(
            <React.Fragment>
                <Presupuesto
                    presupuesto={this.props.presupuesto}
                />
                <Restante
                    presupuesto={this.props.presupuesto}
                    restante={this.props.restante}
                />
            </React.Fragment>
        )
    }
}

ControlPrespuesto.propTypes= {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}
export default ControlPrespuesto;