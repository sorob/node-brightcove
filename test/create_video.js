var rest = require('restler');
var fs = require('fs');
var now = new Date();

var brightcove = require('node-brightcove');
// var mediaApi = new brightcove.MediaApi('qFBubwsoIm3XE2UPxpr7fFcPq4OtGZR9UBGRPpzRWGtyI7SitRPQNg..');
var mediaApi = new brightcove.MediaApi('qFBubwsoIm3XE2UPxpr7fFcPq4OtGZR9mal6mt3kX0s-jy-VO7Vm8g..');

// Abstracted handler
var findAllVideosHandler = function(err, jsonResponse) {
    console.log(jsonResponse);
  }
  //mediaApi.on('create_video', findAllVideosHandler);

// Register the handler
// Note the specific event name: 'find_all_videos'

mediaApi.createVideo(__dirname + '/video.mp4',

  {
    "params": {
      "video": {
        "name": "asldkjalkjd" + now,
        "shortDescription": "lkasjdal",

      },
      "encode_to": "MP4",
      "create_multiple_renditions": "True",
      "token": "qFBubwsoIm3XE2UPxpr7fFcPq4OtGZR9mal6mt3kX0s-jy-VO7Vm8g.."
    },
    "method": "create_video"



  }, findAllVideosHandler);

// Make the call.

// fs.stat("video.mp4", function(err, stats) {
//   console.log(stats)
//   rest.post('http://api.brightcove.com/services/post', {
//     multipart: false,
//       "method": "create_video",

//     data: {
//       "method": "create_video",
//       "params":  JSON.stringify({
//         "method": "create_video",

//         "video": {
//           "name": "video " + now,
//           "shortDescription": "desc",
//           "startDate": 1429107722000,
//           "endDate": null
//         },
//         "encode_to": "MP4",
//         "create_multiple_renditions": "True",
//         "token": "ZY4Ls9Hq6LCBgleGDTaFRDLWWBC8uoXQHkhGuDebKvjFPjHb3iT-4g.."
//       }),
//       "file": rest.file("video.mp4", null, stats.size, null, "video/mp4")
//     }

//   }).on('complete', function(data) {
//     console.log(data);
//   });
// });
