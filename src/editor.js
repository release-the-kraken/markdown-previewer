import React from 'react';
import Preview from "./preview";
import marked from "marked";

const initialContent = `# Man creates an h1 level heading!!

## Experts agree: h2 headings go below

Learn all about the new heading hype [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

And now for something completely different. Code.

The code \`var larch = "The Larch"\`.


Even more code:
\`\`\`
while(true){
	document.write("The Larch");
}
\`\`\`

- a list of larches
  - The Larch
     - **The Larch**


> Quotes are intrinsic elements of larches.

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class Editor extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			input: initialContent
		}
	this.handleInput = this.handleInput.bind(this);
	this.markedContent = this.markedContent.bind(this);
	}
	handleInput(event){
		this.setState(
		{input: event.target.value}
		)
	}
	markedContent(){
		const renderer = new marked.Renderer();
		renderer.link = ( href, title, text ) => `<a target="_blank" href="${ href }" title="${ title }">${ text }</a>`;
      return {
        __html: marked(this.state.input, {
          renderer: renderer,
          gfm: true,
          breaks: true,
          smartypants: false
        })
      }
	}
	render(){
		return(
			<div id="wrapper">
      	<section id="editor">
      		<textarea id="editor-textarea" onChange={this.handleInput} >
      		  {this.state.input}
      		</textarea>
      	</section>
				<section id="preview">
      		<Preview markedContent={this.markedContent()} />
      	</section>
      </div>
		)
	}
}
export default Editor;
