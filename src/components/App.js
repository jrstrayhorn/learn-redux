
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import SortMenu from './SortMenu'
import '../../stylesheets/APP.scss'

const App = ({ store }) =>
    <div className="app">
        <SortMenu store={store}></SortMenu>
        <AddColorForm store={store}></AddColorForm>
        <ColorList store={store}></ColorList>
    </div>

export default App
