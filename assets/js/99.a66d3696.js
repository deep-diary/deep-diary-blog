(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{722:function(s,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("​\t本文主要介绍Imgga的基本使用，实现自动标注，获取图片颜色，包括主题，前景色，背景色，图片自动分类")]),s._v(" "),a("p",[a("a",{attrs:{href:"www.deep-diary.com"}},[s._v("点击免费观看教学视频")])])]),s._v(" "),a("h1",{attrs:{id:"imgga"}},[s._v("Imgga")]),s._v(" "),a("h2",{attrs:{id:"简单使用"}},[s._v("简单使用")]),s._v(" "),a("h3",{attrs:{id:"image-auto-tagging"}},[s._v("Image Auto Tagging")]),s._v(" "),a("p",[s._v("输入图片")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/demo2.jpg",alt:"demo2"}})]),s._v(" "),a("p",[s._v("执行效果")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'child'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'son'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'male'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'person'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'childhood'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kid'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'grass'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fun'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'boy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'park'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'offspring'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'little'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'outdoors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'summer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'happiness'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'happy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("源码")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n        :param img_path: 图片路径，可能是本地路径，也可能是url\n        :return: imgga api 的返回结果\n        """')]),s._v("\n        tagging_query "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'verbose'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'language'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("language"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'threshold'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("threshold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断img_path 是本地路径还是url")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("startswith"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            resp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imagga_get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tags'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tagging_query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            resp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imagga_post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tags'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tagging_query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'result'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        tags "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tag'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'en'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'result'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tags'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" tags\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("执行代码")]),s._v(" "),a("p",[s._v("通过这个函数，可以兼容url或者是本地图片")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("img_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'D:\\BlueDoc\\DiaryWin\\source\\img\\demo2.jpg'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# img_path = 'https://www.imagga.com/static/images/tagging/wind-farm-538576_640.jpg'")]),s._v("\nimg_imgga "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ImgImgga"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nrst "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" img_imgga"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("on_tags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rst = img_imgga.on_categorizations(img_path)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rst = img_imgga.on_colors(img_path)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"image-color-fetch"}},[s._v("Image Color Fetch")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/demo2.jpg",alt:""}})]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_colors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断img_path 是本地路径还是url")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("startswith"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            resp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imagga_get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'colors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            resp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imagga_post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'colors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'result'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n        image_colors "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html_code'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" color "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'result'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'colors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'image_colors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        foreground_colors "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html_code'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" color "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'result'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'colors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foreground_colors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        background_colors "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html_code'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" color "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'result'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'colors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'background_colors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" image_colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" foreground_colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" background_colors\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("执行代码")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("img_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'D:\\BlueDoc\\DiaryWin\\source\\img\\demo2.jpg'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# img_path = 'https://www.imagga.com/static/images/tagging/wind-farm-538576_640.jpg'")]),s._v("\nimg_imgga "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ImgImgga"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rst = img_imgga.on_tags(img_path)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rst = img_imgga.on_categorizations(img_path)")]),s._v("\nrst "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" img_imgga"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("on_colors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("输出结果：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#4c5328'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#7b8b3a'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#919177'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#16262e'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#dad2b7'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#d4cd9e'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#7d6a47'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#2e2c29'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#6e7e38'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#3b4120'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#a3a68b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("函数返回三个变量，分辨是图片，前景色，背景色的颜色类别，每个类别最多返回5个")]),s._v(" "),a("h3",{attrs:{id:"categorizers"}},[s._v("Categorizers")]),s._v(" "),a("p",[s._v("输入图片：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/demo2.jpg",alt:"demo2"}})]),s._v(" "),a("p",[s._v("函数代码：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_categorizations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断img_path 是本地路径还是url")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("startswith"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断url是否有效")]),s._v("\n\n            resp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imagga_get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'categories/personal_photos'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            resp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imagga_post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'categories/personal_photos'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'result'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        cates "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("cate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'en'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" cate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" resp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'result'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'categories'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" cates\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("执行代码：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("img_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'D:\\BlueDoc\\DiaryWin\\source\\img\\demo2.jpg'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# img_path = 'https://www.imagga.com/static/images/tagging/wind-farm-538576_640.jpg'")]),s._v("\nimg_imgga "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ImgImgga"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rst = img_imgga.on_tags(img_path)")]),s._v("\nrst "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" img_imgga"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("on_categorizations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rst = img_imgga.on_colors(img_path)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rst"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("输出结果：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nature landscape'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"更新记录"}},[s._v("更新记录")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Date")]),s._v(" "),a("th",[s._v("Updated Info")]),s._v(" "),a("th",[s._v("Address")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("2023-06-13")]),s._v(" "),a("td",[s._v("init")]),s._v(" "),a("td",[s._v("@ home")])]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td"),s._v(" "),a("td"),s._v(" "),a("td")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);