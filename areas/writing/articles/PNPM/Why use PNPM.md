PNPM stands for Performant NPM, a more advanced solution with much better performance than the well known and widely used Node Package Manager (NPM). It is an open-sourced and MIT licensed package manager for Node, and, ironically, installed using NPM.

A nearly constant aspect of every project that uses Node packages is that Node, other services, and transpilers resolve package imports in code to locations in the project's `node_modules` folder. This means NPM will always download and store every package in this folder. So if you have 100 projects using a package, you will have 100 copies of that package stored on your disk. 

PNPM offers many improvements over NPM, the best known being installation time and disk space usage, and it can perform a package installation for a full project usually around three times faster than NPM. It does this by downloading and storing each package only once in a global store. If you tell PNPM to install a package, it only fetches that package from a registry if it isn't found in the global store. 100 projects that use a package and only one copy of that package on your disk.

As an example, running `npm install` for the popular *Tailwind CSS* user interface  framework took **82 seconds** and resulted in a `node_modules` folder containing 37,215 files taking up **1.3GB** disk space. This is just in one project, so just imagine how much disk space is taken up by Node packages across several large projects on engineers' workstations when using vanilla NPM.

Now PNPM saves large amounts of disk space by creating **hard links** (a variation of a file shortcut) in `node_modules` that point to the global store. This is evident when switching the package manager for *Tailwind CSS* to PNPM and running `pnpm install`. The whole operation took **15 seconds** and built a `node_modules` hive only 220MB in size! All the packages are stored in one central.

The Yarn package manager, another improvement on NPM, also uses a local package cache, but Yarn copies files from the cache to each project. 100 projects, 100 copies of the package again.

The previous version of NPM, `npm@2` used a nested `node-modules` structure. It was predictable and clean because each package in `node_modules` had its own `node_modules` folder and all its own dependencies specified in its `package.json` file. 

A significant disadvantages of this structure was that packages often created very deep dependency trees, resulting in directory paths that exceeded Windows default maximum path length. Another was that packages were copied into `node_modules` several times when they were required by multiple dependencies.

The current version of NPM, *npm@3*


