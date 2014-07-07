'use strict';

var Container = window.Container;

require.config({
    shim: {
        'jquery': {
            exports: '$'
        }
    },
    paths: { 
        jquery: 'jquery-1.10.2.min'
    }
});

require(['slider'], function() {

    $('#gh-slider').GHSlide({
        maxItem: 2
    });
});