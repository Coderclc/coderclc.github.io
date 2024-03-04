import{_ as s,o as n,c as a,e as l}from"./app.a81d06d1.js";const p={},o=l(`<h1 id="js-this-\u6307\u5411" tabindex="-1"><a class="header-anchor" href="#js-this-\u6307\u5411" aria-hidden="true">#</a> JS - this \u6307\u5411</h1><h2 id="\u4E00\u3001\u4EC0\u4E48\u662F-this" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4EC0\u4E48\u662F-this" aria-hidden="true">#</a> \u4E00\u3001\u4EC0\u4E48\u662F this</h2><blockquote><p>A\xA0<strong>function&#39;s\xA0<code>this</code>\xA0keyword</strong>\xA0behaves a little differently in JavaScript compared to other languages. It also has some differences between\xA0strict mode and non-strict mode.</p></blockquote><p>\u4ECE\u5B98\u65B9\u6587\u6863\u6211\u4EEC\u53EF\u77E5</p><ul><li>this \u662F\u4E00\u4E2A\u5173\u952E\u5B57</li><li>this \u4E3B\u8981\u7528\u5728\u51FD\u6570\u4E2D</li><li>this \u5728 strict mode \u4E0B\u6307\u5411\u6709\u4E00\u4E9B\u4E0D\u540C</li></ul><h3 id="_1-1-\u5168\u5C40\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5168\u5C40\u73AF\u5883" aria-hidden="true">#</a> 1.1 \u5168\u5C40\u73AF\u5883</h3><p>\u65E0\u8BBA\u662F\u5426\u5728 strict mode\uFF0C\u5728\u5168\u5C40\u6267\u884C\u73AF\u5883\u4E2D\uFF08\u5728\u4EFB\u4F55\u51FD\u6570\u4F53\u5916\u90E8\uFF09this \u90FD\u6307\u5411\u5168\u5C40\u5BF9\u8C61\u3002(\u6D4F\u89C8\u5668\u4E2D window \u4E3A ECMAscript \u89C4\u5B9A\u7684 Global \u5BF9\u8C61)</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#CE9178;">&#39;use strict&#39;</span></span>
<span class="line"><span style="color:#6A9955;">//\u5728 Node \u4E2D</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//\u5728\u6D4F\u89C8\u5668\u4E2D</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">//window</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;"> === </span><span style="color:#9CDCFE;">window</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">//true</span></span>
<span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">window</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">//foo</span></span>
<span class="line"><span style="color:#9CDCFE;">window</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;bar&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">//bar</span></span>
<span class="line"></span></code></pre></div><h4 id="_1-1-1-\u6267\u884C\u4E0A\u4E0B\u6587-execution-context" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u6267\u884C\u4E0A\u4E0B\u6587-execution-context" aria-hidden="true">#</a> 1.1.1 \u6267\u884C\u4E0A\u4E0B\u6587(Execution Context)</h4><p>\u5728\u5168\u5C40\u4F5C\u7528\u57DF var \u5173\u952E\u5B57\u58F0\u660E\u53D8\u91CF\u548C\u7701\u7565\u58F0\u660E\u7684\u53D8\u91CF\u90FD\u4F1A\u6DFB\u52A0\u4E3A\u5168\u5C40\u5BF9\u8C61\u7684\u5C5E\u6027</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;bar&#39;</span></span>
<span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// foo</span></span>
<span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// bar</span></span>
<span class="line"></span></code></pre></div><p>const \u3001let \u5173\u952E\u5B57\u58F0\u660E\u7684\u53D8\u91CF\u6709\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;bar&#39;</span></span>
<span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// undefined</span></span>
<span class="line"><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// undefined</span></span>
<span class="line"></span></code></pre></div><h3 id="_1-2-\u51FD\u6570-\u8FD0\u884C\u5185-\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_1-2-\u51FD\u6570-\u8FD0\u884C\u5185-\u73AF\u5883" aria-hidden="true">#</a> 1.2 \u51FD\u6570\uFF08\u8FD0\u884C\u5185\uFF09\u73AF\u5883</h3><p>\u5728\u51FD\u6570\u5185\u90E8\uFF0Cthis \u7684\u6307\u5411\u53D6\u51B3\u4E8E\u51FD\u6570\u88AB\u8C03\u7528\u7684\u65B9\u5F0F\u3002</p><h4 id="_1-2-1-\u51FD\u6570\u7B80\u5355\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u51FD\u6570\u7B80\u5355\u8C03\u7528" aria-hidden="true">#</a> 1.2.1 \u51FD\u6570\u7B80\u5355\u8C03\u7528</h4><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">//\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B  this \u7684\u503C\u9ED8\u8BA4\u6307\u5411\u5168\u5C40\u5BF9\u8C61\u3002</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#6A9955;">// \u5728Node \u4E2D</span></span>
<span class="line"><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// Object [global]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//\u5728\u6D4F\u89C8\u5668\u4E2D</span></span>
<span class="line"><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">//window</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">//\u4E25\u683C\u6A21\u5F0F\u4E0B this \u9ED8\u8BA4\u4E3Aundefined\u3002</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">&#39;use strict&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#6A9955;">// \u5728Node \u4E2D</span></span>
<span class="line"><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//\u5728\u6D4F\u89C8\u5668\u4E2D</span></span>
<span class="line"><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// undefined</span></span>
<span class="line"></span></code></pre></div><h4 id="_1-2-2-\u51FD\u6570\u4F5C\u4E3A\u5BF9\u8C61\u7684\u65B9\u6CD5\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u51FD\u6570\u4F5C\u4E3A\u5BF9\u8C61\u7684\u65B9\u6CD5\u8C03\u7528" aria-hidden="true">#</a> 1.2.2 \u51FD\u6570\u4F5C\u4E3A\u5BF9\u8C61\u7684\u65B9\u6CD5\u8C03\u7528</h4><p>(1) \u5F53\u51FD\u6570\u4F5C\u4E3A\u65B9\u6CD5\u88AB\u8C03\u7528\u65F6\uFF0C this \u6307\u5411\u8C03\u7528\u8BE5\u65B9\u6CD5\u7684\u5BF9\u8C61</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">fn</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">fn</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// foo</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = {}</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">fn</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">fn</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">fn</span></span>
<span class="line"><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">fn</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// foo</span></span>
<span class="line"></span></code></pre></div><p>(2) \u94FE\u5F0F\u8C03\u7528,this \u6307\u5411\u4E0A\u4E00\u4E2A\u7ED1\u5B9A\u5BF9\u8C61</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">fn</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">bar:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">bar</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">fn</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// this -&gt;bar</span></span>
<span class="line"></span></code></pre></div><p>(3)\u5F53\u51FD\u6570\u8C03\u7528\u65F6\u6CA1\u6709\u7ED1\u5B9A\u4EFB\u4F55\u5BF9\u8C61,\u9690\u5F0F\u4E22\u5931</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">// \u9690\u5F0F\u4E22\u5931</span></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">fn</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">fn</span></span>
<span class="line"><span style="color:#DCDCAA;">bar</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// window</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8C\u3001this-\u4E0E\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001this-\u4E0E\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> \u4E8C\u3001this \u4E0E\u7BAD\u5934\u51FD\u6570</h2><h3 id="_2-1-\u7BAD\u5934\u51FD\u6570\u4E2D-this-\u4E0E\u6700\u8FD1\u4F5C\u7528\u57DF\u7684-this-\u76F8\u540C" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7BAD\u5934\u51FD\u6570\u4E2D-this-\u4E0E\u6700\u8FD1\u4F5C\u7528\u57DF\u7684-this-\u76F8\u540C" aria-hidden="true">#</a> 2.1 \u7BAD\u5934\u51FD\u6570\u4E2D\uFF0Cthis \u4E0E\u6700\u8FD1\u4F5C\u7528\u57DF\u7684 this \u76F8\u540C</h3><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">fn</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">fn</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#DCDCAA;">bar</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// this -&gt; foo</span></span>
<span class="line"></span></code></pre></div><p>fn \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u533F\u540D\u7BAD\u5934\u51FD\u6570,\u7BAD\u5934\u51FD\u6570\u4E2D\u7684 this \u5411\u4E0A\u4E00\u5C42\u7EA7\u627E,\u6B64\u65F6\u7BAD\u5934\u51FD\u6570\u4E2D\u7684 this=&gt; fn \u4E2D\u7684 this</p><h3 id="_2-2-\u5BF9\u8C61\u7684\u65B9\u6CD5\u4E2D\u7684\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5BF9\u8C61\u7684\u65B9\u6CD5\u4E2D\u7684\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> 2.2 \u5BF9\u8C61\u7684\u65B9\u6CD5\u4E2D\u7684\u7BAD\u5934\u51FD\u6570</h3><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">bar:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">fn</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// window</span></span>
<span class="line"><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">fn</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">//window</span></span>
<span class="line"></span></code></pre></div><p>\u6B64\u65F6 fn \u51FD\u6570\u867D\u7136\u4F5C\u4E3A foo \u7684\u65B9\u6CD5\u8C03\u7528,\u4F46\u7531\u4E8E\u7BAD\u5934\u51FD\u6570\u5411\u4E0A\u627E\u4F5C\u7528\u57DF this \u7684\u7F18\u6545,\u7BAD\u5934\u51FD\u6570\u7684 this \u6307\u5411 window</p><h2 id="\u4E09\u3001this-\u4E0E\u533F\u540D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001this-\u4E0E\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a> \u4E09\u3001this \u4E0E\u533F\u540D\u51FD\u6570</h2><p>this \u5BF9\u8C61\u662F\u57FA\u4E8E\u51FD\u6570\u7684\u8FD0\u884C\u73AF\u5883\u7ED1\u5B9A\u7684</p><p>\u56E0\u4E3A\u533F\u540D\u51FD\u6570\u7684\u6267\u884C\u73AF\u5883\u6709\u5168\u5C40\u6027,\u56E0\u6B64 this \u5BF9\u8C61\u5E38\u6307\u5411 window</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">fn</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">fn</span><span style="color:#D4D4D4;">()() </span><span style="color:#6A9955;">// this -&gt; window</span></span>
<span class="line"></span></code></pre></div><p>\u4E3A\u4EC0\u4E48\u533F\u540D\u51FD\u6570\u4F5C\u7528\u57DF\u7684 this \u6CA1\u6709\u8BBF\u95EE\u5916\u90E8\u4F5C\u7528\u57DF fn \u4E2D\u7684 this \u5462? \u56E0\u4E3A\u51FD\u6570\u5728\u8C03\u7528\u65F6\u4F1A\u81EA\u52A8\u53D6\u5F97\u4E24\u4E2A\u7279\u6B8A\u7684\u53D8\u91CF,this \u548C arguments,\u533F\u540D\u51FD\u6570\u672C\u8EAB\u4E5F\u4F1A\u53D6\u5F97\u6307\u5411 window \u7684 this,\u4E00\u65E6\u641C\u5F97\u5176\u6D3B\u52A8\u5BF9\u8C61\u5373\u505C\u6B62.</p><p>\u90A3\u4E48\u5982\u4F55\u8BBF\u95EE fn \u4E2D\u7684 this \u5462</p><h3 id="_3-1-\u901A\u8FC7\u95ED\u5305\u4FDD\u5B58" tabindex="-1"><a class="header-anchor" href="#_3-1-\u901A\u8FC7\u95ED\u5305\u4FDD\u5B58" aria-hidden="true">#</a> 3.1 \u901A\u8FC7\u95ED\u5305\u4FDD\u5B58</h3><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">fn</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">_this</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">_this</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">fn</span><span style="color:#D4D4D4;">()() </span><span style="color:#6A9955;">// _this -&gt; foo</span></span>
<span class="line"></span></code></pre></div><h3 id="_3-2-\u901A\u8FC7\u7BAD\u5934\u51FD\u6570\u8BBF\u95EE\u5916\u90E8\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#_3-2-\u901A\u8FC7\u7BAD\u5934\u51FD\u6570\u8BBF\u95EE\u5916\u90E8\u4F5C\u7528\u57DF" aria-hidden="true">#</a> 3.2 \u901A\u8FC7\u7BAD\u5934\u51FD\u6570\u8BBF\u95EE\u5916\u90E8\u4F5C\u7528\u57DF</h3><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">fn</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> () {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">fn</span><span style="color:#D4D4D4;">()() </span><span style="color:#6A9955;">// this -&gt; foo</span></span>
<span class="line"></span></code></pre></div><h2 id="\u56DB\u3001this-\u4E0E-call-\u548C-apply" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001this-\u4E0E-call-\u548C-apply" aria-hidden="true">#</a> \u56DB\u3001this \u4E0E call()\u548C apply()</h2><p>\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u51FD\u6570\u7EE7\u627F\u81EA Function.prototype \u7684 call \u6216 \xA0apply\xA0 \u65B9\u6CD5\u5C06 \xA0this \u503C\u7ED1\u5B9A\u5230\u8C03\u7528\u4E2D\u7684\u7279\u5B9A\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = {}</span></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;"> = []</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">bar</span><span style="color:#D4D4D4;">(...</span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">call</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">, ...</span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// this -&gt; foo</span></span>
<span class="line"><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">apply</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">args</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// this -&gt; foo</span></span>
<span class="line"></span></code></pre></div><p>call \u548C apply \u7684\u533A\u522B\u4E3A,call() \u65B9\u6CD5\u63A5\u53D7\u7684\u662F\u4E00\u4E2A\u53C2\u6570\u5217\u8868\uFF0C\u800C apply() \u65B9\u6CD5\u63A5\u53D7\u7684\u662F\u4E00\u4E2A\u5305\u542B\u591A\u4E2A\u53C2\u6570\u7684\u6570\u7EC4\u3002</p><h2 id="\u4E94\u3001this-\u4E0E-bind" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001this-\u4E0E-bind" aria-hidden="true">#</a> \u4E94\u3001this \u4E0E bind()</h2><p>ECMAScript 5 \u5F15\u5165\u4E86 Function.prototype.bind()\u3002\u8C03\u7528 f.bind(someObject)\u4F1A\u521B\u5EFA\u4E00\u4E2A\u4E0E f \u5177\u6709\u76F8\u540C\u51FD\u6570\u4F53\u548C\u4F5C\u7528\u57DF\u7684\u51FD\u6570\uFF0C\u4F46\u662F\u5728\u8FD9\u4E2A\u65B0\u51FD\u6570\u4E2D\uFF0Cthis \u5C06\u6C38\u4E45\u5730\u88AB\u7ED1\u5B9A\u5230\u4E86 bind \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u65E0\u8BBA\u8FD9\u4E2A\u51FD\u6570\u662F\u5982\u4F55\u88AB\u8C03\u7528\u7684\u3002</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;"> = {}</span></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">bar</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">bind</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">// this -&gt; obj</span></span>
<span class="line"><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">foo</span></span>
<span class="line"><span style="color:#9CDCFE;">obj</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">() </span><span style="color:#6A9955;">//this -&gt; obj</span></span>
<span class="line"></span></code></pre></div><h2 id="\u516D\u3001this-\u4E0E-getter-\u548C-setter" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001this-\u4E0E-getter-\u548C-setter" aria-hidden="true">#</a> \u516D\u3001this \u4E0E getter \u548C setter</h2><p>\u5F53\u51FD\u6570\u5728\u4E00\u4E2A getter \u6216\u8005 setter \u4E2D\u88AB\u8C03\u7528\u3002\u7528\u4F5C getter \u6216 setter \u7684\u51FD\u6570\u90FD\u4F1A\u628A this \u7ED1\u5B9A\u5230\u8BBE\u7F6E\u6216\u83B7\u53D6\u5C5E\u6027\u7684\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = {}</span></span>
<span class="line"><span style="color:#4EC9B0;">Object</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">defineProperty</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;bar&#39;</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">get</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// this -&gt; foo</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E03\u3001this-\u4E0E\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001this-\u4E0E\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u4E03\u3001this \u4E0E\u6784\u9020\u51FD\u6570</h2><p>\u5F53\u4E00\u4E2A\u51FD\u6570\u7528\u4F5C\u6784\u9020\u51FD\u6570\u65F6\uFF08\u4F7F\u7528 new \u5173\u952E\u5B57\uFF09\uFF0Cthis \u88AB\u7ED1\u5B9A\u5230\u6784\u9020\u7684\u65B0\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">why</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">why</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">why</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">foo</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;why&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">why</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;">// -&gt; why</span></span>
<span class="line"></span></code></pre></div><h2 id="\u516B\u3001this-\u4E0E-dom-\u4E8B\u4EF6\u5904\u7406\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u516B\u3001this-\u4E0E-dom-\u4E8B\u4EF6\u5904\u7406\u51FD\u6570" aria-hidden="true">#</a> \u516B\u3001this \u4E0E DOM \u4E8B\u4EF6\u5904\u7406\u51FD\u6570</h2><p>\u7EDD\u5927\u90E8\u5206\u6D4F\u89C8\u5668,\u5F53\u51FD\u6570\u88AB\u7528\u4F5C\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u65F6\uFF0C\u5B83\u7684 this \u6307\u5411\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20</p><div class="language-javascript ext-js"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">btn</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getElementsByClassName</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;btn&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> (</span><span style="color:#569CD6;">var</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> &lt; </span><span style="color:#9CDCFE;">btn</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">length</span><span style="color:#D4D4D4;">; </span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">++) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">btn</span><span style="color:#D4D4D4;">[</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">].</span><span style="color:#DCDCAA;">addEventListener</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;click&#39;</span><span style="color:#D4D4D4;">, () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span></span>
<span class="line"><span style="color:#D4D4D4;">  })</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#6A9955;">// this -&gt;btn[i]</span></span>
<span class="line"></span></code></pre></div><p>\u603B\u7ED3\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B,\u6D4F\u89C8\u5668\u4E2D</p><ul><li>\u51FD\u6570\u5916 this \u6307\u5411 window</li><li>\u51FD\u6570\u5185 this \u6307\u5411\u53D6\u51B3\u4E8E\u8C03\u7528\u65B9\u5F0F</li><li>\u7BAD\u5934\u51FD\u6570 this \u6307\u5411\u5411\u4E0A\u4E00\u5C42\u4F5C\u7528\u57DF\u7684 this</li><li>\u533F\u540D\u51FD\u6570 this \u6307\u5411 window</li></ul>`,61),e=[o];function D(c,t){return n(),a("div",null,e)}var y=s(p,[["render",D],["__file","js-this.html.vue"]]);export{y as default};