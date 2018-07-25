# Create Reducer

Simple and functional way of writing reducers (instead of writing huge switch case).

## Usage

```JS
const COUNTER_INCR = 'counter/increment';
const COUNTER_DECR = 'counter/decrement';

function incrementCounter(state, action) {
	return {
		...state,
		count: state.count+1,
	};
}

function decrementCounter(state, action) { // action: only required when you pass some extra info
	return {
		...state,
		count: state.count-1,
	};
}

const initialState = {
    count: 0,
};

const reducer = reduceFrom(initialState)
	.addSwitch(COUNTER_INCR, incrementCounter)
	.addSwitch(COUNTER_DECR, decrementCounter)
	.getReducer();

export default reducer;
```

## Why

Writing a big reducer function with lot of switch case get complicated really fast and is doesn't help in understanding the code either.

### Why another library for this

Idea is to keep things simple. If you don't to add another lib in your dependency, you can just copy the code which is less that 30 lines.
