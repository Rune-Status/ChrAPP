/*let username = "Arrav";
let password = "hahaha123";

let rsSocket = {
	const net = require('net');
	const bufferUtil = require('buffer');
	bufferUtil.create = function() {
		let util = bufferUtil.alloc(5000);
		util.currentOffset = 0;
		return util;
	}
	const server = '127.0.0.1';
	const port = 43594;
	
	function init() {
		var socket = new net.Socket();
		
		rsSocket.socket.connect(port, server, function() {
			console.log('Sending handshake request.');
			let buffer = bufferUtil.create();
			buffer.currentOffset = 0;
			//var i = (int) (l >> 16 & 31L);
			buffer.writeInt16BE(14, buffer.currentOffset++);
			buffer.writeInt16BE(/*i 100, buffer.currentOffset++);
		});
		
		socket.on('data', function(data) {
			
		});

		socket.on('close', function() {
			console.log('Connection closed');
		});
	}
}

rsSocket.init();*/

const modal = document.querySelector('.modal');

modal.addEventListener("load", function(event) {
	document.getElementById("modal-body").style.maxHeight = screen.width + "px";
});

const remote = require('electron').remote;

document.getElementById("min-btn").addEventListener("click", function (e) {
	var window = remote.getCurrentWindow();
	window.minimize(); 
});

document.getElementById("max-btn").addEventListener("click", function (e) {
	var window = remote.getCurrentWindow();
	if (!window.isMaximized()) {
		window.maximize();          
	} else {
		window.unmaximize();
	}
});

document.getElementById("close-btn").addEventListener("click", function (e) {
	var window = remote.getCurrentWindow();
	window.close();
});

var bodyElement = document.getElementsByTagName('body')[0];
bodyElement.className = 'initial-load';
document.getElementById('companion-welcome').style.visibility = 'hidden';

bodyElement.onload = function() {
	document.addEventListener("deviceready", function() {
		if (window.clientParametersObfuscated !== undefined) {
			var bootstrapScript = document.createElement("script");
			bootstrapScript.setAttribute("src", window.clientParametersObfuscated.bootstrap);
			bodyElement.appendChild(bootstrapScript);
		}
	});
	
	setTimeout(function() {
		document.getElementById('companion-welcome').style.visibility = 'initial';
		document.getElementById('spin').style.display = 'none';
	}, 2000);
};

//document.write(unescape("%3Cscript src='http://www.runescape.com/companion/params.js?" + Date.now() + "' type='text/javascript' %3E%3C/script%3E"));