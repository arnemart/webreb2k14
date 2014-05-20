it:
	@node_modules/.bin/slid slides.txt

happen:
	@clear

kill:
	-@pkill -f watchify

demo1: kill
	@node_modules/.bin/watchify -dvo 1/built.js 1/demo.js

demo1_done: kill
	@node_modules/.bin/watchify -dvo 1/built.js 1/done.js

demo2: kill
	@node_modules/.bin/watchify -dvo 2/built.js 2/demo.js

demo2_done: kill
	@node_modules/.bin/watchify -dvo 2/built.js 2/done.js



.PHONY: it happen kill demo1 demo1_done demo2 demo2_done
