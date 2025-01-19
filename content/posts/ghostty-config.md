---
title: Editing Ghostty Config in Neovim
date: 2024-12-27
draft: false
---

Finally, the new-kid-on-the-block of terminal emulators,
[Ghostty](https://ghostty.org), has made its public debut! As someone who
missed out on the beta program, I was eagerly counting down the days and jumped
in as soon as it was released.

When I began configuring Ghostty, I noticed it uses its own simple
configuration format—essentially `key = value` pairs. Naturally, I tried
setting the filetype to `ini` with `:set ft=ini`, but the highlighting didn’t
quite hit the mark. So, I thought, “Why not write a custom syntax file?”
Perhaps I could even upstream it to [vim/vim](https://github.com/vim/vim). But,
surprise! The Ghostty team had already done the hard work for me.

Ghostty generates a complete set of Vim/Neovim support files during its build
process: an
[`ftdetect`](https://neovim.io/doc/user/usr_41.html#_filetype-detection), an
[`ftplugin`](https://neovim.io/doc/user/usr_41.html#_writing-a-filetype-plugin),
and a [`syntax`](https://neovim.io/doc/user/syntax.html#_2.-syntax-files) file.
These can be added to Vim’s runtimepath for automatic integration.

On macOS, these files are bundled in `/Applications/Ghostty.app/`.
On Linux, it’s likely in `/usr/share/ghostty` or
`/usr/share/vim`, I'm not sure. But you can always use the
`$GHOSTTY_RESOURCES_DIR` environment variable as a platform-agnostic way to
locate them.

Then I discovered that changing the runtimepath yourself when you use Lazy.nvim
is not that straightforward. So, I took the simpler route and just treated it
as a local Lazy plugin:

```lua
return {
  dir = vim.env.GHOSTTY_RESOURCES_DIR .. "/../vim/vimfiles",
  lazy = false, -- Ensures it loads for Ghostty config detection
  name = "ghostty", -- Avoids the name being "vimfiles"
  cond = vim.env.GHOSTTY_RESOURCES_DIR ~= nil, -- Only load if Ghostty is installed
}
```

Tada! Thanks to the great work by the authors, this now provides syntax
highlighting for the Ghostty config file. Bonus points:
[`<C-x><C-o>`](https://neovim.io/doc/user/insert.html#i_CTRL-X_CTRL-O)
completes the Ghostty options!
