describe('isWhiteSpace (defaultTesting.exports.simpleDOM.parse.microhelpers)', function () {
    var simpleDOMNodes = require('simple-dom-parser');
    var parseExports = require('default-testing').exports.simpleDOM.parse;
    var isWhiteSpace = parseExports.microehelpers.isWhiteSpace;

    it('was exported', function () {
        expect(isWhiteSpace).toBeDefined();
    });

    it('letters is incorrect', function () {
        expect(isWhiteSpace('A')).toBeFalsy();
        expect(isWhiteSpace('Z')).toBeFalsy();
        expect(isWhiteSpace('a')).toBeFalsy();
        expect(isWhiteSpace('z')).toBeFalsy();
        expect(isWhiteSpace('F')).toBeFalsy();
        expect(isWhiteSpace('f')).toBeFalsy();
    });

    it('symbols is incorrect', function () {
        expect(isWhiteSpace(',')).toBeFalsy();
        expect(isWhiteSpace('>')).toBeFalsy();
        expect(isWhiteSpace('!')).toBeFalsy();
        expect(isWhiteSpace('-')).toBeFalsy();
        expect(isWhiteSpace('_')).toBeFalsy();
        expect(isWhiteSpace('(')).toBeFalsy();
        expect(isWhiteSpace('}')).toBeFalsy();
    });

    it('numbers is incorrect', function () {
        expect(isWhiteSpace('1')).toBeFalsy();
        expect(isWhiteSpace('3')).toBeFalsy();
        expect(isWhiteSpace('6')).toBeFalsy();
        expect(isWhiteSpace('0')).toBeFalsy();
    });

    it('\' \' is correct', function () {
        expect(isWhiteSpace(' ')).toBeTruthy();
    });
    it('\'\\n\' is correct', function () {
        expect(isWhiteSpace('\n')).toBeTruthy();
    });
    it('\'\\t\' is correct', function () {
        expect(isWhiteSpace('\t')).toBeTruthy();
    });
    it('\'\\r\' is correct', function () {
        expect(isWhiteSpace('\r')).toBeTruthy();
    });
    it('\'\\f\' is correct', function () {
        expect(isWhiteSpace('\f')).toBeTruthy();
    });

});