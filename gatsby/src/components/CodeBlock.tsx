import React from "react";
import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import styled from "styled-components";

Refractor.registerLanguage(js);

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
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  pre[class*="language-"]::-moz-selection,
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
  }
  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }
  /* Code blocks */
  pre[class*="language-"] {
    padding: 2rem;
    margin: 0.5rem 0;
    overflow: auto;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    color: white;
    background: #193549;
  }
  :not(pre) > code[class*="language-"] {
    padding: 0.1rem;
    border-radius: 0.3em;
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
    <CodeBlockStyles>
      <Refractor language={props.value.language} value={props.value.code} />
    </CodeBlockStyles>
  );
}
