---
title: Linux Workshop - Command
---

## Commands

Portable Operating System Interface (POSIX) defines useful command line utilities
that developers can make use of. A subset of these are:

- cat
- cd
- cp
- less
- mkdir
- pwd
- ... etc ...

The list in its entirety can be found [here](http://pubs.opengroup.org/onlinepubs/9699919799/idx/utilities.html).
Although there are many utilities available, an average developer can survive with only a subset.

## cd

`cd` is used to change directories. Let's change directories to our home directory:

```bash
cd ~
```

## pwd

`pwd` will print the working directory name:

```bash
pwd
```

## cat

`cat`, short for concatenate, can read and print multiple files to stdout. Although more often than not, you will most
likely only require one file to be output:

```bash
cat /usr/share/dict/words
```

## ls

`ls` is useful to list a directory's contents. It can be useful to combine this with the `-l` option to list a directory's contents
in long format:

```bash
ls -l
```

## cp

`cp` can copy files from one location to another:

```bash
# Copy dictionary words to the current directory
$ cp /usr/share/dict/words .

# The copied file will now reside here:
$ ls -l
```

## less

When you have large files that you wish to view in smaller readable chunks, you may wish to use _less_.
Less allows you to _page_ through your file:

```bash
less /usr/share/dict/words
```

Useful `less` commands are:

- Use the space bar to move down
- Press `h` to display the list of available commands
- Use `q` to quit

Extra: Various commands within `less` are derived from `vi` and `more`

- Search with `/`, and use `n` to find the next occurrence
- Use `g` to go to the start of the man pages
- use `G` to go to the end of the man pages

## mkdir

Use _mkdir_ when you wish to make a directory:

```bash
cd ~/Documents

mkdir directory1
mkdir directory2

ls
```

## echo

`echo` will write the given string to your terminal. This may not seem useful, but in the following section
we will see the benefit of this:

```bash
echo hello world
```
