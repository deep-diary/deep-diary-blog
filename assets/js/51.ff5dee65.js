(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{673:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("​\t本文主要介绍"),a("code",[t._v("debug_toolbar")]),t._v("的使用方法")]),t._v(" "),a("p",[a("a",{attrs:{href:"www.deep-diary.com"}},[t._v("点击免费观看教学视频")])])]),t._v(" "),a("h1",{attrs:{id:"debug-toolbar"}},[t._v("debug_toolbar")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[t._v("安装")]),t._v(" "),a("div",{staticClass:"language-Python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("django"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("debug"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("toolbar的安装\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"配置"}},[t._v("配置")]),t._v(" "),a("h3",{attrs:{id:"url"}},[t._v("url")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("urlpatterns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    。。。。\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__debug__/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" include"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug_toolbar.urls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# django-debug-toolbar 调试接口")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"setting"}},[t._v("setting")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" DEBUG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# django debug toolbar")]),t._v("\n    INSTALLED_APPS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'debug_toolbar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    MIDDLEWARE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'debug_toolbar.middleware.DebugToolbarMiddleware'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    DEBUG_TOOLBAR_CONFIG "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JQUERY_URL'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//cdn.bootcss.com/jquery/2.1.4/jquery.min.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或把jquery下载到本地然后取消下面这句的注释, 并把上面那句删除或注释掉")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#'JQUERY_URL': '/static/jquery/2.1.4/jquery.min.js',")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SHOW_COLLAPSED'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SHOW_TOOLBAR_CALLBACK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# # 在Django中使用django-debug-toolbar进行调试")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# INTERNAL_IPS = [")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     # 添加您的IP地址，例如 '127.0.0.1'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     '127.0.0.1'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CACHES = {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     'default': {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#         'BACKEND': 'django.core.cache.backends.dummy.DummyCache',")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     }")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# }")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])]),a("h2",{attrs:{id:"简单使用"}},[t._v("简单使用")]),t._v(" "),a("p",[t._v("如果一切正常，在侧面栏可以看到如下效果")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230723171454954.png",alt:"image-20230723171454954"}})]),t._v(" "),a("p",[t._v("然后我们可以查看SQL的具体信息，看起来只有一个查询，居然被查询了30次，可以展开看到详细的查询内容和时间")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230723171710887.png",alt:"image-20230723171710887"}})]),t._v(" "),a("h2",{attrs:{id:"问题"}},[t._v("问题")]),t._v(" "),a("p",[t._v("前端样式不对")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230723133746774.png",alt:"image-20230723133746774"}})]),t._v(" "),a("p",[t._v("由于使用的是阿里云作为存储后端，云端上没有"),a("code",[t._v("debug_toolbar")]),t._v("的样式文件，因此，需要把这个文件夹上传到阿里云中，这个文件夹位于site-packages--\x3edebug_toolbar 下面")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230723133948518.png",alt:"image-20230723133948518"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230723134110604.png",alt:"image-20230723134110604"}})]),t._v(" "),a("h2",{attrs:{id:"更新记录"}},[t._v("更新记录")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Updated Info")]),t._v(" "),a("th",[t._v("Address")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2023-07-23")]),t._v(" "),a("td",[t._v("init")]),t._v(" "),a("td",[t._v("@ home")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td"),t._v(" "),a("td")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);