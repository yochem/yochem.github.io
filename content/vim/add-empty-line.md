---
title: "Add empty lines above or below"
date: 2023-08-30
draft: false
---

I like having empty lines in my code. It enables the programmer to group parts
of code that belong together.

Before I used Vim (should we call this B.V.?), I would smash the enter button
to add an empty line below, and then use the arrows to get back to the right
spot on the original line. In my first weeks of using Vim, I did the same.
Okay, I used `o` to bring me to the line below in insert. But then I had to go
back to normal mode, press `k` to go one line up, and find the exact location
again. So my key presses would look like this:

```
o<esc>kwwww
```

There must be a Vim way of doing this. I mean, everyone does this from time to
time right? I searched online and found the perfect remap:

```
nnoremap oo m`o<Esc>``
```

The idea is quite simple:
1. `m'` creates a 'previous context mark'
2. `o` begins a new line below the cursor and enter insert mode
3. `<Esc>` enters normal mode
4. ` `` ` jumps back to previous context mark

Of course, the same is added to work with `O` (empty line above):

```
nnoremap OO m`O<Esc>``
```

And now, I can't use Vim without this remap. It's even in my [minimal
config](https://gist.github.com/yochem/69babc7f634d0ee4bfbeca771e3f9366#file-comfy-vim-L22-L23
"GitHub Gist with my minimal Vim configuration").

And here are the snippets for the people that use Lua in Neovim:

```
vim.keymap.set("n", "oo", "m`o<Esc>``")
vim.keymap.set("n", "OO", "m`O<Esc>``")
```

Or for the Lua-in-nvim purists:
```
vim.keymap.set("n", "oo", function ()
	local cur = vim.api.nvim_win_get_cursor(0)
	vim.api.nvim_buf_set_mark(0, "`", cur[1], cur[2], {})
	vim.cmd.norm('o')
	vim.api.nvim_win_set_cursor(0, vim.api.nvim_buf_get_mark(0, "`"))
end)
```
