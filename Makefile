# Makefile
update-easy-libs:
	yarn upgrade $(shell yarn list --pattern easy --depth=0 --json | jq -r '.data.trees[].name')

unrootify:
	sudo chown -R $$(id -u):$$(id -g) .