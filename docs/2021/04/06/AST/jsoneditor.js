// create the editor
const container = document.getElementById("jsoneditor")
const options = {
    language: 'zh-CN'
}
const editor = new JSONEditor(container, options)

// set json
const initialJson = [
    {
        type: 'Identifier', value: 'const'
    }
]
editor.set(initialJson)

editor.setMode('tree')

// get json
const updatedJson = editor.get()


{% raw %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.3.0/jsoneditor.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/jsoneditor/9.3.0/jsoneditor.css" rel="stylesheet"></link>

<div id="jsoneditor" style="width: 100%;"></div>

<script src="jsoneditor.js"></script>
{% endraw %}
