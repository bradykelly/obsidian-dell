PNPM stands for Performant NPM, a more advanced solution with much better performance than the well known and widely used Node Package Manager (NPM). It is an open-sourced and MIT licensed package manager for Node, and, ironically, installed using NPM.

PNPM offers many improvements over NPM, the best known being installation time and disk space usage, and it can perform a package installation for a full project sometimes up to ten times faster than NPM. It does this by downloading and storing each package only once in a global store. If you tell PNPM to install a package, it only fetches that package from a registry if it isn't found in the global store. 

As an example, running `npm install` for the popular *Tailwind CSS* user interface  framework took **82 seconds** and resulted in a `node_modules` folder containing 37,215 files taking up **1.3GB** disk space. This is just in one project, so just imagine how much disk space is taken up by Node packages across several large projects on engineers' workstations when using vanilla NPM.

A nearly constant aspect of each project is that Node, other services, and transpilers resolve package imports in code to locations in the project's `node_modules` folder. This means NPM will always download and store every package in this folder. Now PNPM saves large amounts of disk space by creating **hard links** (a variation of a file shortcut) in `node_modules` that point to the global store.

This is evident when switching the package manager for Tailwind CSS to PNPM and running `pnpm install`. The whole operation took 27 seconds and built a `node_modules` hive of 

