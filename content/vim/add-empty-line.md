---
title: "Add empty lines above or below"
date: 2023-08-30
draft: false
---

I like having empty lines in my code. It enables the programmer to group parts
of code that belong together.

Before I used Vim, I would smash the enter button
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

And for the NeoVim users that are also lua-config-purists like me:
```
map("n", "oo", function()
	local repeated = vim.fn["repeat"]({ "" }, vim.v.count1)
	local line = vim.api.nvim_win_get_cursor(0)[1]
	vim.api.nvim_buf_set_lines(0, line, line, true, repeated)
end, {})

map("n", "OO", function()
	local repeated = vim.fn["repeat"]({ "" }, vim.v.count1)
	local line = vim.api.nvim_win_get_cursor(0)[1]
	vim.api.nvim_buf_set_lines(0, line - 1, line - 1, true, repeated)
end, {})
```
