import React, { useState, Component } from "react"
import ReactQuill from "react-quill"

import 'react-quill/dist/quill.snow.css'
import "./Quill.scss"

let Quill = () => {
    const [value, setValue] = useState('')

    let modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{align: ''}, {align: 'center'}, {align: 'right'}, {align: 'justify'}],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video'],
          ['clean']
        ],
      }

      let formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'align',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]

    return (
        <ReactQuill theme="snow" 
                    className="quill_editor"
                    modules={modules}
                    formats={formats}
                    value={value}
                    onChange={setValue}>
        </ReactQuill>
    )
}

export class QuillClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            html: ""
        }
    }

    modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{align: ''}, {align: 'center'}, {align: 'right'}, {align: 'justify'}],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video'],
          ['clean']
        ],
      }

      formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'align',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]

      onChange = (content, delta, source, editor) => {
          this.setState({
              html: content
          })
      }

    render() {
        console.log(this.state)
        return (
            <ReactQuill theme="snow"
                        className="quill_editor"
                        modules={this.modules}
                        formats={this.formats}
                        value={this.state.html}
                        onChange={this.onChange}>
            </ReactQuill>
        )
    }
}

export default Quill