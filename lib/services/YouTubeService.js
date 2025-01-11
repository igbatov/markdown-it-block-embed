// Copyright (c) Rotorz Limited and portions by original markdown-it-video authors
// Licensed under the MIT license. See LICENSE file in the project root.

"use strict";

const VideoServiceBase = require("./VideoServiceBase");


class YouTubeService extends VideoServiceBase {

  getDefaultOptions() {
    return { width: 640, height: 390 };
  }

  extractVideoID(reference) {
    let match = URL.parse(reference);
    if (!match) {
      return "";
    }
    return match.pathname + "?si=" + match.searchParams.get("si") + "&start=" + match.searchParams.get("t");
  }

  getVideoUrl(videoID) {
    if (!videoID) {
      return "";
    }
    return `//www.youtube.com/embed${videoID}`;
  }

}


module.exports = YouTubeService;
