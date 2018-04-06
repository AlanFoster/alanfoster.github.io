webpackJsonp([95299839893085],{748:function(n,a){n.exports={data:{markdownRemark:{html:'<p>I often see a lot of java programs which make use of enums for finite state machines. They perform logic based on switch statements. For instance they may do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java"><span class="token keyword">protected</span> <span class="token keyword">enum</span> State <span class="token punctuation">{</span>\n  FOO<span class="token punctuation">,</span> BAR<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  State currentState <span class="token operator">=</span> State<span class="token punctuation">.</span>FOO<span class="token punctuation">;</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>currentState<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> FOO <span class="token operator">:</span>\n      <span class="token comment">// Perform specific logic</span>\n      <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> BAR <span class="token operator">:</span>\n      <span class="token comment">// Perform specific logic</span>\n      <span class="token keyword">break</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Sure, this is fine. But it\'s not exactly very flexible is it? It\'s not taking advantage of the fact that enums can offer logic within the enum itself. For instance enums can offer a public abstract void method, which all enum constants must override and implement logic to.</p>\n<p>For instance</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java"><span class="token keyword">protected</span> <span class="token keyword">enum</span> State <span class="token punctuation">{</span>\n  FOO <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">logic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// Perform specific logic</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  BAR <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">logic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// Perform specific logic</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">logic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This means we can now execute our logic by doing</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  State currentState <span class="token operator">=</span> State<span class="token punctuation">.</span>FOO<span class="token punctuation">;</span>\n  currentState<span class="token punctuation">.</span><span class="token function">logic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Therefore it doesn\'t take much imagination to take this a step further and implement an \'actual\' Java state machine such as</p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java"><span class="token keyword">protected</span> <span class="token keyword">enum</span> State <span class="token punctuation">{</span>\n  FOO <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> i<span class="token punctuation">;</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">protected</span> State <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> i<span class="token operator">++</span> <span class="token operator">>=</span> <span class="token number">2</span> <span class="token operator">?</span> BAR <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  BAR <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">protected</span> State <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">return</span> i<span class="token operator">++</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> FOO <span class="token operator">:</span> HALT<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  HALT <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">protected</span> State <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> null<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">protected</span> <span class="token keyword">abstract</span> State <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  State currentState <span class="token operator">=</span> State<span class="token punctuation">.</span>FOO<span class="token punctuation">;</span>\n  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>currentState <span class="token operator">=</span> currentState<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> State<span class="token punctuation">.</span>HALT<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>currentState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Hopefully this helps someone learn a bit more about enums, and potentially how to implement a finite state machine in java using enums.</p>',frontmatter:{title:"Implementing Finite State Machines using Java's enums",date:"22 January, 2012"},fields:{slug:"/posts/2012-01-22-implementing-finite-state-machines-using-java-enum/"}}},pathContext:{slug:"/posts/2012-01-22-implementing-finite-state-machines-using-java-enum/"}}}});
//# sourceMappingURL=path---posts-2012-01-22-implementing-finite-state-machines-using-java-enum-436c3d285e5d6920722a.js.map