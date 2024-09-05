// View.test.js
const view = require('./View');
const { h } = require('virtual-dom');

test('should create the view with the correct count', () => {
    const model = { count: 5 };
    const result = view(model);
    
    const h1Node = result.children.find(node => node.tagName === 'H1');
    expect(h1Node.children[0].text).toBe('Count: 5');
});

test('should create two buttons in the view', () => {
    const model = { count: 0 };
    const result = view(model);
    
    const buttonNodes = result.children.filter(node => node.tagName === 'BUTTON');
    expect(buttonNodes.length).toBe(2);
});

test('should handle undefined model without errors', () => {
    const result = view(undefined);
    expect(result).toBeDefined();
});

test('should create default view structure when count is not provided', () => {
    const model = {};
    const result = view(model);
    
    const h1Node = result.children.find(node => node.tagName === 'H1');
    expect(h1Node.children[0].text).toBe('Count: undefined');
});
