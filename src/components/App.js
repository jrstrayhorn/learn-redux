import { PropTypes, Component } from 'react'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import SortMenu from './SortMenu'
import '../../stylesheets/APP.scss'
import { sortFunction } from '../lib/array-helpers'

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
        const { colors, sort } = store.geteState()
        const sortedColors = [...colors].sort(sortFunction(sort))
        return (
            <div className="app">
                <SortMenu></SortMenu>
                <AddColorForm></AddColorForm>
                <ColorList store={sortedColors}></ColorList>
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
