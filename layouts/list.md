---
title: {{ .Title }}
---
{{ .RawContent }}

## {{ title .Section }}
{{ range where site.RegularPages "Section" .Section }}
{{- if not .Params.Unlisted }}
- [{{ .Title }}]({{ .RelPermalink }}) ({{ time.Format "2006-01-02" .Date }})
{{- end }}
{{- end }}
