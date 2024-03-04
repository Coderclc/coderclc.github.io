import{_ as l,o,c as p,a as s,b as e,d as n,e as D,r as t}from"./app.a81d06d1.js";const c={},r=s("h1",{id:"js-async-and-await",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#js-async-and-await","aria-hidden":"true"},"#"),n(" JS - Async and Await")],-1),y=s("h2",{id:"one-async-function",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#one-async-function","aria-hidden":"true"},"#"),n(" One, async function")],-1),i=s("blockquote",null,[s("p",null,"An async function is a function declared with the async keyword")],-1),C=s("li",null,"Add the async keyword before the function name to indicate that there is an asynchronous operation inside the function",-1),d=n("async function returns a Promise object ("),u={href:"https://www.jianshu.com/p/5e6c528edfe1",target:"_blank",rel:"noopener noreferrer"},h=n("JS - Promise use"),E=n(")"),f=D(`<h3 id="_1-1-async-function-return-value" tabindex="-1"><a class="header-anchor" href="#_1-1-async-function-return-value" aria-hidden="true">#</a> 1.1 async function return value</h3><p>Refactoring with async function return value feature</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Promise</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">resolve</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;success&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">bar</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;success&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">().</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">res</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">res</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// success</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">bar</span><span style="color:#D4D4D4;">().</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">res</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">res</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// success</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre></div><hr><p>Catch failure and throw an exception</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">request</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">succeeded</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;success&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  } </span><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">throw</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;error&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">then</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">res</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">res</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// success</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">  .</span><span style="color:#DCDCAA;">catch</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">err</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">err</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// error</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"></span></code></pre></div><h2 id="second-the-await-operator" tabindex="-1"><a class="header-anchor" href="#second-the-await-operator" aria-hidden="true">#</a> Second, the await operator</h2><blockquote><p>The await operator is used to wait for a Promise. It can only be used inside an async function.</p></blockquote><ul><li>The await operator is used to wait for a Promise object.</li><li>Can only be used in async functions.</li></ul><h3 id="_2-1-await-usage" tabindex="-1"><a class="header-anchor" href="#_2-1-await-usage" aria-hidden="true">#</a> 2.1 await usage</h3><ol><li>When await encounters Promis, it will suspend the execution of async function and wait for the completion of Promise processing.</li><li>If the Promise is processed normally (fulfilled), the resolve function parameter of its callback is used as the value of the await expression, and the async function continues to be executed.</li><li>If the Promise handles exceptions (rejected), the await expression will throw the exception reason of the Promise.</li><li>If the value of the expression following the await operator is not a Promise, return the value itself.</li></ol><h4 id="_2-1-1-suspend-async-function-when-encountering-promise" tabindex="-1"><a class="header-anchor" href="#_2-1-1-suspend-async-function-when-encountering-promise" aria-hidden="true">#</a> 2.1.1 Suspend async function when encountering Promise</h4><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Promise</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">resolve</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">reject</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">setTimeout</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">resolve</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">2000</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;execute after 2s&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span></code></pre></div><h4 id="_2-1-2-promise-resolve-value-as-the-return-value-of-await" tabindex="-1"><a class="header-anchor" href="#_2-1-2-promise-resolve-value-as-the-return-value-of-await" aria-hidden="true">#</a> 2.1.2 Promise resolve value as the return value of await</h4><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">why</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Promise</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;success&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">why</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// success</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span></code></pre></div><h4 id="_2-1-3-await-throws-promise-to-handle-exception" tabindex="-1"><a class="header-anchor" href="#_2-1-3-await-throws-promise-to-handle-exception" aria-hidden="true">#</a> 2.1.3 await throws Promise to handle exception</h4><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">try</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Promise</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">reject</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;error&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// Uncaught (in promise) error</span></span>
<span class="line"><span style="color:#D4D4D4;">  } </span><span style="color:#C586C0;">catch</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">err</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">err</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// error</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span></code></pre></div><h4 id="_2-1-4-non-promise-objects-directly-return-the-corresponding-value" tabindex="-1"><a class="header-anchor" href="#_2-1-4-non-promise-objects-directly-return-the-corresponding-value" aria-hidden="true">#</a> 2.1.4 Non-Promise objects directly return the corresponding value.</h4><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;why&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// why</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-2-simple-application-of-await-combined-with-node-js" tabindex="-1"><a class="header-anchor" href="#_2-2-simple-application-of-await-combined-with-node-js" aria-hidden="true">#</a> 2.2 Simple application of await combined with Node.js</h3><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">fs</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;fs&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">IRead</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span></span>
<span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">IWrite</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">flag</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">void</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">readFile</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">IRead</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Promise</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">resolve</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">fs</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">readFile</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">encoding:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;utf-8&quot;</span><span style="color:#D4D4D4;"> }, (</span><span style="color:#9CDCFE;">err</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#9CDCFE;">err</span><span style="color:#D4D4D4;">) </span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">writeFile</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">IWrite</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">flag</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Promise</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">resolve</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">fs</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">writeFile</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">flag</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">encoding:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;utf-8&quot;</span><span style="color:#D4D4D4;"> }, (</span><span style="color:#9CDCFE;">err</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#9CDCFE;">err</span><span style="color:#D4D4D4;">) </span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">fs</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">readdir</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;../NODE&quot;</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">err</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">files</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">err</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">files</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">forEach</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">readFile</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">item</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">writeFile</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;integration.text&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">as</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">as</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">,</span><span style="color:#CE9178;">&quot;a+&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;Write succeeded&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>Encapsulate the read-write file as a return Promise function, use the await keyword, wait for the read callback of the file to succeed, and then write the file to the collection.</p>`,22);function A(w,F){const a=t("ExternalLinkIcon");return o(),p("div",null,[r,y,i,s("ul",null,[C,s("li",null,[d,s("a",u,[h,e(a)]),E])]),f])}var v=l(c,[["render",A],["__file","js-async&&await.html.vue"]]);export{v as default};