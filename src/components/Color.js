import { PropTypes, Component } from 'react'
import StarRating from './StarRating'
import TimeAgo from './TimeAgo'
import FaTrash from 'react-icons/lib/fa/trash-o'
import '../../stylesheets/Color.scss'
import { rateColor, removeColor } from '../actions'

class Color extends Component {
    
    render() {
        const { title, color, rating, timestamp, onRemove, onRate} = this.props
        const { store } = this.context
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <button onClick={() =>
                        store.dispatch(removeColor(id)
                    )}>
                    <FaTrash />
                </button>
                <div className="color" style={{ backgroundColor: color }}>
                </div>
                <TimeAgo timestamp={timestamp} />
                <div>
                    <StarRating starsSelected={rating} onRate={rating => store.dispatch(rateColor(id, rating))}></StarRating>
                </div>
            </section>
        )
    }
}

Color.contextTypes = {
    store: PropTypes.object
}

Color.propTypes = {
    title: PropTypes.string.isReqired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

Color.defaultProps = {
    rating: 0,
    onRemove: f=>f,
    onRate: f=>f
}

export default Color