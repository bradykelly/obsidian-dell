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


