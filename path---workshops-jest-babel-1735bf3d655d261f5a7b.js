webpackJsonp([5113977596747],{1074:function(e,t){e.exports={data:{sidebar:{fields:{yml:{items:[{title:"Presentation",link:"/workshops/jest/presentation/"},{title:"Workshop Goals",link:"/workshops/jest/workshop-goals/"},{title:"Features",link:"/workshops/jest/features/"},{title:"Setup",link:"/workshops/jest/setup/"},{title:"Basic tests",link:"/workshops/jest/basic-tests/"},{title:"Babel",link:"/workshops/jest/babel/"},{title:"Globals and Matchers",link:"/workshops/jest/globals-and-matchers/"},{title:"Asychronous Testing",link:"/workshops/jest/asynchronous-testing/"},{title:"Mocks",link:"/workshops/jest/mocks/"},{title:"More Mocks",link:"/workshops/jest/more-mocks/"},{title:"React",link:"/workshops/jest/react/"},{title:"Insights",link:"/workshops/jest/insights/"},{title:"The End",link:"/workshops/jest/the-end/"}]}}},workshop:{htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{id:"using-the-latest-javascript-features"},children:[{type:"element",tagName:"a",properties:{href:"#using-the-latest-javascript-features",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Using the latest JavaScript features"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You may have noticed the code we wrote did not make use of any modern syntax. In particular\nwe relied on Node's "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"require"}]},{type:"text",value:" syntax - rather than the more modern "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"import"}]},{type:"text",value:" syntax."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Unfortunately, at the time of writing, not all JavaScript implementations support this new modern syntax.\nFor instance with node v8.9.4 using modern syntax will give you errors:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/without-babel-05269574f75909af3c04080a58b88e9e-2d2c6.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 57.27748691099477%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB7ElEQVQoz52SzW7TQBSFx38zthP/hQQTJ6VILICFE0VZ0LTqhkp0x4KdF302XgIJoVCpVcQ+OFTGhYIlFvAOcXI5M2mkSLChi8/3znjmzLlzh83ZJy1/++blrPh4Vtz8zG6K6+xbWWTFlzIryzKbzWbZdDrNzj+cZ5cXF1me5//ibD6fn1qWpbEes9zDk6PixetXdHRySsfPD+l4ckAHkwlNwHA4pDRNaTAYKEaj0V+Mx2O55lrX9QZjzPCfpCzvJQ2634mXwhYrTP4PS0DgMwgA89sOX/QexNRNkrrb7a7DMFx7nqei7/tr13XXKGdtmqaKW8zNXA3IMIwrqaUEmW4s/CAgiKwCRJlHUSTH1Gw2yXUcsrkgwTk5tq3AIeTjP+e8BgTRHUHGFkIIsiy+EsImbnES2KRpGqlydJ2YYWziLnCGWN+WfMU0bSOI0hbSUeS5qyBskNNuKGfyEJRCGhwyOGIYM5njMAVyTYharlGCW4fpIM3vRS1qxeEy7ISrhte8a1N8ZuITOF6Z7O9T/9FjepjsUT9JKI5jcuCA4+5s21FuOZBXIptwK7LLV9VlPJwm5847t9P55cfJjzhqV91Ou4parQqdrEzTqnDpKt+CEits3vId/AbvgYdnaBhI+uAZeHpH5N49+aj/AKDT6zI7b5I3AAAAAElFTkSuQmCC'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;",alt:"without babel",title:"Example of the new modern import syntax failing to run on node v8.9.4",src:"/static/without-babel-05269574f75909af3c04080a58b88e9e-10273.png",srcSet:["/static/without-babel-05269574f75909af3c04080a58b88e9e-9b14a.png 163w","/static/without-babel-05269574f75909af3c04080a58b88e9e-94962.png 325w","/static/without-babel-05269574f75909af3c04080a58b88e9e-10273.png 650w","/static/without-babel-05269574f75909af3c04080a58b88e9e-2fc6f.png 975w","/static/without-babel-05269574f75909af3c04080a58b88e9e-a8a2c.png 1300w","/static/without-babel-05269574f75909af3c04080a58b88e9e-2d2c6.png 1910w"],sizes:["(max-width:","650px)","100vw,","650px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://babeljs.io/"},children:[{type:"text",value:"Babel"}]},{type:"text",value:" is a simple tool that can convert your modern JavaScript with the\nlatest bells and whistles into an equivalent form that can run on older versions of JavaScript\nthat may exist in older browsers:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/pipeline-3e07a37ba39e416d823b0bcabc422c9a-080d0.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 10.90670170827858%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAo0lEQVQI12Ow9ssyAGJDIFay8c82s/TJMAzJ6mI7cu1D9O7zr1yvPP6Zc+b2x/+7Tj14u+/ck++XH32/te/iW/sj197nbD31QkTNIkTSNiDHGKhfD4h5GUAGAbEVELsDDXQ280xVjS6cyH7i5qfGw1ff552+9aHqypPf/3ccv/Nn/7kn/8/e/vAWKB5x6vbn2TPXntRVNAlQsg/K0wfq1wViGQA1ElRxx82JVwAAAABJRU5ErkJggg=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;",alt:"pipeline",title:"Example of Modern source code being output to a transpiler such as babel, with the output being valid JavaScript that runs on legacy browsers",src:"/static/pipeline-3e07a37ba39e416d823b0bcabc422c9a-10273.png",srcSet:["/static/pipeline-3e07a37ba39e416d823b0bcabc422c9a-9b14a.png 163w","/static/pipeline-3e07a37ba39e416d823b0bcabc422c9a-94962.png 325w","/static/pipeline-3e07a37ba39e416d823b0bcabc422c9a-10273.png 650w","/static/pipeline-3e07a37ba39e416d823b0bcabc422c9a-080d0.png 761w"],sizes:["(max-width:","650px)","100vw,","650px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For example, below shows two ways of writing the same function "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"add"}]},{type:"text",value:" which returns the sum of\ntwo numbers. Both represent provide the same functionality, but the latter is an example\nof the more terse lambda syntax available in ES6:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"// Plain ol' JavaScript"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"var"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function-variable","function"]},children:[{type:"text",value:"add"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"function"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"x"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" y"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" x "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"+"}]},{type:"text",value:" y"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"// Modern, Concise, ES6 Lambda Syntax"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function-variable","function"]},children:[{type:"text",value:"add"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"x"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" y"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"=>"}]},{type:"text",value:" x "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"+"}]},{type:"text",value:" y"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"h2",properties:{id:"babel-terminology"},children:[{type:"element",tagName:"a",properties:{href:"#babel-terminology",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Babel Terminology"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Babel is easily configured via:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Plugins - These read your code and output the transformed code"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Presets - A collection of Plugins"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There are many presets available, but the main official presets are:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"babel-preset-env"}]},{type:"text",value:" - Plugins to target a specific environment, i.e. browsers, or node"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"babel-preset-react"}]},{type:"text",value:" - Plugins related to React, transforming JSX code"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"babel-preset-flow"}]},{type:"text",value:" - Plugins to Facebook's "},{type:"element",tagName:"a",properties:{href:"https://flow.org/"},children:[{type:"text",value:"Flow"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"your-turn"},children:[{type:"element",tagName:"a",properties:{href:"#your-turn",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Your turn"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"To introduce this to your Jest setup, firstly install Babel-Core, the integration support for jest,\nas well as "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"babel-present-env"}]},{type:"text",value:" - which will provide access to the latest language features:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"yarn add --dev babel-jest babel-core babel-preset-env\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"To configure Babel to use the latest syntax features, we can create a "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".babelrc"}]},{type:"text",value:" file specifying\nthat we want to use the previously installed "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"babel-present-env"}]},{type:"text",value:" present:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              "},{type:"element",tagName:"code",properties:{className:["code-snippet__title"]},children:[{type:"text",value:".babelrc"}]},{type:"text",value:"\n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-json"]},children:[{type:"element",tagName:"code",properties:{className:["language-json"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"presets"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"env"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If we re-run the tests, nothing will have changed. Verify this to prove to yourself that\nthis is true."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We can now make use of the more modern export/import syntax as a result of this change:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              "},{type:"element",tagName:"code",properties:{className:["code-snippet__title"]},children:[{type:"text",value:"add.spec.js"}]},{type:"text",value:"\n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-diff"]},children:[{type:"element",tagName:"code",properties:{className:["language-diff"]},children:[{type:"element",tagName:"span",properties:{className:["token","deleted"]},children:[{type:"text",value:"-const add = require('./add');"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+import add from './add';"}]},{type:"text",value:"\n\n describe('add', function () {\n   it('adds two numbers', function () {\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              "},{type:"element",tagName:"code",properties:{className:["code-snippet__title"]},children:[{type:"text",value:"add.js"}]},{type:"text",value:"\n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-diff"]},children:[{type:"element",tagName:"code",properties:{className:["language-diff"]},children:[{type:"element",tagName:"span",properties:{className:["token","deleted"]},children:[{type:"text",value:"-function add(x, y) {"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","deleted"]},children:[{type:"text",value:"-  return x + y;"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","deleted"]},children:[{type:"text",value:"-}"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+const add = (x, y) => x + y;"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","deleted"]},children:[{type:"text",value:"-module.exports = add;"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","inserted"]},children:[{type:"text",value:"+export default add;"}]},{type:"text",value:"\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Make these changes to your project, and run your tests again."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"further-configuration"},children:[{type:"element",tagName:"a",properties:{href:"#further-configuration",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Further configuration"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Babel provides the ability to configure your presets and plugins via "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".babelrc"}]},{type:"text",value:".\nFor instance, we can configure which environments we want to target:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              "},{type:"element",tagName:"code",properties:{className:["code-snippet__title"]},children:[{type:"text",value:".babelrc"}]},{type:"text",value:"\n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-json"]},children:[{type:"element",tagName:"code",properties:{className:["language-json"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"presets"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"text",value:"\n      "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"env"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n      "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"targets"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n          "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"browsers"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"last 2 versions"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"safari >= 7"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n      "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          "}],data:{quirksMode:!1}},headings:[{value:"Using the latest JavaScript features"},{value:"Babel Terminology"},{value:"Your turn"},{value:"Further configuration"}],frontmatter:{title:"Jest workshop - Babel",date:null},fields:{slug:"/workshops/jest/babel/",editURL:"https:/github.com/AlanFoster/alanfoster.github.io/edit/develop/src/pages/workshops/jest/babel/index.markdown"}}},pathContext:{sidebarPath:"pages/workshops/jest/sidebar.yaml",slug:"/workshops/jest/babel/"}}}});
//# sourceMappingURL=path---workshops-jest-babel-1735bf3d655d261f5a7b.js.map