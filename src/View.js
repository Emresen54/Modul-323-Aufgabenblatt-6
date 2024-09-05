// View.js

const { h } = require('virtual-dom');

function view(model) {
    return h('div', [
        h('h1', `Count: ${model.count}`),
        h('button', { onclick: () => dispatch('INCREMENT') }, 'Increment'),
        h('button', { onclick: () => dispatch('DECREMENT') }, 'Decrement')
    ]);
}

module.exports = view;
