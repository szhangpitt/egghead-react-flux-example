var React = require('react');
var appActions = require('../actions/appActions');

var TodoList = React.createClass({
    onDoneChange: function (listItem, e) {
        var done = e.target.checked;
        console.log('done', done);
        console.log('listItem', listItem);
        appActions.setItemDone(listItem, done);
    },
    render: function () {
        var that = this;
        var listItems = this.props.list.map(function (listItem, index) {
            var doneLabel = listItem.done ? ' - done!': '';
            return (
                <li key={index} className="list-group-item">
                    <div className="checkbox">
                    <label>
                    <input type="checkbox" defaultChecked={listItem.done} onChange={that.onDoneChange.bind(that, listItem)} />&nbsp;&nbsp;
                    {listItem.item}</label>
                    <label>{doneLabel}</label>
                    </div>
                </li>
            );
        })
        return <ul className="list-group">{listItems}</ul>;
    }
});

module.exports = TodoList;