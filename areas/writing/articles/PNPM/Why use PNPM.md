PNPM stands for Performant NPM, a more advanced solution with much better performance than the well known and widely used Node Package Manager (NPM). It is an open-sourced and MIT licensed package manager for Node, and, ironically, installed using NPM.

PNPM offers huge improvements in, mainly, installation time and disk space usage, and can perform a package installation for a full project sometimes up to ten times faster than NPM. It does this by downloading and storing each project only once in a global store. If you tell PNPM to install a package, it only fetches that package from a registry if it isn't found in the global store. 

As an example, running `npm install` for the popular *Tailwind CSS* user interface  framework took **82 seconds** and resulted in a `node_modules` folder containing 37,215 files taking up **1.3GB** disk space. This is just in one project, so you can imagine how much disk space is taken up by Node packages across several large projects on an engineer's workstation when using NPM.

A constant aspect of each project is that it needs to find to packages it requires in its `node_modules` folder, so NPM repeatedly downloads and stores every package required for every project every time it installs a projects dependencies. Now PNPM saves large amounts of disk space by creating **hard links** (a variation of a file shortcut) in `node_modules` that point to the global store.

