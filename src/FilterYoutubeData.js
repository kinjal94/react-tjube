'use strict';

const YTTYPE = {
	VIDEO: 'youtube#video',
	SEARCHRESULT: 'youtube#searchResult',
};

function filterYoutubeData(data) {
	let newData;
	if (data.kind === YTTYPE.VIDEO || (data.kind === YTTYPE.SEARCHRESULT && data.id.kind === YTTYPE.VIDEO)) {
		newData = {
			id: data.id,
			title: data.snippet.title,
			channelTitle: data.snippet.channelTitle,
			thumbnails: data.snippet.thumbnails,
		};
		if (data.kind === YTTYPE.SEARCHRESULT) {
			newData.id = newData.id.videoId; // id for searchresult is wrapped in id object
		}
	}
	return newData;
}

if (typeof module !== 'undefined' && module.exports) {
	module.exports = filterYoutubeData;
} else {
	window.filterYoutubeData = filterYoutubeData;
}