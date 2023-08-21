(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{667:function(s,a,t){"use strict";t.r(a);var e=t(5),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),t("p",[s._v("​\t本文主要介绍Diary Server API的设计")]),s._v(" "),t("p",[t("a",{attrs:{href:"www.deep-diary.com"}},[s._v("点击免费观看教学视频")])])]),s._v(" "),t("h1",{attrs:{id:"api-design"}},[s._v("API Design")]),s._v(" "),t("h2",{attrs:{id:"requirements"}},[s._v("Requirements")]),s._v(" "),t("ul",[t("li",[s._v("Python >= 3.6")]),s._v(" "),t("li",[s._v("Django (2.2, 3.2, 4.0, 4.1, 4.2)")]),s._v(" "),t("li",[s._v("Django REST Framework (3.10.3, 3.11, 3.12, 3.13, 3.14)")])]),s._v(" "),t("h2",{attrs:{id:"installation"}},[s._v("Installation")]),s._v(" "),t("p",[s._v("Install using "),t("code",[s._v("pip")]),s._v("...")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" drf-spectacular\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("then add drf-spectacular to installed apps in "),t("code",[s._v("settings.py")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("INSTALLED_APPS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ALL YOUR APPS")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'drf_spectacular'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("and finally register our spectacular AutoSchema with DRF.")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("REST_FRAMEWORK "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# YOUR SETTINGS")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DEFAULT_SCHEMA_CLASS'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'drf_spectacular.openapi.AutoSchema'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("drf-spectacular ships with sane "),t("a",{attrs:{href:"https://drf-spectacular.readthedocs.io/en/latest/settings.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("default settings"),t("OutboundLink")],1),s._v(" that should work reasonably well out of the box. It is not necessary to specify any settings, but we recommend to specify at least some metadata.")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("SPECTACULAR_SETTINGS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TITLE'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Deep Diary API'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DESCRIPTION'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Make personal data valuable, both for yourself and others'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'VERSION'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.0.0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SERVE_INCLUDE_SCHEMA'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OTHER SETTINGS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"self-contained-ui-installation"}},[s._v("Self-contained UI installation")]),s._v(" "),t("p",[s._v("Certain environments have no direct access to the internet and as such are unable to retrieve Swagger UI or Redoc from CDNs. "),t("a",{attrs:{href:"https://github.com/tfranzel/drf-spectacular-sidecar",target:"_blank",rel:"noopener noreferrer"}},[s._v("drf-spectacular-sidecar"),t("OutboundLink")],1),s._v(" provides these static files as a separate optional package. Usage is as follows:")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("$ pip install drf"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("spectacular"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sidecar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nINSTALLED_APPS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ALL YOUR APPS")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'drf_spectacular'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'drf_spectacular_sidecar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# required for Django collectstatic discovery")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nSPECTACULAR_SETTINGS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SWAGGER_UI_DIST'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SIDECAR'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# shorthand to use the sidecar instead")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SWAGGER_UI_FAVICON_HREF'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SIDECAR'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'REDOC_DIST'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SIDECAR'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OTHER SETTINGS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"release-management"}},[s._v("Release management")]),s._v(" "),t("p",[t("em",[s._v("drf-spectacular")]),s._v(" deliberately stays below version "),t("em",[s._v("1.x.x")]),s._v(" to signal that every new version may potentially break you. For production we strongly recommend pinning the version and inspecting a schema diff on update.")]),s._v(" "),t("p",[s._v("With that said, we aim to be extremely defensive w.r.t. breaking API changes. However, we also acknowledge the fact that even slight schema changes may break your toolchain, as any existing bug may somehow also be used as a feature.")]),s._v(" "),t("p",[s._v("We define version increments with the following semantics. "),t("em",[s._v("y-stream")]),s._v(" increments may contain potentially breaking changes to both API and schema. "),t("em",[s._v("z-stream")]),s._v(" increments will never break the API and may only contain schema changes that should have a low chance of breaking you.")]),s._v(" "),t("h2",{attrs:{id:"take-it-for-a-spin"}},[s._v("Take it for a spin")]),s._v(" "),t("p",[s._v("Generate your schema with the CLI:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ./manage.py spectacular --color --file schema.yml\n$ docker run -p 80:8080 -e SWAGGER_JSON=/schema.yml -v ${PWD}/schema.yml:/schema.yml swaggerapi/swagger-ui\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("If you also want to validate your schema add the "),t("code",[s._v("--validate")]),s._v(" flag. Or serve your schema directly from your API. We also provide convenience wrappers for "),t("code",[s._v("swagger-ui")]),s._v(" or "),t("code",[s._v("redoc")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" drf_spectacular"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("views "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" SpectacularAPIView"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SpectacularRedocView"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SpectacularSwaggerView\nurlpatterns "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# YOUR PATTERNS")]),s._v("\n    path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'api/schema/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SpectacularAPIView"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("as_view"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'schema'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Optional UI:")]),s._v("\n    path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'api/schema/swagger-ui/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SpectacularSwaggerView"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("as_view"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'schema'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'swagger-ui'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'api/schema/redoc/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SpectacularRedocView"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("as_view"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'schema'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redoc'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://deep-diary.oss-cn-hangzhou.aliyuncs.com/blog/image-20230624102350423.png",alt:"image-20230624102350423"}})]),s._v(" "),t("h2",{attrs:{id:"usage"}},[s._v("Usage")]),s._v(" "),t("p",[t("em",[s._v("drf-spectacular")]),s._v(" works pretty well out of the box. You might also want to set some metadata for your API. Just create a "),t("code",[s._v("SPECTACULAR_SETTINGS")]),s._v(" dictionary in your "),t("code",[s._v("settings.py")]),s._v(" and override the defaults. Have a look at the "),t("a",{attrs:{href:"https://drf-spectacular.readthedocs.io/en/latest/settings.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("available settings"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("The toy examples do not cover your cases? No problem, you can heavily customize how your schema will be rendered.")]),s._v(" "),t("h3",{attrs:{id:"customization-by-using-extend-schema"}},[s._v("Customization by using "),t("code",[s._v("@extend_schema")])]),s._v(" "),t("p",[s._v("Most customization cases should be covered by the "),t("code",[s._v("extend_schema")]),s._v(" decorator. We usually get pretty far with specifying "),t("code",[s._v("OpenApiParameter")]),s._v(" and splitting request/response serializers, but the sky is the limit.")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("from drf_spectacular.utils import extend_schema, OpenApiParameter, OpenApiExample\nfrom drf_spectacular.types import OpenApiTypes\n\nclass AlbumViewset(viewset.ModelViewset):\n    serializer_class = AlbumSerializer\n\n    @extend_schema(\n        request=AlbumCreationSerializer,\n        responses={201: AlbumSerializer},\n    )\n    def create(self, request):\n        # your non-standard behaviour\n        return super().create(request)\n\n    @extend_schema(\n        # extra parameters added to the schema\n        parameters=[\n            OpenApiParameter(name='artist', description='Filter by artist', required=False, type=str),\n            OpenApiParameter(\n                name='release',\n                type=OpenApiTypes.DATE,\n                location=OpenApiParameter.QUERY,\n                description='Filter by release date',\n                examples=[\n                    OpenApiExample(\n                        'Example 1',\n                        summary='short optional summary',\n                        description='longer description',\n                        value='1993-08-23'\n                    ),\n                    ...\n                ],\n            ),\n        ],\n        # override default docstring extraction\n        description='More descriptive text',\n        # provide Authentication class that deviates from the views default\n        auth=None,\n        # change the auto-generated operation name\n        operation_id=None,\n        # or even completely override what AutoSchema would generate. Provide raw Open API spec as Dict.\n        operation=None,\n        # attach request/response examples to the operation.\n        examples=[\n            OpenApiExample(\n                'Example 1',\n                description='longer description',\n                value=...\n            ),\n            ...\n        ],\n    )\n    def list(self, request):\n        # your non-standard behaviour\n        return super().list(request)\n\n    @extend_schema(\n        request=AlbumLikeSerializer,\n        responses={204: None},\n        methods=[\"POST\"]\n    )\n    @extend_schema(description='Override a specific method', methods=[\"GET\"])\n    @action(detail=True, methods=['post', 'get'])\n    def set_password(self, request, pk=None):\n        # your action behaviour\n        ...\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br")])]),t("h3",{attrs:{id:"more-customization"}},[s._v("More customization")]),s._v(" "),t("h2",{attrs:{id:"更新记录"}},[s._v("更新记录")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Date")]),s._v(" "),t("th",[s._v("Updated Info")]),s._v(" "),t("th",[s._v("Address")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("2023-06-24")]),s._v(" "),t("td",[s._v("init")]),s._v(" "),t("td",[s._v("@ Home")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td"),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td"),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td"),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td"),s._v(" "),t("td")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);