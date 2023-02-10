# Yochem van Rosmalen

{{ .RawContent }}
## Posts

{{ range (where .Site.RegularPages "Section" "posts") -}}
- [{{ .Title | markdownify }} ({{ time.Format "2006/01/02" .Date }})]({{ .RelPermalink }})
{{ end }}