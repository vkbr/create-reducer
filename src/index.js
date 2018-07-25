

const reduceFrom = (initialState, reducers = {}) => ({
	addSwitch(actionType, reducer) {
		if (typeof reducer !== 'function') {
			throw new Error(`Expected 2nd arg to be a reducer function. Instead got ${typeof reducer}`);
		}
		return reduceFrom(initialState, {
			...reducers,
			[actionType]: reducer,
		});
	},
	getReducer() {
		return (state, action) => {
			let workingState = state;
			if (workingState === undefined) {
				workingState = initialState;
			}
			const reducer = reducers[action.type];

			if (typeof reducer === 'function') return reducer(workingState, action);

			return workingState;
		};
	},
});

export default reduceFrom;
