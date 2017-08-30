import { PropTypes, Component } from 'react'
import '../../stylesheets/APP.scss'
import { Menu, NewColor, Colors } from './containers'

class App extends Component {

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    componentWillMount() {
        this.unsubscribe = store.subscribe(
            () => this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div className="app">
                <Menu />
                <NewColor />
                <Colors />
            </div>
        )
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
}

App.childContextTypes = {
    store: PropTypes.object.isRequired
}
    
export default App
