---
layout: workshop
title:  Networks
date:   2018-03-06 09:33:53
category: workshop
workshop: /workshops/networks-and-protocols/workshop-goals/
published: false
---

#### Workshop Goals

At the end of this workshop you will learn at a high level the following concepts:

* What are protocols?

* Protocols are generally associated with ports
- Well known are <1023
- Above >1024
* OSI Model
* DNS
* HTTP Protocol
* ICMP
* IP
* TCP Protocol
* UDP Protocol
* Tools
  * PostMan
  * nmap
  * netcat
  * openssl
  * Scapy
  * Netcat
  * Dig
  * lsof
  * Wireshark / BurpSuite / nmap / Charles
  * Network utility (mac)
* Security
  - Slowloris
  - Man in the middle
  - 
* HTTPS Protocol
* Websockets Protocol

SMTP

## 7 Layer ISO Model

### (7) Application Layer
### (6) Presentation Layer
### (5) Session Layer

### (4) Transport Layer

TCP / UDP

### (3) Network Layer

#### Internet Protocol (IP)

IP allows for embedded data, and can carry the contents of TCP and UDP protocols.

####  Internet Control Message Protocol (ICMP)

ICMP is used for sending control messages in a network, for instance it can be used by routers to communicate error messages.
Common control messages that can be specified by ICMP are:

- Communication Difficulties - network/host/port/etc unreachable
- Router Discovery
- Echo Request/Reply (Ping) 

A common use of ICMP is the Ping functionality. Ping is used to determine if a particular network host is available.
This happens in the following stages:

- We _ping_ a host or gateway with the _echo request_ control message
- We wait for a _echo reply_ control message from the host or gateway

Sometimes this request/reply approach can be referred to as _"ping"_ and _"pong"_.

For instance you can use this



At this layer, routers exist. It is for this reason that the IP/ICMP payloads contain _routing_ information,
such as Source/Destination IP address,  

### (2) Data Link Layer



### (1) Physical Layer


---


## Domain Name System - DNS

When you enter in an address such as `example.com` into your browser, how do we know what IP address that resolves to?
Keeping track of this information is the responsibility of a DNS server.

We can use the `host` command as an example:

```bash
$ host example.com

example.com has address 93.184.216.34
example.com has IPv6 address 2606:2800:220:1:248:1893:25c8:1946
``` 

The Domain Name System (DNS) keeps track of all information relating to a domain, even such information as how an address
such as `target_user@example.com` is resolved.





## Net Cat

Net cat is a useful utility for all things UDP and TCP. For instance it can open UDP/TCP connections, or listen on ports,
as well as handle IPv4 and IPv6.

Common usage is:

```bash
$ nc <host> <port>
```

At the time of writing the default protocol, if not specified, is TCP.

### HTTP Example

HTTP is a protocol that is implemented over TCP. Therefore it is very easy to interact with a website such as `example.com`
using netcat. In the following example, remember to press enter again:

```bash
$ nc example.com 80
GET /index.html HTTP/1.1
Host: example.com

```

This should generate a response such as:

```bash
HTTP/1.1 200 OK
Accept-Ranges: bytes
Cache-Control: max-age=604800
Content-Type: text/html
Date: Sun, 29 Apr 2018 19:56:32 GMT
Etag: "1541025663"
Expires: Sun, 06 May 2018 19:56:32 GMT
Last-Modified: Fri, 09 Aug 2013 23:54:35 GMT
Server: ECS (dca/53DB)
Vary: Accept-Encoding
X-Cache: HIT
Content-Length: 1270

<!doctype html>
... Body ommitted ...
```

### UDP Listener Example

To create a server UDP server 

```bash
nc -u -l 8125
```

The `nc` options are:

- `-u` - Use UDP rather than the default TCP
- `-l` - Listen on port 4444

You can verify that the server is running on a separate tab with:

```bash
$ netstat -a -n | grep 4444

udp4       0      0  *.4444                 *.*
```

### UDP Client Example

If you wish to send data to a UDP server you can do so with:

```bash
$ nc -u localhost 4444
```

You should now see in the initial tab that you opened that the data is coming through as expected.

## TCP Listener Example

```bash
$ nc -l localhost 4444
```

Extra:

https://www.digitalocean.com/community/tutorials/how-to-use-netcat-to-establish-and-test-tcp-and-udp-connections-on-a-vps

## Packet Crafting

We can create packets in various ways, and there's more than likely a way to do it in your language.
For now we'll make use of Scapy, a python library. Scapy can be used in two ways:

- An interactive shell
- A python library

Let's use scapy.

```bash
pip install scapy
```

```python

```




2.5.  Relation to Other Protocols

  The following diagram illustrates the place of the TCP in the protocol
  hierarchy:


       +------+ +-----+ +-----+       +-----+
       |Telnet| | FTP | |Voice|  ...  |     |  Application Level
       +------+ +-----+ +-----+       +-----+
             |   |         |             |
            +-----+     +-----+       +-----+
            | TCP |     | RTP |  ...  |     |  Host Level
            +-----+     +-----+       +-----+
               |           |             |
            +-------------------------------+
            |    Internet Protocol & ICMP   |  Gateway Level
            +-------------------------------+
                           |
              +---------------------------+
              |   Local Network Protocol  |    Network Level
              +---------------------------+

                         Protocol Relationships

                               Figure 2.

  It is expected that the TCP will be able to support higher level
  protocols efficiently.  It should be easy to interface higher level
  protocols like the ARPANET Telnet or AUTODIN II THP to the TCP.


## TPP Handshake
