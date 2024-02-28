## PNPM Benefits

### Performance
- up to 10x faster than npm because:
	- runs dependency installations in parallel
	- uses a global package store on local machine, avoids duplicating packages across projects and avoids repeated downloads of the same package
	- achieves this by using symlinks in node_modules to global package store
- symlinks
	- 




