---
desc: Scott Chacon's FOSDEM 2024 talk on Git Tips and Tricks
---

# [So you think you know Git](https://youtu.be/aolI_Rz0ZqY)

## Config Stuff

```bash
git config --global alias.staash 'stash --all'
git config --global alias.bb !better-branch.sh # or actual bash script*

```
- * Will this work in PowerShell?

### Conditional Configs

```bash
[user]
    email = brady@bradykelly.net
    name = Brady Kelly
...
[includeIf "gitdir:~/projects/work/"]
	path = ~/projects/work/.gitconfig
[includeIf "gitdir:~/projects/oss/"]
	path = ~/projects/oss/.gitconfig
```

## Line ranges

### Git blame, just a `L`ittle

```bash
git blame -L 15,26 path/to/file
```

### Also with `git log`

```bash
git log -L 15,26:path/to/file
git log -L :File:path/to/file # Will try narrow output to 'File' id in source
```

## Git blame in a GUI

```bash
git blame -w -C [-C [-C]]
```

`-w` Ignore whitespace
`-C` Detect lines moved or copied in the same commit
`-C -C` as above, but also include the commit that created the file
`-C -C -C` include *any* commit

### The Pickaxe

```bash
git log -S <string-expression> 
```



