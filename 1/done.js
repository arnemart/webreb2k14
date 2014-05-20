var React = require('react');

var myFirstComponent = React.createClass({
    getInitialState: function() {
        return {
            clicks: 0,
            seconds: 0
        };
    },
    handleClick: function() {
        this.setState({
            clicks: this.state.clicks + 1
        });
    },
    componentDidMount: function() {
        this.secondsInterval = setInterval(function() {
            this.setState({
                seconds: this.state.seconds + 1
            });
        }.bind(this), 1000);
    },
    componentWillUnmount: function() {
        clearInterval(this.secondsInterval);
    },
    render: function() {
        return React.DOM.div(
            null,
            React.DOM.button(
                {
                    onClick: this.handleClick
                },
                'I have been clicked ', this.state.clicks, ' times!'
            ),
            React.DOM.div(null, this.state.seconds, ' seconds have passed')
        );
    }
});

React.renderComponent(myFirstComponent(), document.getElementById('main'));
