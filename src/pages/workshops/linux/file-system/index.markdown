---
title: Linux Workshop - Filesystem
---

## Terminology

- Directory - Folders within your operating system
- Volume - Drives with file systems
- File System - Saving/Retrieving of data structures stored within a volume

## File systems

There are numerous file systems available, for instance:

- Fourth Extended Filesystem (EXT4) - Debian GNU/Linux, Ubuntu
- File Allocation Table (Fat) - Windows
- New technology File System (NTFS) - Windows
- Apple File System (APFS) - iOS

This workshop will specifically make use of EXT4 within its examples.

## The hierarchical File System

Linux provides a hierarchical file system. The root of the tree is `/`. There is a relationship between parent directories, and children files,
just like a family tree:

![](./filesystem.png "Image depicting the relationship of children files within a file system")

You can view this yourself with:

```bash
# Advanced Package Tool (apt)
# Used to download dependencies
apt-get update
apt-get install tree

# Change directory to /
# this is the root of the file system
cd /

# Run `tree` on the current directory
tree .
```

Your output should be similar to the follow, albeit with more files:

```bash
.
├── bin
│   ├── bash
│   ├── ls
├── home
│   └── user1
│       └── ...
├── media
├── mnt
├── opt
│   └── aws
└── var
    └── yp
```

## Conventions

It's important to be aware of some of the conventions within a unix file system. For instance:

- Case sensitivity - `myFile` and `MyFile` are different files
- Avoid spaces - File names should _not_ contain spaces
- `/` - refers to the root of the filesystem
- `~` - refers to your home directory
- `.` - The current directory
- `..` - The parent directory

## Exploring

Let's open the terminal and begin typing:

You can view a given directory contents with `ls` command:

```bash
$ cd /
$ ls

bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var

# Home directory
$ cd ~

# Print Working Directory
$ pwd
/root
```

You can additional view more details with `ls` using the `-l` option, which will list the directory contents in long format:

```bash
$ cd /bin
$ ls -l

root@7ec8a8962c23:/bin# ls -l
total 7364
-rwxr-xr-x 1 root root 1037528 May 16  2017 bash
-rwxr-xr-x 1 root root   52080 Mar  2  2017 cat
-rwxr-xr-x 1 root root   56112 Mar  2  2017 chmod
-rwxr-xr-x 1 root root   64368 Mar  2  2017 chown
-rwxr-xr-x 1 root root  151024 Mar  2  2017 cp
-rwxr-xr-x 1 root root  154072 Feb 17  2016 dash
-rwxr-xr-x 1 root root   97408 Nov 21  2016 ps
-rwxr-xr-x 1 root root   31472 Mar  2  2017 pwd
lrwxrwxrwx 1 root root       4 Feb 17  2016 sh -> dash
```

Initially this output seems overwhelming, but let's take an example line from `ls -l` and discuss it further:

```
drwxr-xr-x   2 root root 4096 Apr 12 10:27 bin
```

```
-    rwx  r-x  r-x    1 root root 1037528 May 16  2017 bash
^
|    ^^^^^^^^^^^^^^
|         |
|     Permissions
|       1. Users
|       2. Owners
|       3. World
|
+-------------- File type, one letter character
```

The first character shows what type of file this is:

- `-` = File
- `d` = Directory
- `l` = Symbolic Link
- `s` = Socket
- `p` = Named Pipes

Next the permissions are shown. There are three characters each for setting the permissions of:

- users
- owners
- world

And the corresponding characters are:

- **r**ead
- **w**rite
- e**x**ecute

## Chmod

You can use chmod to change the permissions of a given file.

## Recap

Let's recap with a comic by [Julia Evans](http://drawings.jvns.ca/)

![](./ls-details.png "Comic explaining the use of permissions")
