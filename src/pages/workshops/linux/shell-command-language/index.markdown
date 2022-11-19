---
title: Linux Workshop - Shell Language
---

## Shell

A shell provides access to the operating system's services. At a high level there are two kinds
of shell:

- Command Line Interface - CLI
- Graphical User Interface - GUI

## Common Command Line Shells

There are various shells available, and multiple may be available on your current operating system.
A command shell reads commands from the terminal,

For instance:

- `/bin/sh` - Bourne Shell, the default Unix shell
- `/bin/bash` - Bourne again Shell, the GNU shell
- `/bin/ksh` - Korne shell, based on the Bourne Shell
- `/bin/csh`
- `/bin/tcsh`
- `/bin/zsh` - oh my zsh shell, based on bash, ksh, and tcsh

You can easily change your preferred shell with `chsh`

You can see your current shell with:

```bash
$ echo $0
/bin/bash

$ echo $SHELL
/bin/bash
```

## Common Controls

- Move left/right with directional keys
- Delete words with ctrl+w
- _Interrupt_ a program with Ctrl+C

## Replaying Commands

You can use the `history` command to view all of your previously entered commands:

```bash
$ history
    1  ls
    2  cd ~
    3  ls
    4  pwd
    5  history
```

You cou can run the previous command again with `!!`, useful for `sudo !!`

```bash
# A previous History
$ history
    1  ls
    2  cd ~
    3  ls
    4  pwd
    5  history

# Our command
$ !!
history
    1  ls
    2  cd ~
    3  ls
    4  pwd
    5  history
```

Repeat the nth command with `!n` i.e. `!5`

```bash
# A previous History
$ history
    1  ls
    2  cd ~
    3  ls
    4  pwd
    5  history

# Our command
root@062544b55589:~# !3
ls

bash   dir            etc
```

Your history is a file stored within your file system, for instance you can find yours at:

```bash
$ echo $HISTFILE
/Users/your_name/.bash_history

$ cat $HISTFILE
...

$ echo $HISTSIZE
10000
```

## Reverse Search

You can quickly search through your history in an interactive mode using ctrl+r.

<!-- TODO: Add recording -->
