it:
	@node_modules/.bin/slid slides.txt

happen:
	@clear

kill:
	-@pkill -f watchify

demo1: kill
	@node_modules/.bin/watchify -dvo built.js demo1.js

demo1_done: kill
	@node_modules/.bin/watchify -dvo built.js done/demo1.js

demo2: kill
	@node_modules/.bin/watchify -dvo built.js demo2.js

demo2_done: kill
	@node_modules/.bin/watchify -dvo built.js done/demo2.js



.PHONY: it happen kill demo1 demo1_done demo2 demo2_done
