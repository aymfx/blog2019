(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{665:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("给自己的网站设置 https 认证(nginx 服务器)")])]),s._v(" "),a("h3",{attrs:{id:"网站进行认证操作-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站进行认证操作-1"}},[s._v("#")]),s._v(" 网站进行认证操作 1")]),s._v(" "),a("blockquote",[a("p",[s._v("进入腾讯云选择 ssl 安装服务")])]),s._v(" "),a("h3",{attrs:{id:"下载证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载证书"}},[s._v("#")]),s._v(" 下载证书")]),s._v(" "),a("h3",{attrs:{id:"包含如下东西"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包含如下东西"}},[s._v("#")]),s._v(" 包含如下东西")]),s._v(" "),a("blockquote",[a("p",[s._v("Nginx 文件夹内获得 SSL 证书文件 1_www.domain.com_bundle.crt 和私钥文 2_www.domain.com.key")])]),s._v(" "),a("blockquote",[a("p",[s._v("1_www.domain.com_bundle.crt 文件包括两段证书代码 “-----BEGIN CERTIFICATE-----”和“-----END CERTIFICATE-----”,")])]),s._v(" "),a("blockquote",[a("p",[s._v("2_www.domain.com.key 文件包括一段私钥代码“-----BEGIN RSA PRIVATE KEY-----”和“-----END RSA PRIVATE KEY-----”。")])]),s._v(" "),a("h3",{attrs:{id:"证书安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#证书安装"}},[s._v("#")]),s._v(" 证书安装")]),s._v(" "),a("h3",{attrs:{id:"文件配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件配置"}},[s._v("#")]),s._v(" 文件配置")]),s._v(" "),a("blockquote",[a("p",[s._v("vim /usr/local/nginx/conf/nginx.conf")])]),s._v(" "),a("h3",{attrs:{id:"这是官方示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这是官方示例"}},[s._v("#")]),s._v(" 这是官方示例")]),s._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" www.domain.com")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#填写绑定证书的域名")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v(" 1_www.domain.com_bundle.crt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v(" 2_www.domain.com.key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_session_timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5m")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_protocols")]),s._v(" TLSv1 TLSv1.1 TLSv1.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#按照这个协议配置")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_ciphers")]),s._v(" ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#按照这个套件配置")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_prefer_server_ciphers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("on")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v("   html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#站点目录")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v("  index.html index.htm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"配置参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[s._v("#")]),s._v(" 配置参数")]),s._v(" "),a("p",[s._v("配置文件参数 说明")]),s._v(" "),a("ul",[a("li",[s._v("listen 443 SSL 访问端口号为 443")]),s._v(" "),a("li",[s._v("ssl on 启用 SSL 功能")]),s._v(" "),a("li",[s._v("ssl_certificate 证书文件")]),s._v(" "),a("li",[s._v("ssl_certificate_key 私钥文件")]),s._v(" "),a("li",[s._v("ssl_protocols 使用的协议")]),s._v(" "),a("li",[s._v("ssl_ciphers 配置加密套件，写法遵循 openssl 标准")])]),s._v(" "),a("h3",{attrs:{id:"重启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启"}},[s._v("#")]),s._v(" 重启")]),s._v(" "),a("blockquote",[a("p",[s._v("/usr/local/nginx/sbin/nginx -s reload")])])])}),[],!1,null,null,null);t.default=n.exports}}]);