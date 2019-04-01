// Spellacy.net - Global Functions
// Developer: Michael "Spell" Spellacy. Twitter: @spellacy, GitHub: michaelspellacy

(function(){

	document.getElementsByTagName("html")[0].className = "js";

	// PWA Register

	if (navigator.serviceWorker.controller) {

	  console.log("Active service worker found, no need to register");

	} else {

		//Register the ServiceWorker

		navigator.serviceWorker.register("/service-worker.js", {

	    	scope: "./"

		}).then(function(reg) {

	    	console.log("Service worker has been registered for scope:" + reg.scope);

		});

	}

	// Webmention

	/*

	var sn = document.createElement("script"), s = document.getElementsByTagName("script")[0], url;

	url = document.querySelectorAll ? document.querySelectorAll("link[rel~=canonical]") : false;
	url = url && url[0] ? url[0].href : false;
	sn.async = true;
	sn.src = "https://webmention.herokuapp.com/api/embed?url=" + encodeURIComponent(url || window.location);
	s.parentNode.insertBefore(sn, s);

	*/

	// Helper Functions

	function insertAfter(el, referenceNode) {

		referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);

	}

	function insertBefore(el, referenceNode) {

	    referenceNode.parentNode.insertBefore(el, referenceNode);

	}

	// Get Navigation

	// var primaryNavigation = document.getElementById("primary-navigation");

	// Make Mobile Button

	/* var menuButton = document.createElement("button");

	menuButton.setAttribute("id", "menu-button");
	menuButton.setAttribute("aria-expanded", "false");
	menuButton.textContent = "Menu";

	menuButton.onclick = function(){

		if(this.getAttribute("aria-expanded") === "true") {

			this.setAttribute("aria-expanded", "false");

		} else {

			this.setAttribute("aria-expanded", "true");

		}

	};

	insertBefore(menuButton, primaryNavigation); */

	// Highlight Navigation

	/* var documentID = document.body.id;

	if(document.getElementById("nav-" + documentID)) {

		document.getElementById("nav-" + documentID).getElementsByTagName("a")[0].classList.add("active");

	}

	if(document.body.classList.contains("news")) {

		document.getElementById("nav-news-index").getElementsByTagName("a")[0].classList.add("active");

	} */

	// Escape Key event(s) here

	/* document.onkeydown = function(e) {

		if (e.which === 27) {

	  		menuButton.setAttribute("aria-expanded", "false");

		}

	}; */

	// Add share button

	var shareButton = document.getElementById("share-button");

	shareButton.addEventListener("click", async () => {

		try {

			await navigator.share({ title: document.title.replace(" - Spellacy.net", ""), url: document.URL });

			console.log("Data was shared successfully");

		} catch (err) {

			console.error("Share failed:", err.message);

		}

	});

})();
