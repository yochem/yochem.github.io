---
title: {{ .Title }}
{{- with .Date }}
date: {{ time.Format "2006-01-02" . }}
{{- end }}
---
{{ .RawContent }}
