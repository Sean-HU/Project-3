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
