/**
 * @constructor
 * @extends {HTMLElement}
 * @see https://developers.google.com/youtube/js_api_reference
 */
function YTPlayer() {}

/**
 * @param {string} type
 * @param {string|EventListener|function(Event):(boolean|undefined)} handler
 * @param {boolean} [useCapture] Ignored. Here for compliance with the
 *   original.
 * @override
 * @see https://developers.google.com/youtube/js_api_reference#Adding_event_listener
 */
YTPlayer.prototype.addEventListener = function (type, handler, useCapture) {};

/**
 * @returns {number}
 * @see https://developers.google.com/youtube/js_api_reference#Playback_status
 */
YTPlayer.prototype.getCurrentTime = function () {};

/**
 * @see https://developers.google.com/youtube/js_api_reference#playVideo
 */
YTPlayer.prototype.playVideo = function () {};

/**
 * @returns {number}
 * @see https://developers.google.com/youtube/js_api_reference#Retrieving_video_information
 */
YTPlayer.prototype.getDuration = function () {};

/**
 * @see https://developers.google.com/youtube/js_api_reference#pauseVideo
 */
YTPlayer.prototype.pauseVideo = function () {};

/**
 * @returns {number}
 * @see https://developers.google.com/youtube/js_api_reference#getPlayerState
 */
YTPlayer.prototype.getPlayerState = function () {};
