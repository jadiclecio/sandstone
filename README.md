Sandstone
=========

A bootstrap for static sites in the Mozilla Universe. This project aims to automate as much
of the process of starting a new website using the Mozilla Sandstone theme as possible and,
also provides the tools, via Grunt, to preprocess, lint and minify/uglify the assets.

Prerequisites
=============

You will currently need to follow prerequisites installed:

* [Nodejs][nodejs]
* [Volo][volo]
* [LESS][less]

To intall the LESS preprocessor run the following after installing Nodejs

    sudo npm install -g less

Usage
=====

Inside the directory you wish to create your project run:

    volo create yourprojectname ossreleasefeed/Sandstone

If you are going to use Git as your source control now would be a good time to initialize your repo.
After changing into the newly created project folder run:

    git init

Next, while inside your project directory run:

    npm install

This will install any additional dependencies defined inside package.json. Inside your new project folder
there will be a .gitignore file that will ensure that the node_modules folder created above, and any .css
files will not be included in source control.

Feel free to add any additional exclusions you require.

Grunt Tasks
===========

The current [Grunt][grunt] tasks included:

    grunt

This will run the default task which uses lessc to preprocess your .less files

    grunt lint

This will lint, using JSHint, your grunt file itself as well as all .js files inside the
js folder.

[nodejs]: http://nodejs.org
[volo]: https://github.com/volojs/volo
[less]: https://github.com/cloudhead/less.js
[grunt]: http://github.com/cowboy/grunt
