var rest = require('restler');
var fs = require('fs');
var now = new Date();

var brightcove = require('node-brightcove');
// var mediaApi = new brightcove.MediaApi('qFBubwsoIm3XE2UPxpr7fFcPq4OtGZR9UBGRPpzRWGtyI7SitRPQNg..');
var mediaApi = new brightcove.MediaApi('qFBubwsoIm3XE2UPxpr7fFcPq4OtGZR9mal6mt3kX0s-jy-VO7Vm8g..');

// Abstracted handler
var findAllVideosHandler = function(err, jsonResponse, body) {
    console.log(err, jsonResponse, body);
}

mediaApi.createVideo(__dirname + '../../../../video.mp4',

  {
    "params": {
      "video": {
        "name": "video submitted at " + now,
        "shortDescription": "this is a test",
      },
      "encode_to": "MP4",
      "create_multiple_renditions": "True",
      "token": "ZY4Ls9Hq6LCBgleGDTaFRDLWWBC8uoXQHkhGuDebKvjFPjHb3iT-4g.."
    },
    "method": "create_video"



  }, findAllVideosHandler);
