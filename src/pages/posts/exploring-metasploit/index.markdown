---
layout: post
title:  Exploring metasploit
date:   2019-12-13 18:33:53
category: post
---

Let's have a quick explore of [metasploit](https://www.metasploit.com/), a security tool that helps you test security vulnerabilities.

<!-- end-excerpt -->

### What is it?

- Payloads
- Scanners

### How to run it

The easiest way to get up and running with metasploit is to download and run a Kali virtual machine.

Once downloaded you should be able to run the metasploit console:

```bash
msfconsole
```

### What to run against?


#### Metasploitable

[metasploitable3](https://github.com/rapid7/metasploitable3) is a VM built from the ground up that is intentionally vulnerable. The easiest way to get up and running is to grab the vagrant file which uses prebuilt images:

```
mkdir metasploitable3-workspace
cd metasploitable3-workspace
curl -O https://raw.githubusercontent.com/rapid7/metasploitable3/master/Vagrantfile
```

At the time of writing, there are two VM definitions to choose from:

```
vagrant up ub1404
vagrant up win2k8
```

### Useful skills

#### Helping yourself

##### Metasploit commands

Within the metasploit console, you can use the `help` command:

```msf5
msf5 > help

Core Commands
=============

    Command       Description
    -------       -----------
    ?             Help menu
    banner        Display an awesome metasploit banner
    cd            Change the current working directory
    color         Toggle color
    connect       Communicate with a host

    ...
```

To learn about a metasploit command:

```msf5
help db_nmap
```

To learn about a specific metasploit module:

```msf5
msf5 > info auxiliary/gather/jenkins_cred_recovery

       Name: Jenkins Domain Credential Recovery
     Module: auxiliary/gather/jenkins_cred_recovery
    License: Metasploit Framework License (BSD)
       Rank: Normal

Provided by:
  Th3R3p0
  sinn3r <sinn3r@metasploit.com>

Check supported:
  Yes

Basic options:
  Name           Current Setting  Required  Description
  ----           ---------------  --------  -----------
  JENKINSDOMAIN  _                yes       The domain where we want to extract credentials from
  Proxies                         no        A proxy chain of format type:host:port[,type:host:port][...]
  RHOSTS                          yes       The target address range or CIDR identifier
  RPORT          8080             yes       The target port (TCP)
  SSL            false            no        Negotiate SSL/TLS for outgoing connections
  TARGETURI      /                yes       The base path for Jenkins
  VHOST                           no        HTTP server virtual host

Description:
  This module will collect Jenkins domain credentials, and uses the
  script console to decrypt each password if anonymous permission is
  allowed. It has been tested against Jenkins version 1.590, 1.633,
  and 1.638.

References:
  https://www.exploit-db.com/exploits/38664
  http://www.th3r3p0.com/vulns/jenkins/jenkinsVuln.html
```

Or if you are already interacting with a module:

```msf5
msf5 > use scanner/http/jenkins_enum
msf5 auxiliary(scanner/http/jenkins_enum) > info

       Name: Jenkins-CI Enumeration
     Module: auxiliary/scanner/http/jenkins_enum
    License: Metasploit Framework License (BSD)
       Rank: Normal

Provided by:
  Jeff McCutchan

Check supported:
  Yes

Basic options:
  Name       Current Setting  Required  Description
  ----       ---------------  --------  -----------
  Proxies                     no        A proxy chain of format type:host:port[,type:host:port][...]
  RHOSTS     192.168.100.6    yes       The target address range or CIDR identifier
  RPORT      80               yes       The target port (TCP)
  SSL        false            no        Negotiate SSL/TLS for outgoing connections
  TARGETURI  /jenkins/        yes       The path to the Jenkins-CI application
  THREADS    1                yes       The number of concurrent threads
  VHOST                       no        HTTP server virtual host

Description:
  This module enumerates a remote Jenkins-CI installation in an
  unauthenticated manner, including host operating system and Jenkins
  installation details.
```

##### Searching for modules



##### Man pages

When you're not sure what a particular system command does, be sure to check the `man` pages:

```
man nmap
```

This should give you manual for the given command. It's worth noting that there are various pages of man pages available,
which can be accessed via the corresponding index:

```
man 2 nmap
```

The man pages are generally split into the following sections:

1. General commands
2. System calls
3. Library functions, covering in particular the C standard library
4. Special files (usually devices, those found in /dev) and drivers
5. File formats and conventions
6. Games and screensavers
7. Miscellanea
8. System administration commands and daemons

For instance, if you wanted to access details about system calls:

```
man 2 read
```

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

* Press `h` to display the list of available commands
* Use `q` to quit

Extra: Various commands within `less` are derived from `vi` and `more`

* Search with `/`, and use `n` to find the next occurrence
* Use `g` to go to the start of the man pages
* use `G` to go to the end of the man page


#### Network Discovery

```
db_nmap 192.168.100.6
db_nmap -p1-65535 192.168.100.6
```



### Ubiqutous language

- ASLR - Address space layout randomization is a technique to randomize where programs are loaded into memory to guard against buffer overflow attacks
- IDS - Intrusion Detection System
- IPS - Intrusion Protection System
- Pivoting - A technique to
- SEH Overwrites - Structured Exception Handler Overwrites

### Useful links


- [meatsoffensive security - metasploit unleashed](https://www.offensive-security.com/metasploit-unleashed/)
- [Metasploit Minute](https://www.hak5.org/shows/metasploit-minute)
