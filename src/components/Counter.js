import {connect} from 'react-redux';
import { incrementCounter, decrementCounter } from '../store/actions';

const Counter = ({count, incrementCounter, decrementCounter}) => {
    return (
        <div>
            <p>{count}</p>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.counter.count
})

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);