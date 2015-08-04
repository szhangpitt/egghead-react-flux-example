var appDispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');
var appConstants = require('../constants/appConstants');


var CHANGE_EVENT = 'change';

var _list = [];

(function initList () {
    _list = [
        {item: 'get milk', done: true},
        {item: 'buy stamps', done: false},
        {item: 'pick up kids', done: false}
    ];
})();

function addItem (item) {
    _list.push({
        item: item,
        done: false
    });
}

function setItemDone (listItem, done) {
    listItem.done = done;
}

var dispatcherIndex = appDispatcher.register(function (payload) {
    var action = payload.action;
    switch(action.actionType) {
        case appConstants.ADD_ITEM:
            addItem(action.item);
            break;
        case appConstants.SET_ITEM_DONE:
            setItemDone(action.listItem, action.done);
            break;
        default:
            break;
    }

    appStore.emitChange();

    return true;
});

var appStore = assign(EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    getList: function () {
        return _list;
    },
    dispatcherIndex: dispatcherIndex
});

module.exports = appStore;
