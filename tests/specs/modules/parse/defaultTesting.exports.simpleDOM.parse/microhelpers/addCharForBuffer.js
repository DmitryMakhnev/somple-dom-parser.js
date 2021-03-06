describe('addCharForBuffer (defaultTesting.exports.simpleDOM.parse.microhelpers)', function () {
    var simpleDOMNodes = require('simple-dom-parser');
    var parseExports = require('default-testing').exports.simpleDOM.parse;
    var ContextOfParse = parseExports.ContextOfParse;
    var addCharForBuffer = parseExports.microehelpers.addCharForBuffer;

    it('was exported', function () {
        expect(addCharForBuffer).toBeDefined();
    });

    var contextOfParse = new ContextOfParse();

    addCharForBuffer(contextOfParse, ' ');
    addCharForBuffer(contextOfParse, '\n');
    addCharForBuffer(contextOfParse, ' ');
    addCharForBuffer(contextOfParse, '\r');
    addCharForBuffer(contextOfParse, '\r');
    addCharForBuffer(contextOfParse, 'a');

    it('contextOfParse.buffer correct', function () {
        expect(contextOfParse.buffer).toBe(' \n \r\ra');
    });

});