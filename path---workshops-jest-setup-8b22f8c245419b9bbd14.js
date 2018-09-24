webpackJsonp([0xb27b6c80c292],{1085:function(e,t){e.exports={data:{sidebar:{fields:{yml:{items:[{title:"Presentation",link:"/workshops/jest/presentation/"},{title:"Workshop Goals",link:"/workshops/jest/workshop-goals/"},{title:"Features",link:"/workshops/jest/features/"},{title:"Setup",link:"/workshops/jest/setup/"},{title:"Basic tests",link:"/workshops/jest/basic-tests/"},{title:"Babel",link:"/workshops/jest/babel/"},{title:"Globals and Matchers",link:"/workshops/jest/globals-and-matchers/"},{title:"Asychronous Testing",link:"/workshops/jest/asynchronous-testing/"},{title:"Mocks",link:"/workshops/jest/mocks/"},{title:"More Mocks",link:"/workshops/jest/more-mocks/"},{title:"React",link:"/workshops/jest/react/"},{title:"Insights",link:"/workshops/jest/insights/"},{title:"The End",link:"/workshops/jest/the-end/"}]}}},workshop:{htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{id:"getting-started"},children:[{type:"element",tagName:"a",properties:{href:"#getting-started",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Getting started"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We will use Yarn to install Jest as a JavaScript dependency."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Firstly ensure that that you have yarn available:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"$ yarn --version\nv1.3.2\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For full details, visit "},{type:"element",tagName:"a",properties:{href:"https://yarnpkg.com/en/docs/install"},children:[{type:"text",value:"installing Yarn"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"At the time of writing the recommended approach is to use homebrew for installing yarn:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"brew "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"install"}]},{type:"text",value:" yarn\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"h2",properties:{id:"creating-a-new-project"},children:[{type:"element",tagName:"a",properties:{href:"#creating-a-new-project",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Creating a new project"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Firstly create a new directory where you want to run your project:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"mkdir"}]},{type:"text",value:" ~/Documents/jest-workshop\n"},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"cd"}]},{type:"text",value:" ~/Documents/jest-workshop\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We can initialize a new "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"package.json"}]},{type:"text",value:" that will specify all of our project dependencies\nvia the "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"yarn init"}]},{type:"text",value:" command. You will asked various questions about this project, the\nanswers are not too important and can be left as their default value for the most part:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"yarn init\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This will generate a new "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"package.json"}]},{type:"text",value:" file similar to:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-json"]},children:[{type:"element",tagName:"code",properties:{className:["language-json"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"name"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"jest-workshop"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"version"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"1.0.0"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"main"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"index.js"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"license"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"MIT"'}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For example:"}]},{type:"text",value:"\n"},{type:"element",tagName:"asciinema",properties:{src:"/static/setup-83a70d4508fea9aad069529d75c43c57.cast"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Now we can install jest:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"yarn add --dev jest\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This command has also modified your "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"package.json"}]},{type:"text",value:" file:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-json"]},children:[{type:"element",tagName:"code",properties:{className:["language-json"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"name"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"jest-workshop"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"version"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"1.0.0"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"main"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"index.js"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"license"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"MIT"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["gatsby-highlight-code-line"]},children:[{type:"text",value:"  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"devDependencies"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n"}]},{type:"element",tagName:"span",properties:{className:["gatsby-highlight-code-line"]},children:[{type:"text",value:"    "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"jest"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"^22.4.2"'}]},{type:"text",value:"\n"}]},{type:"element",tagName:"span",properties:{className:["gatsby-highlight-code-line"]},children:[{type:"text",value:"  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Let's define a script within our "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"package.json"}]},{type:"text",value:" file to run our test suite via jest:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-json"]},children:[{type:"element",tagName:"code",properties:{className:["language-json"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"name"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"jest-workshop"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"version"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"1.0.0"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"main"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"index.js"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"license"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"MIT"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["gatsby-highlight-code-line"]},children:[{type:"text",value:"  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"scripts"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n"}]},{type:"element",tagName:"span",properties:{className:["gatsby-highlight-code-line"]},children:[{type:"text",value:"    "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"test"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"jest"'}]},{type:"text",value:"\n"}]},{type:"element",tagName:"span",properties:{className:["gatsby-highlight-code-line"]},children:[{type:"text",value:"  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n"}]},{type:"text",value:"  "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"devDependencies"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","property"]},children:[{type:"text",value:'"jest"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"^22.4.2"'}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We can now run our JavaScript tests with the "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"yarn run"}]},{type:"text",value:" command:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/empty-tests-ce8de2db8141dca4d80f2dbb4c8026f3-8233f.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 45.319740500463396%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABzklEQVQoz5XQz2/TMBQHcKeJHadNkziLlyZtkq1byg5QxA20f4QbnBftX+A/KWc4VOLQatJQaKVSiibE38GPHdGE1jSPl5JNgHZByie2n+VvnkPOnr5g+ZuXzycf89P3nz6fLC8usg/LZbZarbLFYpFNp9NsPB5vTSaTbD6fZ7PZ7E8n6DTP82ej0cggadvxHz188PP+k8cwPD6Go+EQDvp9SNMUkiSBIAi2wjCEXq8LURTdCfevhBAJaQsRSrn7dUcIcIW4bijKmhDyj7tqt64RoC9oD5EAky8PD1MYDNJNt+uXUoqy48vS81ycu6XveyXnWqlppKRUQaRU1UbJGMOatqkDv98GOo59GUUxYMCm03HAcTgYBsGOkUuAMQJStsC2VdB1ApwT0DQFzJaJe+zvQN5Qg13L/Rbif0r299eDe0dFHO8VUsoiDDqF53mFYTRRq6BULxjjNVZgd4iuDcMARVF+X9kiJOS6edXyfRBxDL2DPji2DZZlgW3ZYJomVAc451U30GxWc3271ple15pV4A8M7FdX3kGv0Tt0jt7+p/P67CvkV4ENfEx8CaqqgmqawK8LXde3I3YgKKUCryfUar+e36xvathhu8r6BRNnwQdQAZF8AAAAAElFTkSuQmCC'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;",alt:"empty tests",title:"Example there being no tests available",src:"/static/empty-tests-ce8de2db8141dca4d80f2dbb4c8026f3-10273.png",srcSet:["/static/empty-tests-ce8de2db8141dca4d80f2dbb4c8026f3-9b14a.png 163w","/static/empty-tests-ce8de2db8141dca4d80f2dbb4c8026f3-94962.png 325w","/static/empty-tests-ce8de2db8141dca4d80f2dbb4c8026f3-10273.png 650w","/static/empty-tests-ce8de2db8141dca4d80f2dbb4c8026f3-2fc6f.png 975w","/static/empty-tests-ce8de2db8141dca4d80f2dbb4c8026f3-a8a2c.png 1300w","/static/empty-tests-ce8de2db8141dca4d80f2dbb4c8026f3-173d2.png 1950w","/static/empty-tests-ce8de2db8141dca4d80f2dbb4c8026f3-8233f.png 2158w"],sizes:["(max-width:","650px)","100vw,","650px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Oops, no tests? Let's add some tests!"}]}],data:{quirksMode:!1}},headings:[{value:"Getting started"},{value:"Creating a new project"}],frontmatter:{title:"Jest workshop - Setup",date:null},fields:{slug:"/workshops/jest/setup/",editURL:"https:/github.com/AlanFoster/alanfoster.github.io/edit/develop/src/pages/workshops/jest/setup/index.markdown"}}},pathContext:{sidebarPath:"pages/workshops/jest/sidebar.yaml",slug:"/workshops/jest/setup/"}}}});
//# sourceMappingURL=path---workshops-jest-setup-8b22f8c245419b9bbd14.js.map