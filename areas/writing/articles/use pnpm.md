## PNPM Benefits

### Performance
- up to 10x faster than npm because:
	- runs dependency installations in parallel
	- uses a shared global store on the system to avoid duplicating packages across multiple projects, which saves disk space and installation time across projects and avoids repeated downloads of the same package
- symlinks
	- no file copying every time a package is installed into node_modules, just symlinks to global store
	- 




