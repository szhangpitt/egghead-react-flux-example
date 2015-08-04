var React = require('react');
var appStore = require('../stores/appStores');
var appActions = require('../actions/appActions');
var TodoList = require('./todo-list');
var AddItem = require('./add-item');

function getState () {
    return {
        list: appStore.getList()
    }
}


var App = React.createClass({
    getInitialState: function () {
        return getState();
    },
    componentDidMount: function () {
        appStore.addChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState(getState());
    },
    render:function(){
        return (
            <div>
            <h1>My Flux Todo App</h1>
            <AddItem />
            <TodoList list={this.state.list} />
            </div>
            );
    }
});

module.exports = App;
