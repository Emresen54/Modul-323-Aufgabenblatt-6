// App.js

const { h, patch, diff, createElement } = require('virtual-dom');
const createModel = require('./Model');
const update = require('./Update');
const view = require('./View');

function app(initModel, update, view, node) {
    let model = initModel;
    let currentView = view(model);
    let rootNode = createElement(currentView);
    node.appendChild(rootNode);

    function dispatch(msg) {
        model = update(msg, model);
        const updatedView = view(model);
        const patches = diff(currentView, updatedView);
        rootNode = patch(rootNode, patches);
        currentView = updatedView;
    }

    return dispatch;
}

module.exports = app;
