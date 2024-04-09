---
title: "Start cleaning your $HOME!"
date: 2023-10-10
draft: true
---

In this post I introduce the problem of configuration files littering your home
folder, and explains the steps I took to regain control of the content of my
home folder.

## Why in the home folder?

Many software programs create files on your file system. These can be
for configuration, storing data or log-files. Historically, and probably
because of the lack of a standard, many programs put all their files in your
home folder.

My guess to why this would be the case, is that programs want their files on a
per-user basis, and $HOME is the directory which is most guaranteed to exist.

## A cluttered home

## XDG base directory specification

## _MY_ home folder

I want to be more extreme in my approach to preventing programs writing to my
home folder. Every program should consider the case where the user _has_ no
home folder or at least not a writable one. So, that's exactly what I did.

So I decided to `chmod -w`'d my home folder 😅. This means it's not writable.
Programs cannot create/remove file and folders in it.

```
$ stat -f '%Sp' $HOME
dr-xr-xr-x
```

The `stat` program reports that the home directory is only readable and
executable, and not writable, for all users.

Of course, there might be cases where I _do_ want to create files in my home
folder. This is still very easy to do:

```
$ chmod +w ~
$ <commands that create files in ~>
$ chmod -w ~
```

Done!

## One problem though...

Okay, I have to admit that having a non-writable home directory does not come
without problems. One of the bigger problems is that the shell config is also
moved, but this is where the right location is set. This means that the shell
does not _know_ the location of the config, before loading the config. On
MacOS, this can be fixed by setting the environment variable using
`LaunchAgents`. We can use this to specify code that has to be run upon
booting.
