---
title: Linux Workshop - Getting Help
---

## Teaching a man to fish

### man

If you're ever unsure how a particular command works, you can use the `man` command.
For instance:

```bash
$ man <utility_name>
```

For instance, if you were unsure about how to use the `cat` command:

```bash
$ man cat
```

![](./man-example.png "Example of using the man command with `cat` and retrieving the manual pages")

By default the `man` utility will open using your pager, usually `less` - or perhaps `more`.
It is worth noting that the `less` command is the successor to `more`, and is slightly more powerful.

You can view your configured pager with:

```bash
$ echo $PAGER
less

# Read the docs!
$ man less
```

Useful `less` commands are:

- Use the space bar to move down
- Press `h` to display the list of available commands
- Use `q` to quit

Extra: Various commands within `less` are derived from `vi` and `more`

- Search with `/`, and use `n` to find the next occurrence
- Use `g` to go to the start of the man pages
- use `G` to go to the end of the man pages

### info

There is additionally `info` which can contain different, potentially more detailed, information about a given command.
In particular the `info` command is used by GNU utilities. Often the `info` version will
contain more information, and if no `info` is present - it will fall back to the details specified within the `man` page.

```bash
$ info cat
```

## Help options

Various GNU based tools will also respond to the following flags:

```bash
$ cat --help

$ cat -h
```

## Help command

bash provides a `help` command:

```bash
$ help help
help: help [-dms] [pattern ...]
    Display information about builtin commands.

    Displays brief summaries of builtin commands.  If PATTERN is
    specified, gives detailed help on all commands matching PATTERN,
    otherwise the list of help topics is printed.

    Options:
      -d	output short description for each topic
      -m	display usage in pseudo-manpage format
      -s	output only a short usage synopsis for each topic matching
    	PATTERN

    Arguments:
      PATTERN	Pattern specifiying a help topic

    Exit Status:
    Returns success unless PATTERN is not found or an invalid option is given.
```
