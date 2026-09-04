/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);


// Ligth / Dark Theme toggle
(function () {
  const body = document.body;
  const toggleBtn = document.querySelector(".toggle-btn");
  const THEME_KEY = "theme";

  // Get system preference
  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  // Apply theme class to body
  function applyTheme(theme) {
    if (theme === "light") {
      body.classList.add("light");
    } else {
      body.classList.remove("light");
    }
  }

  // Get preferred theme (localStorage > system)
  function getPreferredTheme() {
    return localStorage.getItem(THEME_KEY) || getSystemTheme();
  }

  // Set theme and persist
  function setTheme(theme) {
    applyTheme(theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  // Initialize theme on load
  setTheme(getPreferredTheme());

  // Toggle theme on button click
  toggleBtn.addEventListener("click", () => {
    const isLight = body.classList.contains("light");
    setTheme(isLight ? "dark" : "light");
  });
})();
