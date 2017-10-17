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

function myFunction() {
    if (document.body.scrollTop >= 0 || document.documentElement.scrollTop >= 0) {
        window.open("courses.html","_self")
    } else {
        window.open("friends.html","_self")
    }
}