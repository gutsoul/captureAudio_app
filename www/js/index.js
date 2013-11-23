function captureSuccess(mediaFiles) {
	var i, len;
	for (i = 0, len = mediaFiles.length; i < len; i += 1) {
		uploadFile(mediaFiles[i]);
	}
};

function captureError(error) {
	alert('發生錯誤: ' + error.code);
};

function captureAudio() {
	navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
};

function uploadFile(mediaFile) {
	var email = document.getElementById('email').value;
	var uploadOptions = new FileUploadOptions();
	uploadOptions.fileKey = 'file';
	uploadOptions.fileName = mediaFile.name;
	uploadOptions.mimeType = 'audio/mpeg';
	uploadOptions.params = {email: email};
	console.log(mediaFile);
	console.log(mediaFile.fullPath);
	console.log(mediaFile.name);
	var fileTransfer = new FileTransfer();
	fileTransfer.upload(mediaFile.fullPath, 'http://aseanin.com/android_upload.php', 
		uploadSuccess, 
		uploadFail, 
		uploadOptions);
	var list = document.createElement("div");
	list.innerHTML = mediaFile.fullPath;
	document.getElementById('AudioList').appendChild(list);
};

function uploadSuccess(result){
	alert('上傳成功 ' + result.bytesSent + 'bytes ' + result.response);
};

function uploadFail(error){
	alert('上傳失敗 ' + error.code);
};
