# Sandstone #

A bootstrap for sites in the Mozilla Universe. This project aims to automate as much
of the process of starting a new website using the Mozilla Sandstone theme as possible and,
also provides the tools, via Grunt, to preprocess, lint and minify/uglify the assets.

*NOTE:* For sites based on Django/Playdoh, the Grunt file is not currently included.

# Prerequisites #

You will currently need to following prerequisites installed:

* [Django][https://www.djangoproject.com/)

# Usage #

## For sites based on Django ##

Clone the repo

    git clone git@github.com:schalkneethling/sandstone.git ~/sandstone

Inside your project's top level directory (the directory where your project apps are located)
add the sandstone app:

    cd myproject/
    cp ~/sandstone/django/sandstone .

Inside your settings.py add 'sandstone' to your `INSTALLED_APPS`:

    INSTALLED_APPS = (
        ...

        'sandstone',

        ...
    )

Extend your templates from the base.html provided by sandstone:

    {% extends "sandstone/base.html" %}

    {% block page_title %}Hello world!{% endblock %}

    {% block content %}
    <p>Hello world!</p>
    {% endblock %}

That's it!

### Last step ###

Do something awesome
