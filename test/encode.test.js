'use strict';

var assert = require("assert")
var enc = require('../main').encodeGBKURI

describe('encodeGBKURI', function() {
    it('should encode chinese to gbk uri', function() {
        var url = enc('abc一二三')
        assert.equal(url, 'abc%d2%bb%b6%fe%c8%fd')
    });
})
