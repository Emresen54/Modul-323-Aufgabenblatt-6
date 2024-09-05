const update = require('./Update');
test('should increment the count', () => {
    const model = { count: 0 };
    const result = update('INCREMENT', model);
    expect(result.count).toBe(1);
});

test('should decrement the count', () => {
    const model = { count: 1 };
    const result = update('DECREMENT', model);
    expect(result.count).toBe(0);
});

test('should return the same model for unknown messages', () => {
    const model = { count: 5 };
    const result = update('UNKNOWN_MSG', model);
    expect(result).toEqual(model);
});

test('should handle a null model without errors', () => {
    const result = update('INCREMENT', null);
    expect(result).toEqual(null);
});
