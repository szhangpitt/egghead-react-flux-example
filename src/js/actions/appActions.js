var appDispatcher = require('../dispatcher/appDispatcher');
var appConstants = require('../constants/appConstants');

var appActions = {
    addItem: function (item) {
        appDispatcher.handleViewAction({
            actionType: appConstants.ADD_ITEM,
            item: item
        });
    },
    setItemDone: function (listItem, done) {
        appDispatcher.handleViewAction({
            actionType: appConstants.SET_ITEM_DONE,
            listItem: listItem,
            done: done
        });
    }
}

module.exports = appActions;