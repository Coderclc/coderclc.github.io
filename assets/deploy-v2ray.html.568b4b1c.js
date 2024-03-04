import{_ as t,o as p,c as r,a as e,b as o,d as s,e as a,r as c}from"./app.a81d06d1.js";const l={},d=e("h1",{id:"deploy-v2ray",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deploy-v2ray","aria-hidden":"true"},"#"),s(" Deploy V2ray")],-1),i=e("h2",{id:"\u8D2D\u4E70-vps",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8D2D\u4E70-vps","aria-hidden":"true"},"#"),s(" \u8D2D\u4E70 VPS")],-1),h={href:"https://www.vultr.com/",target:"_blank",rel:"noopener noreferrer"},_=s("Vultr"),u={href:"https://cloudcone.com/vps/",target:"_blank",rel:"noopener noreferrer"},D=s("Cloudcone"),y={href:"https://www.vps.net/",target:"_blank",rel:"noopener noreferrer"},f=s("Vps.Net"),b=e("h2",{id:"\u90E8\u7F72-vps",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u90E8\u7F72-vps","aria-hidden":"true"},"#"),s(" \u90E8\u7F72 VPS")],-1),v=e("p",null,[s("ping Ip "),e("code",null,"ping ip")],-1),w=e("p",null,[s("telnet ip + \u7AEF\u53E3 "),e("code",null,"telnet ip port")],-1),g=e("p",null,"ping \u901A vps \u540E\uFF0C\u5C31\u53EF\u4EE5 ssh \u8FDE\u63A5\u4E86\u3002\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u8DF3\u8FC7 ping \u7684\u6B65\u9AA4\uFF0C\u76F4\u63A5\u8FDE\u63A5\u8BD5\u8BD5\u770B\u3002",-1),x=e("h3",{id:"ssh-\u8FDE\u63A5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ssh-\u8FDE\u63A5","aria-hidden":"true"},"#"),s(" SSH \u8FDE\u63A5")],-1),m={href:"https://www.xshell.com/en/xshell-2/",target:"_blank",rel:"noopener noreferrer"},S=s("XSHELL 7"),k=s(" \u4E1A\u754C\u6700\u5F3A\u5927\u7684 SSH \u5BA2\u6237\u7AEF"),P={href:"https://git-for-windows.github.io/",target:"_blank",rel:"noopener noreferrer"},V=s("Git for Windows"),N=s("\u5728 windows \u547D\u4EE4\u7A97\u53E3\uFF0C\u6216 Git for Windows \u7684 Git Bash \u7A97\u53E3\uFF0C\u8F93\u5165\uFF1A "),B=e("code",null,"ssh root@your-vps-ip",-1),T=s(" \uFF0C\u7136\u540E\u56DE\u8F66\uFF0C\u7136\u540E\u8F93\u5165 vps \u7684 root \u5BC6\u7801\uFF0C\u5BC6\u7801\u53EF\u4EE5\u70B9\u9F20\u6807\u53F3\u952E\u590D\u5236\u7C98\u8D34\u3002"),C=e("h3",{id:"\u4F20\u8F93\u6587\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4F20\u8F93\u6587\u4EF6","aria-hidden":"true"},"#"),s(" \u4F20\u8F93\u6587\u4EF6")],-1),L={href:"https://winscp.net/eng/index.php",target:"_blank",rel:"noopener noreferrer"},W=s("WinSCP"),E=s(" WinSCP \u662F Microsoft Windows \u7684\u6D41\u884C SFTP \u5BA2\u6237\u7AEF\u548C FTP \u5BA2\u6237\u7AEF\uFF01\u4F7F\u7528\u5728\u672C\u5730\u8BA1\u7B97\u673A\u548C\u8FDC\u7A0B\u670D\u52A1\u5668\u4E4B\u95F4\u590D\u5236\u6587\u4EF6"),U=a('<h3 id="\u5B89\u88C5-v2ray" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-v2ray" aria-hidden="true">#</a> \u5B89\u88C5 V2ray</h3><p>\u5B89\u88C5 curl \u547D\u4EE4\uFF1A <code>apt-get install -y curl</code></p><p>\u5B89\u88C5 V2ray \u547D\u4EE4 <code>source &lt;(curl -sL https://multi.netlify.app/v2ray.sh) --zh</code></p><p>V2ray \u63A8\u8350\u4F7F\u7528 <code>websocket</code> \u534F\u8BAE</p><p><strong>Debian \u67E5\u770B\u9632\u706B\u5899\u7684\u5F00\u5173\u4EE5\u53CA\u72B6\u6001</strong></p><p>\u67E5\u770B\u9632\u706B\u5899\u73B0\u6709\u89C4\u5219\uFF1A</p><p><code>ufw status</code></p><p>\u5F00\u542F/\u5173\u95ED\u9632\u706B\u5899\uFF1A</p><p><code>ufw enable //\u5F00\u542F ufw disable //\u5173\u95ED</code></p><p>\u5F00\u542F\u6307\u5B9A tcp \u6216\u8005 udp \u7AEF\u53E3\uFF1A</p><p><code>ufw allow 2333/tcp</code></p><p>\u540C\u65F6\u5F00\u542F tcp \u4E0E udp \u7AEF\u53E3\uFF1A</p><p><code>ufw allow 2333</code></p><p>\u5220\u9664\u7AEF\u53E3\uFF1A</p><p><code>ufw delete allow 2333</code></p><p><strong>Debian \u67E5\u770B\u7AEF\u53E3\u4EE5\u53CA\u72B6\u6001</strong></p><p>\u67E5\u770B\u6240\u6709\u7AEF\u53E3</p><p><code>netstat -tunlp</code></p><p>\u67E5\u770B\u6307\u5B9A\u7AEF\u53E3</p><p><code>netstat -tunlp | grep 2333</code></p><h3 id="\u540C\u6B65\u65F6\u95F4\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65\u65F6\u95F4\u534F\u8BAE" aria-hidden="true">#</a> \u540C\u6B65\u65F6\u95F4\u534F\u8BAE</h3><p>1\u3001\u4E00\u822C\u56FD\u5916\u7684 VPS \u7684\u955C\u50CF\u90FD\u662F\u9ED8\u8BA4\u7684\u56FD\u5916\u65F6\u533A\uFF0C\u4F7F\u7528\u8D77\u6765\u4E0D\u662F\u5F88\u65B9\u4FBF\u3002\u53EF\u4EE5\u628A\u5B83\u4FEE\u6539\u6210\u5317\u4EAC\u65F6\u95F4\uFF0C\u5C31\u4F1A\u65B9\u4FBF\u5F88\u591A\u3002 \u4FEE\u6539\u4E2D\u56FD\u65F6\u533A\u4EE3\u7801\u5982\u4E0B\uFF1A</p><p><code>\\cp -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</code></p><p>2\u3001\u5229\u7528 NTP \u540C\u6B65\u65F6\u95F4\u534F\u8BAE</p><p>CentOS \u7CFB\u7EDF\u5148\u5B89\u88C5 NTP\uFF1A<code>yum install ntp ntpdate -y</code></p><p>\u5982\u679C\u662F Ubuntu/Debian \u7CFB\u7EDF\u6267\u884C\u4E0B\u9762 2 \u6761\u547D\u4EE4\u6765\u5B89\u88C5 NTP</p><p><code>apt-get update</code></p><p><code>apt-get install ntp ntpdate -y</code></p><p>\u5B89\u88C5 NTP \u540E\uFF0C\u6309\u7167\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\u4EE5\u4E0B 3 \u6761\u547D\u4EE4\uFF0C\u5206\u522B\u662F\u505C\u6B62 NTP \u670D\u52A1\u3001\u540C\u6B65 NTP \u65F6\u95F4\u3001\u542F\u52A8 NTP \u670D\u52A1\uFF1A</p><p><code>service ntpd stop</code></p><p><code>ntpdate us.pool.ntp.org</code></p><p><code>service ntpd start</code></p><p>\u6267\u884C\u5B8C\u6210\u540E\uFF0CVPS \u4E0A\u5C31\u662F\u76F8\u5BF9\u7CBE\u786E\u7684\u65F6\u95F4\u8BBE\u7F6E\u4E86\u3002\u5F88\u591A\u4F9D\u8D56\u4E8E\u7CFB\u7EDF\u65F6\u95F4\u7684\u5E94\u7528\u7A0B\u5E8F\u4E5F\u5C31\u80FD\u6B63\u5E38\u5DE5\u4F5C\u4E86\u3002\u6CE8\u610F\uFF1A\u5F53 vps \u91CD\u542F\u540E\u8F93\u5165 date \u6765\u68C0\u67E5\u4E0B\u65F6\u95F4\uFF0C\u5982\u679C\u65F6\u95F4\u4E0D\u662F\u6700\u65B0\u7684\uFF0C\u518D\u6267\u884C\u4EE5\u4E0A 3 \u6761\u547D\u4EE4\u5373\u53EF\u3002</p><p>\u9664\u4E86\u901A\u8FC7 NTP \u6765\u540C\u6B65\u65F6\u95F4\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u624B\u52A8\u4FEE\u6539 vps \u7CFB\u7EDF\u65F6\u95F4\uFF0C\u9700\u8981\u5148\u4FEE\u6539\u4E2D\u56FD\u65F6\u533A\uFF0C\u4E4B\u540E\u8F93\u5165\u65F6\u95F4\u547D\u4EE4\uFF0C\u683C\u5F0F\uFF08\u6570\u5B57\u6539\u4E3A\u548C\u81EA\u5DF1\u7535\u8111\u65F6\u95F4\u4E00\u81F4\uFF0C\u8BEF\u5DEE 30 \u79D2\u4EE5\u5185\uFF09\uFF1A<code>date -s &quot;2020-2-02 19:14:00&quot;</code></p><h3 id="\u4E00\u952E\u52A0\u901F-vps-\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E00\u952E\u52A0\u901F-vps-\u670D\u52A1\u5668" aria-hidden="true">#</a> \u4E00\u952E\u52A0\u901F VPS \u670D\u52A1\u5668</h3><p>\u4E94\u5408\u4E00\u7684 TCP \u7F51\u7EDC\u52A0\u901F\u811A\u672C\uFF0C\u5305\u62EC\u4E86 BBR \u539F\u7248\u3001BBR \u9B54\u6539\u7248\u3001\u66B4\u529B BBR \u9B54\u6539\u7248\u3001BBR plus\uFF08\u9996\u9009\uFF09\u3001Lotsever(\u9510\u901F)\u5B89\u88C5\u811A\u672C\u3002\u53EF\u7528\u4E8E KVMXen \u67B6\u6784\uFF0C\u4E0D\u517C\u5BB9 OpenVZ\uFF08OVZ\uFF09\u3002\u652F\u6301 Centos 6+ / Debian 7+ / Ubuntu 14+\uFF0CBBR \u9B54\u6539\u7248\u4E0D\u652F\u6301 Debian 8\u3002</p><p><code>wget -N --no-check-certificate &quot;https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh&quot;</code></p><p><code>chmod +x tcp.sh</code></p><p><code>./tcp.sh</code></p><h2 id="\u94FE\u63A5-vps" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5-vps" aria-hidden="true">#</a> \u94FE\u63A5 VPS</h2><h3 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> Window</h3>',41),R={href:"https://github.com/2dust/v2rayN",target:"_blank",rel:"noopener noreferrer"},q=s("V2rayN"),I=e("p",null,[s("\u76F4\u63A5\u4E0B\u8F7D "),e("code",null,"v2rayN-Core.zip"),s(" \u5305\u542B "),e("code",null,"v2ray-core"),s(" \u548C "),e("code",null,"Xray-core")],-1),O=e("h3",{id:"ios",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ios","aria-hidden":"true"},"#"),s(" IOS")],-1),z=e("p",null,"Shadowrocket",-1),G={id:"proxysu",tabindex:"-1"},H=e("a",{class:"header-anchor",href:"#proxysu","aria-hidden":"true"},"#",-1),X=s(),F={href:"https://github.com/proxysu/ProxySU/tree/v2.2.2",target:"_blank",rel:"noopener noreferrer"},M=s("ProxySU"),Z=e("p",null,[s("\u76EE\u524D\u6BD4\u8F83\u70ED\u95E8\u7684 v2ray \u534F\u8BAE "),e("code",null,"WebSocket+TLS+Web")],-1),A=e("p",null,[e("strong",null,"\u8D2D\u4E70\u57DF\u540D")],-1),K={href:"https://www.namecheap.com/",target:"_blank",rel:"noopener noreferrer"},j=s("Namecheap"),J=a(`<p><strong>Caddy \u8F6C\u53D1\u57DF\u540D</strong></p><p>Caddyfile \u914D\u7F6E</p><div class="language-text ext-text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">domain {</span></span>
<span class="line"><span style="color:#D4D4D4;">    root * /usr/share/caddy</span></span>
<span class="line"><span style="color:#D4D4D4;">    file_server</span></span>
<span class="line"><span style="color:#D4D4D4;">    tls {</span></span>
<span class="line"><span style="color:#D4D4D4;">   </span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">    @v2ray_websocket {</span></span>
<span class="line"><span style="color:#D4D4D4;">        path /ray</span></span>
<span class="line"><span style="color:#D4D4D4;">        header Connection *Upgrade*</span></span>
<span class="line"><span style="color:#D4D4D4;">        header Upgrade websocket</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">    reverse_proxy @v2ray_websocket localhost:10000</span></span>
<span class="line"><span style="color:#D4D4D4;">    ##sites##</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">domain {</span></span>
<span class="line"><span style="color:#D4D4D4;">    root * /usr/share/caddy/dist</span></span>
<span class="line"><span style="color:#D4D4D4;">    file_server</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre></div>`,3);function Q(Y,$){const n=c("ExternalLinkIcon");return p(),r("div",null,[d,i,e("p",null,[e("a",h,[_,o(n)])]),e("p",null,[e("a",u,[D,o(n)])]),e("p",null,[e("a",y,[f,o(n)])]),b,v,w,g,x,e("ol",null,[e("li",null,[e("a",m,[S,o(n)]),k]),e("li",null,[e("a",P,[V,o(n)]),N,B,T])]),C,e("p",null,[e("a",L,[W,o(n)]),E]),U,e("p",null,[e("a",R,[q,o(n)])]),I,O,z,e("h2",G,[H,X,e("a",F,[M,o(n)])]),Z,A,e("p",null,[e("a",K,[j,o(n)])]),J])}var se=t(l,[["render",Q],["__file","deploy-v2ray.html.vue"]]);export{se as default};