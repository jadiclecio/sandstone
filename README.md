# Sandstone #

A bootstrap for sites in the Mozilla Universe. This project aims to automate as much
of the process of starting a new website using the Mozilla Sandstone theme as possible and,
also provides the tools, via Grunt, to preprocess, lint and minify/uglify the assets.

For more information on [bootstrapping with Sandstone][sandstone-bootstrap], head over to
the master branch.

# Contributing To The Docs #

If you want to help build better docs for the Sandstone bootstrap project, the steps are real simple.

First you will need to have the following prerequisites installed:

* [Nodejs][nodejs]

Once you have forked and cloned the project and have Nodejs installed, change
directory into the root of the project folder and run:

    npm install

This will install all of the prerequisites you will need to build and contribute
to the docs.

## Building and Serving the Docs ##

Whilst working on the docs, whether it be styleguide.less or, adding new documentation
sections, you simply run the following from the root of the repo:

    grunt dev-docs

This task will first preprocess styleguide.less then, startup a simple
HTTP server, and start watching for changes made to styleguide.less, in which case,
it will re-preprocess the file. This leaves you free to continue working without having
to stop and start the server or running commands to preprocess the LESS everytime
you make a change.

Lastly, fire up your browser and point it at:

    http://127.0.0.1:8000/

## Adding a New Section ##

If you wish to add a completely new section to the docs, here are the steps to
follow:

* Create the page inside the sections directory e.x. new_section.html
* Link to this section in index.html under the nav element. NB! Ensure that
the href of the link, matches that of the file you created in step 1, for example:

    ```html
    <li><a href="new_section.html">This Can Be Anything</a></li>
    ```

* Inside your newly created section, use the following as your skeleton:

    ```html
    <h2>Element</h2>
    <p>Short description</p>

    <h3>Sample 1</h3>
    <section class="sample-container">
        <button class="button-green">download</button>
    </section>

    <section class="code-sample show">
        <h4>HTML</h4>

        <pre>
        <code class="language-markup"></code>
        </pre>
    </section>
    ```

You need not enter anything inside the code sample section as this will be populated
by the JS from the sample container above it. And that is all there is to it.

# Grunt Tasks #

The current [Grunt][grunt] tasks included:

    grunt

This will run the default task which uses lessc to preprocess the styleguide.less file.

    grunt lintify

This will preprocess styleguide.less, then lint the JS and CSS. It will however not lint
the sandstone-resp.css file nor will it lint the JS in the libs directory.

    grunt dev-docs

This will preprocess styleguide.less, startup the HTTP server and then watch for
changes to the LESS files and preprocesses as needed.

[nodejs]: http://nodejs.org
[grunt]: http://github.com/cowboy/grunt
[sandstone-bootstrap]: http://github.com/ossreleasefeed/Sandstone
