var Modernizr = require('./../../lib/Modernizr');
var testAllProps = require('./../../lib/testAllProps');

/*!
{
  "name": "CSS Overflow Scrolling",
  "property": "overflowscrolling",
  "tags": ["css"],
  "warnings": ["Introduced in iOS5b2. API is subject to change."],
  "notes": [{
    "name": "Article on iOS overflow scrolling",
    "href": "http://johanbrook.com/browsers/native-momentum-scrolling-ios-5/"
  }]
}
!*/

  Modernizr.addTest('overflowscrolling', testAllProps('overflowScrolling', 'touch', true));

