var util = util || {};
util.toArray = function(list) {
  return Array.prototype.slice.call(list || [], 0);
};

var Terminal = Terminal || function(cmdLineContainer, outputContainer) {
    window.URL = window.URL || window.webkitURL;
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

    var cmdLine_ = document.querySelector(cmdLineContainer);
    var output_ = document.querySelector(outputContainer);

    const CMDS_ = [
        '#',
        'clear',
        'date',
        'echo',
        '<b>github</b>',
        'help',
        'ls',
        '<b>curriculum</b>',
        'uname'
    ];

    var fs_ = null;
	var cwd_ = null;
	var history_ = [];
	var histpos_ = 0;
	var histtemp_ = 0;

	window.addEventListener('click', function(e) {
		cmdLine_.focus();
	}, false);

	cmdLine_.addEventListener('click', inputTextClick_, false);
	cmdLine_.addEventListener('keydown', historyHandler_, false);
	cmdLine_.addEventListener('keydown', processNewCommand_, false);

	//
	function inputTextClick_(e) {
		this.value = this.value;
	}

	//
	function historyHandler_(e) {
		if (history_.length) {
			if (e.keyCode == 38 || e.keyCode == 40) {
				if (history_[histpos_]) {
					history_[histpos_] = this.value;
				} else {
					histtemp_ = this.value;
				}
			}

			if (e.keyCode == 38) { // up
				histpos_--;
				if (histpos_ < 0) {
					histpos_ = 0;
				}
			} else if (e.keyCode == 40) { // down
				histpos_++;
				if (histpos_ > history_.length) {
					histpos_ = history_.length;
				}
			}

			if (e.keyCode == 38 || e.keyCode == 40) {
				this.value = history_[histpos_] ? history_[histpos_] : histtemp_;
				this.value = this.value; // Sets cursor to end of input.
			}
		}
	}

	//
	function processNewCommand_(e) {

		console.log(e);
		if (e.keyCode == 9) { // tab
			e.preventDefault();
			// Implement tab suggest.
		} else if (e.keyCode == 13) { // enter
			// Save shell history.
			if (this.value) {
				history_[history_.length] = this.value;
				histpos_ = history_.length;
			}

			// Duplicate current input and append to output section.
			var line = this.parentNode.parentNode.cloneNode(true);
			line.removeAttribute('id')
			line.classList.add('line');
			var input = line.querySelector('input.cmdline');
			input.autofocus = false;
			input.readOnly = true;
			output_.appendChild(line);

			if (this.value && this.value.trim()) {
				var args = this.value.split(' ').filter(function(val, i) {
					return val;
				});
				var cmd = args[0].toLowerCase();
				args = args.splice(1); // Remove cmd from arg list.
			}


			switch (cmd) {
				case '#':
					break;
				case 'clear':
					output_.innerHTML = '';
					this.value = '';
					return;
				case 'date':
					output( new Date() );
					break;
				case 'echo':
					output( args.join(' ') );
					break;
				case 'github':
					output('You can watch what I\'m doing at: \
					<a href="https://github.com/yochem">https://github.com/yochem</a>');
					break;
                case 'help':
                    output('Welcome! To see which commands are available, type \
                    \'ls\' followed by an enter.')
                    break;
				case 'ls':
					output('<div class="ls-files">' + CMDS_.slice(1).join('<br>') + '</div>');
					break;
				case 'resume':
					output('Sorry to put my resume in your face like that!');
					window.open('NatureDeepReview.pdf', '_blank'); return false;
					break;
				case 'uname':
					output(navigator.appVersion);
					break;
				default:
					if (cmd) {
						output(cmd + ': command not found');
					}
			};

			window.scrollTo(0, getDocHeight_());
			this.value = ''; // Clear/setup line for next input.
		}
	}

		//
		function formatColumns_(entries) {
			var maxName = entries[0].name;
			util.toArray(entries).forEach(function(entry, i) {
				if (entry.name.length > maxName.length) {
					maxName = entry.name;
				}
			});

			var height = entries.length <= 3 ?
					'height: ' + (entries.length * 15) + 'px;' : '';

			// 12px monospace font yields ~7px screen width.
			var colWidth = maxName.length * 7;

			return ['<div class="ls-files" style="-webkit-column-width:',
							colWidth, 'px;', height, '">'];
		}

		//
		function output(html) {
			output_.insertAdjacentHTML('beforeEnd', '<p>' + html + '</p>');
		}

		// Cross-browser impl to get document's height.
		function getDocHeight_() {
			var d = document;
			return Math.max(
					Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
					Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
					Math.max(d.body.clientHeight, d.documentElement.clientHeight)
			);
		}



	return {
		init: function() {
			output('<img align="left" src="ascii.png" width="393" height="150" style="padding: 0px 0px 20px 0px"><p style="padding-top: 65px">' + new Date() + '</p><p>Enter "help" for more information.</p>');
		},
		output: output,
		ascii: function() {
			var cmdline = $('.cmdline');
			cmdline.val('help (press enter to continue)');
		}
	}
};
