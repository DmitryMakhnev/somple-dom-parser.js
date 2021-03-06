var classyxin = require('classyxin');
var Node = require('./Node');

/**
 * 
 * @constructor
 * @extends {nodes.Node}
 */
var Comment = classyxin.createClass(
    Node,
    {
        type: 'comment',
        init: function (commentContent) {
            this.nodeValue = commentContent;
        }
    }
);

module.exports = Comment;