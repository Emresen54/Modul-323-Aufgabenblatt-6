// Update.js

function update(msg, model) {
    switch (msg) {
        case 'INCREMENT':
            return { count: model.count + 1 };
        case 'DECREMENT':
            return { count: model.count - 1 };
        default:
            return model;
    }
}

module.exports = update;
