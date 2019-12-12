---
layout: post
title:  Writing a simple x86 BIOS bootloader
date:   2019-12-01 14:33:53
category: post
---

This article explains how to write a very simple x86 bootloader script which can be used as the entry point to running a custom operating system. It assumes some knowledge of assembly, but hopefully all required knowledge should be available within this stand-alone article.

<!-- end-excerpt -->

TODO: Confirm about the master boot record details

### Boot Process

When an x86 computer turns on, it executes firmware located in motherboard ROM.

There are two main firemware standards:

- BIOS - "Basic Input/Output System" - Older, simpler, but widely supported
- UEFI - "Unified Extensible Firmware Interface" - Modern, with more features

This article will describe in detail how to write a BIOS bootloader, and does not discuss UEFI.

### BIOS Boot

When an x86 cpu boots, the BIOS is loaded from firmware into memory. It performs various operations such as RAM detection, and hardware detection/initializations - before finally attempting its boot sequence. During the boot sequence, the BIOS attempts to find a boot disk which will load the operating system - via a _bootstrap_ program.

The BIOS generally checks for bootable disks in a specific order. This is potentially user-configurable, known as its bootdisk hierarchy. For instance, checking in the order: floppy disks, CD-ROM drive, then the first hard drive. The BIOS may handle each disk medium differently. For floppy disks the first 512 bytes are read into memory at a specific location, but extra steps may be required for hard drives which contain master boot record information, and CD-ROMs can be loaded entirely into memory and used as a RAM disk. Regardless of medium, the bootloader script will eventually be loaded at address 0x7C00.

As the BIOS iterates through the disk hierachy it attempts find the **first readable 512 bytes** (called its _boot sector_) which ends with the **magic number 0xAA55**. Once found, the BIOS now gives control to the code which has been copied at address location 0x7C00.

Why the magic number 0xAA55? This the binary equivalent: 101010100101010. This may also be used to determine if your system is big endian or little endian - as it will read as either 0xAA55 or 0x55AA.

### Environment

When the BIOS hands over control to your bootloader, the CPU is in 16-bit Real Mode, and the program counter will be running at physical address 0x7c00. Real mode was the only mode before the 80286 Intel processor which introduced protected mode. All processors initially run in real mode, for backwards compatability purposes.

In **real mode** you can:

- Access BIOS subroutines
- Access 16 bits
- The CPU can only only 1mb of data

In **protected mode** you can:

- Use paging, and virtual memory
- Access 32 bits
- Prevent illegal writes to other program's memory that are running at the same time
- Register fault handlers for faulting programs
- Access four privilege levels. Ring 0 being the most unrestricteed, and ring 3 being the most restricted

#### Simple Bootloader example

The following examples are written using the nasm assembler.

```bash
apt-get install nasm
```

Create a new file called `boot.asm`:

```nasm
; Simple bootloader example for x86 systems that should print out a simple message to the user

bits 16     ; We're dealing with 16 bit code
org 0x7c00  ; Inform the assembler of the starting location for this code

boot:
    mov si, message ; Point SI register to message
    mov ah, 0x0e    ; Set higher bits to the display character command

.loop:
    lodsb       ; Load the character within the AL register, and increment SI
    cmp al, 0   ; Is the AL register a null byte?
    je halt     ; Jump to halt
    int 0x10    ; Trigger video services interrupt
    jmp .loop   ; Loop again

halt:
    hlt         ; Stop

message:
    db "Howdy!", 0

; Mark the device as bootable
times 510-($-$$) db 0 ; Add any additional zeroes to make 510 bytes in total
dw 0xAA55 ; Write the final 2 bytes as the magic number 0x55aa, remembering x86 little endian
```

You can compile the above assembly with:

```bash
nasm -f bin boot.asm -o boot.bin
```

At the heart of the above bootloader, are various calls to the BIOS to request printing characters to the screen.
A simplified example of printing to the screen can be shown:

```nasm
mov ah, 0x0e    ; Set higher bits to the display character command
mov al, 'a'     ; Set the lower bits to our character
int 0x10        ; Call BIOS video service interupt, which will output 'a'
```

### Emulating x86 hardware

It's possible to write the compiled binary above to a disk, and attach it to a real computer. It can instead be easier to make use of x86 emulators, such as **Bochs** or **Qemu**. These emulators will do exactly everything that a real computer would do, but everything is **simulated using software** instead of hardware.

#### Qemu

Firstly install qemu:

```bash
apt-get install qemu qemu-kvm
```

Within the same directory as your code:

```bash
nasm -f bin boot.asm -o boot.bin
qemu-system-x86_64 -fda boot.bin
```

After running you should see the simple message appear:

![](./howdy-qemu.png "Example of howdy! being rendered to the qemu emulator")

#### Bochs

Firstly install bochs:

```bash
apt-get install bochs bochs-x
```

Within the same directory as your code, create a file `bochsrc.txt`:

```yaml
megs: 32
romimage: file=/usr/share/bochs/BIOS-bochs-latest, address=0xfffe0000
vgaromimage: file=/usr/share/bochs/VGABIOS-lgpl-latest
floppya: 1_44=boot.bin, status=inserted
boot: a
log: bochsout.txt
logprefix: %t-%e-@%i-%d
mouse: enabled=0
display_library: x, options="gui_debug"
```

Now you can run:

```bash
nasm -f bin boot.asm -o boot.bin
bochs
```

After running you should see the simple message appear:

![](./howdy-bochs.png "Example of howdy! being rendered to the bochs emulator")

### Entering protected mode

To enter protected mode you must:

- Register 3 entries in the GDT (Global Descriptor Table)
    - null descriptor
    - code segement descriptor
    - data segment descriptor
- Enable the A20 line, or addressing line 20, so that the CPU can access beyond 1mb of data

```nasm
; Simple bootloader example for x86 systems that should print out a simple message to the user

bits 16     ; We're dealing with 16 bit code
org 0x7c00  ; Inform the assembler of the starting location for this code

boot:
    mov si, message ; Point SI register to message
    mov ah, 0x0e    ; Set higher bits to the display character command

.loop:
    lodsb       ; Load the character within into the AL register, and increment SI
    cmp al, 0   ; Is the AL register a null byte?
    je halt     ; Jump to halt
    int 0x10    ; Trigger video services interrupt
    jmp .loop   ; Loop again

halt:
    hlt         ; Stop

message:
    db "Howdy!", 0

; Mark the device as bootable
times 510-($-$$) db 0 ; Add any additional zeroes to make 510 bytes in total
dw 0xAA55 ; Write the final 2 bytes as the magic number 0x55aa, remembering x86 little endian
```

### x86/nasm Cheat sheet

Register names:

1. Accumulator Register (AX)
2. Counter Register (CX)
3. Data Register (DX)
4. Base Register (DX)
5. Stack Pointer (SP)
6. Stack base Pointer (BP)
7. Source Index (SI)
8. Destination Index (DI)

Global Descriptor Table:
- Supplied by the kernel
- Defines the various memory segments, what their size is, what they can accesss, what level they

Interrupt Descriptor Table:
- Supplied by the kernel
- Used to map interrupt vectors to functions, which handle events. i.e. Keydown

String instructions:
- The first three letters specify what the instruction, the suffix `S` stands for String - MOVS, LODS, STOS, CMPS, SCAS.
- LOD - Load data from the string pointed to ESI into EAX
- STO - Store data from EAX into the string pointed to by EDI
- SCA - Scans the data in the string pointed to by EDI to EAX
- ESI and DSI are incremented if the direction flag is set, otherwise decremented

BIOS Calls:
- Generally set the AH register

Labels:
- A global label is defined as `name:`
- A label prefixed with `.` is local to the above global label, i.e. `.loop`

Pseudo-instructions

- DB, DW, DD, DQ, DT, DO, DY and DZ declare initialized data in the output file.
- $ evaluates to the assembly position at the beginning of the line containing the expression
- $$ evaluates to the beginning of the current section; so you can tell how far into the section you are by using ($-$$)

### Useful links

- [Writing a Tiny x86 Bootloader](http://joebergeron.io/posts/post_two.html)
- [MIT Operating System Engineering](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-828-operating-system-engineering-fall-2012/index.htm)
- [Writing a Rust OS](https://os.phil-opp.com/)
- [Nasm overview](https://nasm.us/doc/nasmdoc3.html)
- [x86 Bootloader Wiki](https://en.wikibooks.org/wiki/X86_Assembly/Bootloaders)
- [Writing an x86 bootloader](http://3zanders.co.uk/2017/10/13/writing-a-bootloader/)
- [Summary of x86 String instructions](https://medium.com/@ophirharpaz/a-summary-of-x86-string-instructions-87566a28c20c)
- [Unix Acronym List](http://www.roesler-ac.de/wolfram/acro/credits.htm#1)
- [Available x86 BIOS calls](https://en.wikipedia.org/wiki/BIOS_interrupt_call)
- [x86 Registers](https://en.wikibooks.org/wiki/X86_Assembly/X86_Architecture)
