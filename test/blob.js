var Modernizr = require('./../lib/Modernizr');

/*!
{
  "name": "Blob constructor",
  "property": "blobconstructor",
  "aliases": ["blob-constructor"],
  "caniuse": "blobbuilder",
  "notes": [{
    "name": "W3C spec",
    "href": "http://dev.w3.org/2006/webapi/FileAPI/#constructorBlob"
  }],
  "polyfills": ["blobjs"]
}
!*/
/* DOC

Detects support for the Blob constructor, for creating file-like objects of immutable, raw data.

*/

  Modernizr.addTest('blobconstructor', function () {
    try {
      return !!new Blob();
    } catch (e) {
      return false;
    }
  }, {
    aliases: ['blob-constructor']
  });

