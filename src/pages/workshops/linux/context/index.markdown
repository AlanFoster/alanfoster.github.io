---
title: Linux Workshop - History
---

## What is Linux?

Linux is a Kernel, it is one piece of an operating system.

## What is an operating system?

At a high level, an operating system is composed of two main parts:

- The kernel - Responsible for providing programs access to hardware, CPU, RAM, I/O Devices, etc.
- System programs - Browsers, Shells, Word Processors, Visual programs, etc.

## A brief history

### 1969

Multiplexed Information and Computing Service (**Multics**), an early operating system designed
for multiprogramming, and providing access to multiple user terminals on a single machine.

### 1970s

In 1970 two Multics developers, Ken Thompson and Dennis Ritchie begin work on a stripped down version
of the Multics operating system. In 1973 the fourth edition of **Unix** had now been rewritten to use C,
a language principally developed by Dennis Ritchie. This was the first step of an operating system
no longer using assembly code, and provided portability via a high level language.

Various Unix distros were initially shared with universities, but eventually became proprietary and closed
source.

**Berkeley Software Distribution (BSD)** developed during this time. Example descenants of BSD include FreeBSD and OpenBSD.

### 1983

Richard Stallman started **GNU** was an attempt to create a _free_ operating system. The goal was to implement and release
the source code for newly created operating system software such as:

- A shell - Bash
- A compiler - GNU C Compiler (GCC)
- Editors - EMacs
- Kernel - HURD
- Various other userland components

GNU is a recursive acronym standing for GNU is not Unix.

## 1988

Portable Operating System Interface (**POSIX**) defined to help maintain compatibility between
operating systems. It is not an operating system itself, but a set of [standards](http://pubs.opengroup.org/onlinepubs/9699919799/)
that should be followed by operating systems.

If you are planning to write any scripts that work across multiple versions of
UNIX, try to aim for the functionality defined within POSIX as it is more likely to work across
multiply systems.

At a high level POSIX defines core functionality such as:

- Shell Language - `a=2; b=5; echo $(($a + $b))`
- Built-In Command Line utilities - `cd`, `ls`, `mkdir`, `grep`, etc
- Environment Variables - `$HOME`, `$USER`, `$PATH`, etc
- Consistent filenames and directory Structure
- A core set of C functions

### 1990s

The **linux kernel** is developed and released publicly by a Finnish undergraduate student Linus Torvalds.
The source code is available from the first day. The name `Linux` is clever word play on `Unix` and `Linus`

In 1992 the Linux Kernel is released together with the userland components offered by GNU and branded **GNU/Linux**.

## 2000s

Darwin Operating System developed by Apple Inc, based on BSD.

## A brief Reflection

- 1960s: Multics
- 1970s: Unix
- 1983: GNU Operating System
- 1988: Posix Standards
- 1991: Linux Kernel
- 1992: Linux Kernel combined with GNU - GNU/Linux.
  Richard Stallman will cry if you refer to Linux as a full operating system
