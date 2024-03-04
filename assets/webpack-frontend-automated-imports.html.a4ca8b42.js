import{_ as l}from"./webpack-context.fc3aa3a3.js";import{_ as o,o as e,c as D,a as s,b as c,e as a,d as n,r as t}from"./app.a81d06d1.js";const r={},y=a(`<h1 id="webpack-\u524D\u7AEF\u81EA\u52A8\u5316\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#webpack-\u524D\u7AEF\u81EA\u52A8\u5316\u5BFC\u5165" aria-hidden="true">#</a> Webpack - \u524D\u7AEF\u81EA\u52A8\u5316\u5BFC\u5165</h1><h2 id="\u4E00\u3001require-context" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001require-context" aria-hidden="true">#</a> \u4E00\u3001require.context</h2><p>\u5728\u9605\u8BFB vue-element-admin \u9879\u76EE\u8FC7\u7A0B\u4E2D,\u4F5C\u8005\u91C7\u7528\u5982\u4E0B\u64CD\u4F5C,\u5F15\u5165\u4E86\u5168\u5C40\u4F7F\u7528\u5230\u7684 svg \u77E2\u91CF\u56FE</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">req</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">require</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">context</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;./svg&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span><span style="color:#D16969;"> /</span><span style="color:#D7BA7D;">\\.</span><span style="color:#D16969;">svg</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">requireAll</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">requireContext</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">requireContext</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">keys</span><span style="color:#D4D4D4;">().</span><span style="color:#DCDCAA;">map</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">requireContext</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#DCDCAA;">requireAll</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">req</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5FC3\u4E2D\u4E0D\u514D\u6709\u4E9B\u7591\u60D1,\u77ED\u77ED\u4E24\u884C\u5373\u53EF\u5B9E\u73B0\u4E0A\u767E\u6587\u4EF6\u7684\u5BFC\u5165,\u5176\u4F5C\u7528\u539F\u7406\u662F\u4EC0\u4E48\u5462?</p><p>\u4E0D\u96BE\u770B\u51FA\u5173\u952E\u5728\u4E8E require.context \u8FD9\u4E2A\u5BF9\u8C61</p>`,6),C=n("\u67E5\u9605"),i={href:"https://webpack.js.org/guides/dependency-management/#require-context",target:"_blank",rel:"noopener noreferrer"},E=n("\u5B98\u65B9\u6587\u6863"),u=n("\u53EF\u77E5,\u8FD9\u4E2A\u5BF9\u8C61\u5FC5\u987B\u4F7F\u7528\u4E86 webpack \u6784\u5EFA\u9879\u76EE (\u6216\u5728\u5185\u90E8\u4F7F\u7528\u4E86 webpack \u7684 \xA0Vue CLI 3+)\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u4F7F\u7528 \xA0"),d=s("code",null,"require.context",-1),A=a(`<p>\u5206\u6790\u4E00\u4E0B require.context \u8FD9\u4E2A\u51FD\u6570</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#9CDCFE;">require</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">context</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">directory</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">String</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">includeSubdirs</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Boolean</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">/* \u53EF\u9009\u7684\uFF0C\u9ED8\u8BA4\u503C\u662F true */</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">filter</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">RegExp</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">/* \u53EF\u9009\u7684\uFF0C\u9ED8\u8BA4\u503C\u662F /^\\.\\/.*$/\uFF0C\u6240\u6709\u6587\u4EF6 */</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">mode</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">String</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* \u53EF\u9009\u7684\uFF0C &#39;sync&#39; | &#39;eager&#39; | &#39;weak&#39; | &#39;lazy&#39; | &#39;lazy-once&#39;\uFF0C\u9ED8\u8BA4\u503C\u662F &#39;sync&#39; */</span></span>
<span class="line"><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u4E2A\u51FD\u6570\u4E00\u5171\u63A5\u53D7\u56DB\u4E2A\u53C2\u6570</p><ol><li>directory \u5BFC\u5165\u6587\u4EF6\u8DEF\u5F84 string \u7C7B\u578B</li><li>includeSubdirs \u662F\u5426\u9012\u5F52\u5B50\u6587\u4EF6\u5939 boolean \u7C7B\u578B</li><li>filter filter \u8FC7\u6EE4 \u4F20 \u6B63\u5219\u8868\u8FBE\u5F0F</li><li>mode \u6A21\u5F0F \u6709\u4EE5\u4E0B\u56DB\u79CD\u6A21\u5F0F &#39;sync&#39; | &#39;eager&#39; | &#39;weak&#39; | &#39;lazy&#39; | &#39;lazy-once&#39;</li></ol><p>\u4EE3\u7801\u4E2D require.context \u8FD4\u56DE\u4E00\u4E2A req,\u5C06\u5176\u5728 console \u8F93\u51FA</p><p><img src="`+l+`" alt="webpackContext.png"></p><p>\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u540D\u4E3A webpackContext \u7684\u51FD\u6570</p><p>\u90A3\u4E48\u5B83\u7684\u4F5C\u7528\u539F\u7406\u662F\u4EC0\u4E48\u5462?\u90A3\u5FC5\u987B\u901A\u8FC7\u67E5\u9605\u6E90\u7801\u624D\u53EF\u5F97\u77E5.</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#9CDCFE;">__webpack_require__</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">o</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">prop</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Object</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">prototype</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">hasOwnProperty</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">call</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">prop</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">map</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&#39;./404.svg&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./src/icons/svg/404.svg&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&#39;./account.svg&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./src/icons/svg/account.svg&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&#39;./admin.svg&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./src/icons/svg/admin.svg&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&#39;./bug.svg&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./src/icons/svg/bug.svg&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">webpackContext</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">req</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">webpackContextResolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">req</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">__webpack_require__</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">webpackContextResolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">req</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#9CDCFE;">__webpack_require__</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">o</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">map</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">req</span><span style="color:#D4D4D4;">)) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Error</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;Cannot find module &#39;&quot;</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">req</span><span style="color:#D4D4D4;"> + </span><span style="color:#CE9178;">&quot;&#39;&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">e</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">code</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;MODULE_NOT_FOUND&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">throw</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">e</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">map</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">req</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#9CDCFE;">webpackContext</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">keys</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">webpackContextKeys</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Object</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">keys</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">map</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#9CDCFE;">webpackContext</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">resolve</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">webpackContextResolve</span></span>
<span class="line"><span style="color:#4EC9B0;">module</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">exports</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">webpackContext</span></span>
<span class="line"><span style="color:#9CDCFE;">webpackContext</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">id</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u662F webpack \u6E90\u7801\u4E2D md \u7684\u4F8B\u5B50,\u4E00\u76EE\u4E86\u7136.</p><p>\u5F53\u8C03\u7528 require.context \u51FD\u6570\u65F6,webpack \u6A21\u5757\u5185\u90E8\u4F1A\u751F\u6210\u4E00\u4E2A map \u5BF9\u8C61,</p><p>\u8FD4\u56DE\u503C webpackContext \u5BF9\u8C61\u4E0A\u6709\u4E00\u4E2A\u5C5E\u6027 keys,\u5BF9\u5E94\u4E00\u4E2A\u8FD4\u56DE\u6A21\u5757\u5185\u90E8\u5BF9\u8C61 map \u952E\u6570\u7EC4\u7684\u51FD\u6570</p><p>\u5185\u90E8\u8FD8\u505A\u4E86 key \u662F\u5426\u5728 map \u5BF9\u8C61\u672C\u8EAB\u8EAB\u4E0A\u7684\u9519\u8BEF\u5904\u7406 Object.prototype.hasOwnProperty.call(obj, prop)</p><p>\u5728\u901A\u8FC7 __webpack_require__(\u539F\u59CB require \u51FD\u6570\u3002\u8FD9\u4E2A\u8868\u8FBE\u5F0F\u4E0D\u4F1A\u88AB\u89E3\u6790\u5668\u89E3\u6790\u4E3A\u4F9D\u8D56)\u5BFC\u5165</p><p>\u5230\u6B64\u4E60\u5F97\u901A\u8FC7 require.context \u5BE5\u5BE5\u51E0\u884C\u4EE3\u7801\u5373\u53EF\u5B9E\u73B0\u4E86\u8FC7\u53BB\u6570\u767E\u884C\u7684\u5BFC\u5165</p><h2 id="\u4E8C-\u3001vue-\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u3001vue-\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6" aria-hidden="true">#</a> \u4E8C \u3001Vue \u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6</h2><p>\u65E2\u7136 require.context \u53EF\u7528\u4E8E\u6279\u91CF\u5BFC\u5165\u6A21\u5757,\u90A3\u4E48\u662F\u5426\u53EF\u7528\u4E8E\u6279\u91CF\u6CE8\u518C\u5168\u5C40\u6A21\u5757\u5462?</p><p>\u7B54\u6848\u662F\u80AF\u5B9A\u7684</p><p>Vue \u5B98\u65B9\u5DF2\u7ECF\u7ED9\u51FA\u4E86\u4E00\u4E2A\u5F88\u597D\u7684\u4F8B\u5B50</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">// Globally register all base components for convenience, because they</span></span>
<span class="line"><span style="color:#6A9955;">// will be used very frequently. Components are registered using the</span></span>
<span class="line"><span style="color:#6A9955;">// PascalCased version of their file name.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Vue</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// https://webpack.js.org/guides/dependency-management/#require-context</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">requireComponent</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">require</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">context</span><span style="color:#D4D4D4;">(</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// Look for files in the current directory</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&#39;.&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// Do not look in subdirectories</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// Only include &quot;_base-&quot; prefixed .vue files</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#D16969;">/_base-</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">\\w-</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">+\\.</span><span style="color:#D16969;">vue</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span></span>
<span class="line"><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// For each matching file name...</span></span>
<span class="line"><span style="color:#9CDCFE;">requireComponent</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">keys</span><span style="color:#D4D4D4;">().</span><span style="color:#DCDCAA;">forEach</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">fileName</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// Get the component config</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">componentConfig</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">requireComponent</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">fileName</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// Get the PascalCase version of the component name</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">componentName</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">fileName</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// Remove the &quot;./_&quot; from the beginning</span></span>
<span class="line"><span style="color:#D4D4D4;">    .</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">^</span><span style="color:#D7BA7D;">\\.\\/</span><span style="color:#D16969;">_/</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// Remove the file extension from the end</span></span>
<span class="line"><span style="color:#D4D4D4;">    .</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/</span><span style="color:#D7BA7D;">\\.</span><span style="color:#D16969;">\\w</span><span style="color:#D7BA7D;">+</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// Split up kebabs</span></span>
<span class="line"><span style="color:#D4D4D4;">    .</span><span style="color:#DCDCAA;">split</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;-&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// Upper case</span></span>
<span class="line"><span style="color:#D4D4D4;">    .</span><span style="color:#DCDCAA;">map</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">kebab</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">kebab</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">charAt</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">).</span><span style="color:#DCDCAA;">toUpperCase</span><span style="color:#D4D4D4;">() + </span><span style="color:#9CDCFE;">kebab</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">slice</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">))</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// Concatenated</span></span>
<span class="line"><span style="color:#D4D4D4;">    .</span><span style="color:#DCDCAA;">join</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// Globally register the component</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">Vue</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">component</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">componentName</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">componentConfig</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">default</span><span style="color:#D4D4D4;"> || </span><span style="color:#9CDCFE;">componentConfig</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre></div><p>\u53EA\u9700\u5728 forEach \u8FED\u4EE3\u8FC7\u7A0B\u4E2D,\u8FC7\u6EE4 map \u7684 key,\u5F97\u5230\u6CE8\u518C\u7EC4\u4EF6\u540D\u8C03\u7528 Vue.component \u6CE8\u518C\u5373\u53EF</p><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F, .vue \u6587\u4EF6\u901A\u5E38\u662F\u901A\u8FC7 <code>export default</code> \u5BFC\u51FA\u7684\uFF0C\u90A3\u4E48\u5C31\u4F1A\u4F18\u5148\u4F7F\u7528 <code>componentConfig.default</code>\uFF0C\u5426\u5219\u56DE\u9000\u5230\u4F7F\u7528\u6A21\u5757\u7684\u6839\u3002</p><p>\u5E76\u4E14\u6CE8\u518C\u7EC4\u4EF6\u9700\u5728 Vue \u5B9E\u4F8B\u5316\u4EE5\u524D.</p>`,23);function F(m,b){const p=t("ExternalLinkIcon");return e(),D("div",null,[y,s("p",null,[C,s("a",i,[E,c(p)]),u,d]),A])}var h=o(r,[["render",F],["__file","webpack-frontend-automated-imports.html.vue"]]);export{h as default};