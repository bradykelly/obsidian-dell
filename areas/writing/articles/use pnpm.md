## PNPM Benefits

### Performance
- bottom line is it saves disk space and installation time, up to 10x faster than npm:
	- runs dependency installations in parallel
	- uses a shared **content-addressable** global store and only downloads packages not found in the local store, avoiding repeated downloads of the same package
- symlinks
	- no file copying every time a package is installed into node_modules, just hard links to global store
	- 




