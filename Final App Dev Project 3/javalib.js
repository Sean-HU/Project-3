function slideFunc() {
	var cnt;
	var i = document.getElementsByClassName("slideshow");
	for (cnt = 0; cnt < i.length; cnt++) {
		i[cnt].style.display = "none";
	}
	index++;
	if (index > i.length) {
		index = 1
	}
	i[index-1].style.display = "block";
	setTimeout(slideFunc, 5000);
}

function homeTimeout() {
	window.open("courses.html","_self")
}

function coursesTimeout() {
	window.open("projects.html","_self")
}

function projectsTimeout() {
	window.open("hobby.html","_self")
}

function hobbyTimeout() {
	window.open("friends.html","_self")
}

function friendsTimeout() {
	window.open("home.html","_self")
}

function keyPressedHome(event) {
	var key = event.keyCode;
	if ((key == 38) || (key == 37)) {
		window.open("friends.html","_self")
	}
	else if ((key == 39) || (key == 40)) {
		window.open("courses.html","_self")
	}
	else {
		window.clearTimeout(timeoutReset);
		timeoutReset = window.setTimeout(homeTimeout, 30000);
	}
}

function keyPressedCourses(event) {
	var key = event.keyCode;
	if ((key == 38) || (key == 37)) {
		window.open("home.html","_self")
	}
	else if ((key == 39) || (key == 40)) {
		window.open("projects.html","_self")
	}
	else {
		window.clearTimeout(timeoutReset);
		timeoutReset = window.setTimeout(coursesTimeout, 30000);
	}
}

function keyPressedProjects(event) {
	var key = event.keyCode;
	if ((key == 38) || (key == 37)) {
		window.open("courses.html","_self")
	}
	else if ((key == 39) || (key == 40)) {
		window.open("hobby.html","_self")
	}
	else {
		window.clearTimeout(timeoutReset);
		timeoutReset = window.setTimeout(projectsTimeout, 30000);
	}
}

function keyPressedHobby(event) {
	var key = event.keyCode;
	if ((key == 38) || (key == 37)) {
		window.open("projects.html","_self")
	}
	else if ((key == 39) || (key == 40)) {
		window.open("friends.html","_self")
	}
	else {
		window.clearTimeout(timeoutReset);
		timeoutReset = window.setTimeout(hobbyTimeout, 30000);
	}
}

function keyPressedFriends(event) {
	var key = event.keyCode;
	if ((key == 38) || (key == 37)) {
		window.open("hobby.html","_self")
	}
	else if ((key == 39) || (key == 40)) {
		window.open("home.html","_self")
	}
	else {
		window.clearTimeout(timeoutReset);
		timeoutReset = window.setTimeout(friendsTimeout, 30000);
	}
}

function homeScroll(e) {
    	var e = window.event; 
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	if (delta == 1) {
		window.open("friends.html","_self");
	}
	else {
		window.open("courses.html","_self");
	}
	return false;
}

function coursesScroll(e) {
    	var e = window.event; 
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	if (delta == 1) {
		window.open("home.html","_self");
	}
	else {
		window.open("projects.html","_self");
	}
	return false;
}

function projectsScroll(e) {
    	var e = window.event; 
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	if (delta == 1) {
		window.open("courses.html","_self");
	}
	else {
		window.open("hobby.html","_self");
	}
	return false;
}

function hobbyScroll(e) {
    	var e = window.event; 
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	if (delta == 1) {
		window.open("projects.html","_self");
	}
	else {
		window.open("friends.html","_self");
	}
	return false;
}

function friendsScroll(e) {
    	var e = window.event; 
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	if (delta == 1) {
		window.open("hobby.html","_self");
	}
	else {
		window.open("home.html","_self");
	}
	return false;
}