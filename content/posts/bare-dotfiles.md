---
title: 'Bare Dotfiles Repository: how to do "sparse checkouts"'
draft: false
date: 2026-02-03
---

⚠️ _This post is still work-in-progress._

One of the most elegant approaches to managing "dotfiles" (configuration files
for CLIs) is by using a [bare git repository][bare], to my knowledge first
introduced by Nicola Paolucci on the [Atlassian website][dotfiles]. You should
definitely read the short tutorial if you haven't, but it basically advices you
to create a bare repository and a shell alias to reference that repository:

```bash
$ git clone --bare <repo_url> ~/Documents/dotfiles
$ alias dot='git --git-dir="$HOME/Documents/dotfiles" --work-tree="$XDG_CONFIG_HOME"'
```

Or for fish:

```fish
function dot
  git --git-dir="$HOME/Documents/dotfiles" \
    --work-tree="$XDG_CONFIG_HOME" $argv
end
```

**Note**: I've adapted the alias slightly to work just for `$XDG_CONFIG_HOME`
(usually `~/.config`) as I like to keep my `$HOME` clean [^1].

After the bare clone, no code is checked out yet. That means the work tree (our
config folder) is not touched yet. If we would continue the examples from the
blog post, we would checkout the main branch with `dot checkout` which would
possibly fail with the message that files could be overwritten.

To solve this problem, I recommend to create a new [orphan branch][orphan] and
manually checking out the configs you need on this specific machine. For
example, to only use my Neovim config on this machine:


```bash
$ dot switch --orphan $(hostname)
$ dot restore -s main -- nvim
```

The `--orphan` flag is optional, but it prevents that the first commit to the
new branch is a "I deleted almost everything except these configs" commit.


## Bonus: Ignore Local Config

You might have noticed that I don't set `showUntrackedFiles` to false. This is
by design. I don't want to forget to track config files of new CLIs. If I
really want to ignore them, I add them to Git's local ignore file
`$GIT_DIR/info/exclude`. Here's a Git alias I use for it:

```bash
$ config config alias.exclude "!echo "${1?no argument}" >> $(git rev-parse --git-path info/exclude) && :"
$ config exclude htop
```

[bare]: https://git-scm.com/docs/git-clone.html#Documentation/git-clone.txt---bare
[dotfiles]: https://www.atlassian.com/git/tutorials/dotfiles
[orphan]: https://git-scm.com/docs/git-switch#Documentation/git-switch.txt---orphannew-branch
[^1]: See [my post on config files in `$HOME`](https://yochem.nl/posts/xdg/)
