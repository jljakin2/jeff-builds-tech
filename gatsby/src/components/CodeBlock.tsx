import React from "react";
import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import styled from "styled-components";

Refractor.registerLanguage(js);

const CodeBlockContainerStyles = styled.aside`
  display: grid;
  grid-template-rows: max-content;

  width: 50%;

  .header {
    background: #224864;
    color: #ffbb00;
    border-radius: 4px 4px 0 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem 0.75rem 2rem;
  }
`;

const CodeBlockStyles = styled.div`
  code[class*="language-"],
  pre[class*="language-"] {
    color: #fff;
    font-family: Inconsolata, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.6;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    border-radius: 0 0 4px 4px;
  }
  /* pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #193549;
  }
  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    text-shadow: none;
    background: #193549;
  } */
  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }
  /* Code blocks */
  pre[class*="language-"] {
    padding: 2rem;
    overflow: auto;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    color: white;
    background: #193549;
  }
  :not(pre) > code[class*="language-"] {
    padding: 0.1rem;
    white-space: normal;
  }
  .token.comment {
    color: #0088ff;
    font-style: italic;
  }
  .token.punctuation {
    color: #0088ff;
  }
  .token.constant {
    color: #ff628c;
  }
  .token.hexcode {
    color: #ff628c;
  }
  .token.string {
    color: #a5ff90;
  }
  .token.builtin {
    color: #fda922;
  }
  .token.variable {
    color: #e1efff;
  }
  .token.attr-name {
    color: #ffb454;
  }
  .token.selector {
    color: #ffb454;
  }
  .token.tag {
    color: #9effff;
  }
  .token.keyword {
    color: #ffbb00;
    font-style: bold;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
`;

export function CodeBlock(props: any) {
  return (
    <CodeBlockContainerStyles>
      <div className="header">
        <div className="file-name">{props.value.filename}</div>
        <div className="copy-btn">X</div>
      </div>
      <CodeBlockStyles>
        <Refractor language={props.value.language} value={props.value.code} />
      </CodeBlockStyles>
    </CodeBlockContainerStyles>
  );
}
