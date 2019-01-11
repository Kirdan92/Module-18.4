var Counter = React.createClass({
	getInitialState: function() {
		console.log('getInitialState: Initial state sets default value for props')
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		})
	},
	//--------Initialization ----------

	getDefaultProps: function() {
		console.log('getDefaultProps: Returns object which represents set of default props for this component');
	},

	componentWillMount: function() {
    	console.log('componentWillMount: Legacy method to be avoided.');
  	},

  	componentDidMount: function() {
    	console.log('componentDidMount: Element has been mounted to DOM tree.');
  	},

  	//--------Update ----------

  	componentWillReceiveProps: function(nextProps) {
    	console.log('componentWillReceiveProps: Compares nextProps.someValue with this.props.SomeValue and do some actions if they are different');
  	},

  	shouldComponentUpdate: function(nextProps, nextState) {
    	console.log('shouldComponentUpdate: Checks if component has to be drawed in DOM tree again. Useful for optimalization');
    	return true;
  	},

  	componentWillUpdate: function(nextProps, nextState) {
    	console.log('componentWillUpdate: is called when redraw of component is required. Similar to componentWillMount');
  	},

  	componentDidUpdate: function(prevProps, prevState) {
    	console.log('componentDidUpdate: Useful when action is required after the DOM is updated. When something has to be executed last.');
  	},

  	//--------Delete ----------
  	componentWillUnmount: function() {
    	console.log('componentWillUnmount: Component removal, clearing.');
  	},
	render: function() {
		return React.createElement('div', {className: 'counterContainer'},
			React.createElement('button', {className: 'addbutton', onClick: this.increment}, 'Dodaj'),
			React.createElement('button', {className: 'subbutton', onClick: this.decrement}, 'Odejmij'),
			React.createElement('span', {}, 'Licznik ' + this.state.counter)
		);
	}
});


var element = React.createElement('div', {className: 'countersContainer'},
		React.createElement(Counter),
		React.createElement(Counter),
		React.createElement(Counter),
		React.createElement(Counter),
		React.createElement(Counter)
	);

ReactDOM.render(element, document.getElementById('app'));