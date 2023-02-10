# Yochem van Rosmalen

# Posts
{{ range .RegularPages }}
- [{{ .Title | markdownify }} ({{ time.Format "2006/01/02" .Date }})]({{ .RelPermalink }})
{{ end }}
