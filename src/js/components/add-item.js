var React = require('react');
var appActions = require('../actions/appActions');

var AddItem = React.createClass({
    getInitialState: function () {
        return {
            newItem: ''
        }
    },
    onItemChange: function (e) {
        var newItem = e.target.value;
        this.setState({
            newItem: newItem
        });
    },
    addItem: function (e) {
        if (!this.state.newItem) {
            return e.preventDefault();
        }

        appActions.addItem(this.state.newItem);
        this.setState({
            newItem: ''
        }, function () {
            React.findDOMNode(this.refs.newItemInput).focus();
        });
    },
    onEnter: function (e) {
        if (e.which !== 13) {
            return;
        }

        this.addItem(e);

    },
    render: function () {
        return (
            <div className="form-group row">
                <div className="col-xs-9">
                <input type="text" ref="newItemInput" className="form-control" value={this.state.newItem} onChange={this.onItemChange} onKeyPress={this.onEnter}/>
                </div>
                <div className="col-xs-3">
                <button className="btn btn-default btn-block" onClick={this.addItem} disabled={!this.state.newItem}>Add</button>
                </div>
            </div>
        );
    }
});

module.exports = AddItem;