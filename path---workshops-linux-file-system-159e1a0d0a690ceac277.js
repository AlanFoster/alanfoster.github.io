webpackJsonp([0xe23d9b7d1748],{1090:function(e,t){e.exports={data:{sidebar:{fields:{yml:{items:[{title:"Presentation",link:"/workshops/linux/presentation/"},{title:"Workshop Goals",link:"/workshops/linux/workshop-goals/"},{title:"Context",link:"/workshops/linux/context/"},{title:"Your Environment",link:"/workshops/linux/setup/"},{title:"File System",link:"/workshops/linux/file-system/"},{title:"Shell",link:"/workshops/linux/shell/"},{title:"Commands",link:"/workshops/linux/commands/"},{title:"Pipes and Redirects",link:"/workshops/linux/pipes-and-redirection/"},{title:"Getting Help",link:"/workshops/linux/getting-help/"}]}}},workshop:{htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{id:"terminology"},children:[{type:"element",tagName:"a",properties:{href:"#terminology",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Terminology"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Directory - Folders within your operating system"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Volume - Drives with file systems"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"File System - Saving/Retrieving of data structures stored within a volume"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"file-systems"},children:[{type:"element",tagName:"a",properties:{href:"#file-systems",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"File systems"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There are numerous file systems available, for instance:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Fourth Extended Filesystem (EXT4) - Debian GNU/Linux, Ubuntu"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"File Allocation Table (Fat) - Windows"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"New technology File System (NTFS) - Windows"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Apple File System (APFS) - iOS"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This workshop will specifically make use of EXT4 within its examples."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"the-hierarchical-file-system"},children:[{type:"element",tagName:"a",properties:{href:"#the-hierarchical-file-system",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"The hierarchical File System"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Linux provides a hierarchical file system. The root of the tree is "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"/"}]},{type:"text",value:". There is a relationship between parent directories, and children files,\njust like a family tree:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/filesystem-d26858f4ad6085f2fa4bd95de0f8b244-5e366.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 90.625%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAABYlAAAWJQFJUiTwAAABsElEQVQ4y52UC4+CMBCE+///IIoKioLnCwVE8bnXb5MalKqXa9IA7XZ2ZnaLkZdxv987z7qupSxLOR6P3pj2MD4gNxmXy0U2m40URaHPdvzrmSfA1w0HVlWVnM9nyfNcGfLtU/Rg6GOGxPl8LpPJRL8BCYJAgZE+HA4t21wOh0PnrPFJXPwsJEkSBb7dbrJarWQ2m8luV8j1epVkOtVk6/W6C9im6xgQiGcAMgBlj4Hs/X6vSdh3hXpIdr5EUWQZ7NT4LMsUgDVkwappGmWJFXyPRiPd4wxxYIBlMDuOY83IItlhydxut8qUdyyYWqkAsMZ7ahMDSpLxeKzrBs+gTlakEQA7/DidTlJWpe4DzmSfBC7OWeWUGF9jQ52J8bB2hUnTVA+RCPmowwpIPbVNu8pIjqw/vaCnsgBGEq0ShqEmgc1yuZB+P7ReRlpEEnlvCmwAQSZM+CYYpniEPNZgBXBbeqdtfHfTDSRTfcB8cZ2r9+kuA5ZYqYPBQEF9N8TL8N1fB+kUgB511fz6t3kH6g4BSHG+2WP+AkZBaJk4jhTYtcm/GDKQjFzag7b69IP9BYWoe9U0plxFAAAAAElFTkSuQmCC'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;",alt:"filesystem",title:"Image depicting the relationship of children files within a file system",src:"/static/filesystem-d26858f4ad6085f2fa4bd95de0f8b244-10273.png",srcSet:["/static/filesystem-d26858f4ad6085f2fa4bd95de0f8b244-9b14a.png 163w","/static/filesystem-d26858f4ad6085f2fa4bd95de0f8b244-94962.png 325w","/static/filesystem-d26858f4ad6085f2fa4bd95de0f8b244-10273.png 650w","/static/filesystem-d26858f4ad6085f2fa4bd95de0f8b244-2fc6f.png 975w","/static/filesystem-d26858f4ad6085f2fa4bd95de0f8b244-a8a2c.png 1300w","/static/filesystem-d26858f4ad6085f2fa4bd95de0f8b244-5e366.png 1472w"],sizes:["(max-width:","650px)","100vw,","650px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can view this yourself with:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"# Advanced Package Tool (apt)"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"# Used to download dependencies"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"apt-get"}]},{type:"text",value:" update\n"},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"apt-get"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"install"}]},{type:"text",value:" tree\n\n"},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"# Change directory to /"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"# this is the root of the file system"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"cd"}]},{type:"text",value:" /\n\n"},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"# Run `tree` on the current directory"}]},{type:"text",value:"\ntree "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"."}]},{type:"text",value:"\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Your output should be similar to the follow, albeit with more files:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"."}]},{type:"text",value:"\n├── bin\n│   ├── "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"bash"}]},{type:"text",value:"\n│   ├── "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"ls"}]},{type:"text",value:"\n├── home\n│   └── user1\n│       └── "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:".."}]},{type:"text",value:".\n├── media\n├── mnt\n├── opt\n│   └── aws\n└── var\n    └── yp\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"h2",properties:{id:"conventions"},children:[{type:"element",tagName:"a",properties:{href:"#conventions",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Conventions"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"It's important to be aware of some of the conventions within a unix file system. For instance:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Case sensitivity - "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"myFile"}]},{type:"text",value:" and "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"MyFile"}]},{type:"text",value:" are different files"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Avoid spaces - File names should "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"not"}]},{type:"text",value:" contain spaces"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"/"}]},{type:"text",value:" - refers to the root of the filesystem"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"~"}]},{type:"text",value:" - refers to your home directory"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"."}]},{type:"text",value:" - The current directory"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".."}]},{type:"text",value:" - The parent directory"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"exploring"},children:[{type:"element",tagName:"a",properties:{href:"#exploring",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Exploring"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Let's open the terminal and begin typing:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can view a given directory contents with "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"ls"}]},{type:"text",value:" command:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"$ "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"cd"}]},{type:"text",value:" /\n$ "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"ls"}]},{type:"text",value:"\n\nbin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var\n\n"},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"# Home directory"}]},{type:"text",value:"\n$ "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"cd"}]},{type:"text",value:" ~\n\n"},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"# Print Working Directory"}]},{type:"text",value:"\n$ "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"pwd"}]},{type:"text",value:"\n/root\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can additional view more details with "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"ls"}]},{type:"text",value:" using the "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"-l"}]},{type:"text",value:" option, which will list the directory contents in long format:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"$ "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"cd"}]},{type:"text",value:" /bin\n$ "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"ls"}]},{type:"text",value:" -l\n\nroot@7ec8a8962c23:/bin"},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"# ls -l"}]},{type:"text",value:"\ntotal 7364\n-rwxr-xr-x 1 root root 1037528 May 16  2017 "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"bash"}]},{type:"text",value:"\n-rwxr-xr-x 1 root root   52080 Mar  2  2017 "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"cat"}]},{type:"text",value:"\n-rwxr-xr-x 1 root root   56112 Mar  2  2017 "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"chmod"}]},{type:"text",value:"\n-rwxr-xr-x 1 root root   64368 Mar  2  2017 "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"chown"}]},{type:"text",value:"\n-rwxr-xr-x 1 root root  151024 Mar  2  2017 "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"cp"}]},{type:"text",value:"\n-rwxr-xr-x 1 root root  154072 Feb 17  2016 dash\n-rwxr-xr-x 1 root root   97408 Nov 21  2016 "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"ps"}]},{type:"text",value:"\n-rwxr-xr-x 1 root root   31472 Mar  2  2017 "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"pwd"}]},{type:"text",value:"\nlrwxrwxrwx 1 root root       4 Feb 17  2016 sh -"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:">"}]},{type:"text",value:" dash\n"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Initially this output seems overwhelming, but let's take an example line from "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"ls -l"}]},{type:"text",value:" and discuss it further:"}]},{type:"text",value:"\n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-none"]},children:[{type:"element",tagName:"code",properties:{className:["language-none"]},children:[{type:"text",value:"drwxr-xr-x   2 root root 4096 Apr 12 10:27 bin"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n\n            "},{type:"element",tagName:"div",properties:{className:["code-snippet"]},children:[{type:"text",value:"\n              \n              "},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n                "},{type:"element",tagName:"pre",properties:{className:["language-none"]},children:[{type:"element",tagName:"code",properties:{className:["language-none"]},children:[{type:"text",value:"-    rwx  r-x  r-x    1 root root 1037528 May 16  2017 bash\n^\n|    ^^^^^^^^^^^^^^\n|         |\n|     Permissions\n|       1. Users\n|       2. Owners\n|       3. World\n|\n+-------------- File type, one letter character"}]}]},{type:"text",value:"\n              "}]},{type:"text",value:"\n            "}]},{type:"text",value:"\n          \n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The first character shows what type of file this is:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"-"}]},{type:"text",value:" = File"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"d"}]},{type:"text",value:" = Directory"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"l"}]},{type:"text",value:" = Symbolic Link"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"s"}]},{type:"text",value:" = Socket"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"p"}]},{type:"text",value:" = Named Pipes"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Next the permissions are shown. There are three characters each for setting the permissions of:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"users"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"owners"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"world"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"And the corresponding characters are:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"r"}]},{type:"text",value:"ead"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"w"}]},{type:"text",value:"rite"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"e"},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"x"}]},{type:"text",value:"ecute"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"chmod"},children:[{type:"element",tagName:"a",properties:{href:"#chmod",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Chmod"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can use chmod to change the permissions of a given file."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"recap"},children:[{type:"element",tagName:"a",properties:{href:"#recap",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Recap"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Let's recap with a comic by "},{type:"element",tagName:"a",properties:{href:"http://drawings.jvns.ca/"},children:[{type:"text",value:"Julia Evans"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/ls-details-1c40fb2677540aeddde4913624fc522e-31b41.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 74.08854166666666%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAACg0lEQVQ4y11Ui47aQAzM//9ZW93pBBzPkIQAeb9fmwSOqcdtKl1XWhl21/bM2I5VliXCMEQQBHg8HpimCXEcI4oiVFWld5fLBZ7n4Xa74X6/q+VZkiT4f1l5nmOz2ajjMAy4Xq9Yr9fY7/fq9Pb2htVqhdPphM/PT3x8fKh1HEff0XL7vo+6rmEF90CDBEGoqHhBy8uvry9FtCBO01Qtz8iIb5nUtm1l03UdrLqp0Pc96raGGQ3atsVgBoX/er0EuQTKMozjiFKcWnHiewagJcPs7z3/W3lQKtWxnNHWHaZ5gqlGjGZUpySORKtYE9RVoZuLQag3UZENAxOMlYa5UhlKgyIVh6ZGlVZIRfBAdL1fDkgCT4JmmLsEN++IKE7wHAVh7nwriDEGVlmVmOeH0mVGQjdCmZdEzuqez2ctWhTFUhxb9SuKHJ7rCM1O3y0yWGf7LFU6qxOrtbQHN8VmdVmUpV0YuCwKHOwTdr74+S622y1c11Xalp/ekQ1PlP1LEI6CdlZ0XETLQFooQUFLFk3TwJXEYfSnf5d+5HvrIAg3BxdDb+BLC6RJKlQ8Eb9WxNSXdBiM4jMhZXIdF2VeaXAGJDqlfL3JJFxToVFjkso+pidMN8jvGVmcqlZcz+fzWwGOhwMukpB9SBnYkwxslWUF00+iz1X1q+rqnxP7cNF2GVE6hULTvgRIm0naKlbkbCNuK5EWqPNCM7AAFJg0GYBaMhgniYXhG1ojem6PMnp7BwcZ0d1up1sR5hKsyGqtKNFwTkmDmlFkBqc2RLG0B9dmvcKvnz90zjnvTKoaNvKwb1o9IAIGJnVWj2ecXVrSXTpgkkRksxN0/Fi8v7/rh4L+vwEGsGObPBUJKQAAAABJRU5ErkJggg=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;",alt:"ls details",title:"Comic explaining the use of permissions",src:"/static/ls-details-1c40fb2677540aeddde4913624fc522e-10273.png",srcSet:["/static/ls-details-1c40fb2677540aeddde4913624fc522e-9b14a.png 163w","/static/ls-details-1c40fb2677540aeddde4913624fc522e-94962.png 325w","/static/ls-details-1c40fb2677540aeddde4913624fc522e-10273.png 650w","/static/ls-details-1c40fb2677540aeddde4913624fc522e-2fc6f.png 975w","/static/ls-details-1c40fb2677540aeddde4913624fc522e-a8a2c.png 1300w","/static/ls-details-1c40fb2677540aeddde4913624fc522e-31b41.png 1536w"],sizes:["(max-width:","650px)","100vw,","650px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]}],data:{quirksMode:!1}},headings:[{value:"Terminology"},{value:"File systems"},{value:"The hierarchical File System"},{value:"Conventions"},{value:"Exploring"},{value:"Chmod"},{value:"Recap"}],frontmatter:{title:"Linux Workshop - Filesystem",date:null},fields:{slug:"/workshops/linux/file-system/",editURL:"https:/github.com/AlanFoster/alanfoster.github.io/edit/develop/src/pages/workshops/linux/file-system/index.markdown"}}},pathContext:{sidebarPath:"pages/workshops/linux/sidebar.yaml",slug:"/workshops/linux/file-system/"}}}});
//# sourceMappingURL=path---workshops-linux-file-system-159e1a0d0a690ceac277.js.map