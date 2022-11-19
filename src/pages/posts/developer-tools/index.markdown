---
layout: post
title: Developer tools
date: 2018-04-16 17:33:53
category: post
---

Here's a collection of useful tools that you may reap productivity from. From password managers, to http clients - it's good to know what's available at your disposal.

<!-- end-excerpt -->

### Last Pass

Last Pass is a **password manager** that can help generate unique, complex, passwords for all of the services that you sign up to.
It also has great mobile support.

### Tamper Monkey

[Tamper Monkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) is great for **running custom scripts** on arbitrary websites. You can use it to either change the user interface, or functionality of a website. For instance, I have used it as part of my development cycle to:

- Provide auto-completion for frequently filled out forms
- Log analytics requests, rather than send them
- User Interface tweaks, such as modifying or hiding functionality

If you use Firefox, then you may find [Grease Monkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) useful.

### Lighthouse

Lighthouse is great for **measuring website quality**. It generates reports highlighting issues with performance, accessibility, and SEO best practices.

![](./lighthouse.png "Example of generated reports using lighthouse")

### React Developer Tools

The React developer tools are great for viewing the React element hierarchy, analysing props, and viewing needless redraws. A must have for a React developer.

![](./react-developer-tools.png "Example of viewing a page's React element hierarchy")

### Immutable.JS Object Formatter

[ImmutableJS](https://facebook.github.io/immutable-js/) provides immutability within JavaScript via a simple API.

Howeve, when logging these objects to the console - they are not printed in a useful way:

![](./immutablejs-without-formatter.png "Example of Immutable.fromJS({ a: { b: { c: [ 3, 4, 5 ] } } }) not being output in a human readable form")

After installing the [Immutable.JS Object Formatter](https://chrome.google.com/webstore/detail/immutablejs-object-format/hgldghadipiblonfkkicmgcbbijnpeog?hl=en):

![](./immutablejs-with-formatter.png "Example of Immutable.fromJS({ a: { b: { c: [ 3, 4, 5 ] } } }) not being output in a human readable form")

### JSON Formatter

At the time of writing, Chrome does not support pretty printing of JSON within the browser.

[JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) steps in and provides this functionality.

![](./json.png "Example of JSON being formatted correctly directly within the browser")

### Post Man

[Postman](https://www.getpostman.com/) is a http client with editing functionality, workspaces, mock client support, and more:

![](./postman.png "Example of a GET request being made to google")

### uBlock Origin

[uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en) A great **ad blocker**.

### docker

Docker is great for bringing up local containers, and for consistent deployments.
For instance it is very easy to [run react unit tests within docker](/posts/2017-06-03-running-react-unit-tests-within-docker/).

### Kitematic

I am a fan of using command line tools, but sometimes a nice user interface can be appreciated.

Kitematic's interface can search docker hub, create containers, view logs, configure network settings, and more:

![](./kitematic.png "Example of kitematic showing the currently running containers and container logs")

### Oh My ZSH

Improve developer productivity by installing [oh my zsh](https://github.com/robbyrussell/oh-my-zsh) and choosing from
some of the available plugins such as:

- aws
- docker
- git
- bundler
- ruby
- yarn

## Postico

[Postico](https://eggerapps.at/postico/) is a PostSQL client for macs:

![](./postico.png "Example of kitematic showing the currently running containers and container logs")

## ColorPick Eyedropper

Wanting to find out the hex value of a particular color within your browser? Look no further.

[ColorPick Eyedropper](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en) is useful for extracting the colors directly within the browser.

## Dimensions

[Dimensions](https://chrome.google.com/webstore/detail/dimensions/baocaagndhipibgklemoalmkljaimfdj?hl=en) can calculate the exact width/height between elements on the given web page.
