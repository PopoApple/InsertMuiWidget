define(function (require, exports, module) {
    "use strict";
    
    var CommandManager   = brackets.getModule("command/CommandManager"),
		EditorManager    = brackets.getModule("editor/EditorManager"),
        WorkspaceManager = brackets.getModule("view/WorkspaceManager"),
        ExtensionUtils   = brackets.getModule("utils/ExtensionUtils"),
        ExtensionLoader  = brackets.getModule("utils/ExtensionLoader"),
        FileSystem       = brackets.getModule("filesystem/FileSystem"),
        AppInit          = brackets.getModule("utils/AppInit"),
        PanelTemplate    = require("text!panel.html"),
        Strings          = require("strings"),
        widgetInfo       = require("pages/widgetInfo").root,
        panel            = null,
        extensionBase    = ExtensionLoader.getUserExtensionPath()+'/InsertMuiWidget';
    
var tabDatas = [
        {
            id: 'page',
            blocks: [
                {
                    title: '简单页面',
                    link: 'blocks/page-simple.html',
                    code: 'ee'
                },
                {
                    title: '底部工具条',
                    link: 'blocks/page-footer.html'
                },
                {
                    title: '底部导航',
                    link: 'blocks/page-nav-footer.html'
                },
                {
                    title: '底部二级导航',
                    link: 'blocks/page-nav-footer2.html'
                },
                {
                    title: '顶部导航',
                    link: 'blocks/page-nav-header-footer.html'
                },
                {
                    title: '顶部导航2',
                    link: 'blocks/page-nav-header2-offcanvas.html'
                },
                {
                    title: '底部导航+顶部导航',
                    link: 'blocks/page-nav-header2-footer.html'
                },
                {
                    title: '纵向导航',
                    link: 'blocks/page-nav-v.html'
                },
                {
                    title: '综合应用',
                    link: 'blocks/page-demo.html'
                }
]
        },
        {
            id: 'showhide',
            blocks: [
                {
                    title: '选项卡（胶囊式）',
                    link: 'blocks/showhide-tabs-pill.html'
                },
                {
                    title: '选项卡（下划线式）',
                    link: 'blocks/showhide-tabs-line.html'
                },
                {
                    title: '折叠面板',
                    link: 'blocks/showhide-accordion.html'
                }
]
        },
        {
            id: 'card',
            blocks: [
                {
                    title: '简单卡片',
                    link: 'blocks/card-text-img.html'
                },
                {
                    title: '圆角列表',
                    link: 'blocks/card-list.html'
                },
                {
                    title: '圆角折叠面板',
                    link: 'blocks/card-accordion.html'
                },
                {
                    title: '登录框',
                    link: 'blocks/card-btn-input.html'
                },
                {
                    title: '综合应用',
                    link: 'blocks/card-img-list.html'
                }
]
        },
        {
            id: 'list',
            blocks: [
                {
                    title: '简单列表',
                    link: 'blocks/list-simple.html'
                },
                {
                    title: '卡片状链接列表',
                    link: 'blocks/list-link-card.html'
                },
                {
                    title: '图标列表',
                    link: 'blocks/list-icon.html'
                },
                {
                    title: '图标列表2',
                    link: 'blocks/list-icon2.html'
                },
                {
                    title: '图文列表',
                    link: 'blocks/list-image.html'
                },
                {
                    title: '图文列表2',
                    link: 'blocks/list-image2.html'
                },
                {
                    title: '文字列表',
                    link: 'blocks/list-text-complex.html'
                },
                {
                    title: '分组列表',
                    link: 'blocks/list-group.html'
                },
                {
                    title: '分组列表2',
                    link: 'blocks/list-group2.html'
                },
                {
                    title: '表单',
                    link: 'blocks/list-form.html'
                },
                {
                    title: '二级列表',
                    link: 'blocks/list-lv2.html'
                },
                {
                    title: '滑动触发列表项菜单',
                    link: 'blocks/list-swipe-menu.html'
                },
                {
                    title: '复杂列表',
                    link: 'blocks/list-complex.html'
                }
]
        },
        {
            id: 'grid',
            blocks: [
                {
                    title: '导航',
                    link: 'blocks/grid-nav.html'
                },
                {
                    title: '图文表格',
                    link: 'blocks/grid-media-table.html'
                },
                {
                    title: '九宫格',
                    link: 'blocks/grid-9.html'
                },
                {
                    title: '嵌套',
                    link: 'blocks/grid-nested.html'
                }
]
        },
        {
            id: 'scroll',
            blocks: [
                {
                    title: '图片轮播',
                    link: 'blocks/scroll-image.html'
                },
                {
                    title: '下方悬浮标题的图片轮播',
                    link: 'blocks/scroll-image-title.html'
                },
                {
                    title: '新手指引',
                    link: 'blocks/scroll-new.html'
                },
                {
                    title: '左右滑动的图集',
                    link: 'blocks/scroll-album.html'
                },
                {
                    title: '左右滑动分页的图文表格 ',
                    link: 'blocks/scroll-media-table.html'
                },
                {
                    title: '左右拖动分页九宫格 ',
                    link: 'blocks/scroll-grid9.html'
                },
                {
                    title: '可左右拖动的选项卡',
                    link: 'blocks/scroll-tabs.html'
                },
                {
                    title: '下拉上拉触发事件',
                    link: 'blocks/scroll-pullrefresh.html'
                },
                {
                    title: '瀑布流图集',
                    link: 'blocks/scroll-waterflow.html'
                }
]
        },
        {
            id: 'popover',
            blocks: [
                {
                    title: '气泡型弹出菜单',
                    link: 'blocks/popover-bubble.html'
                },
                {
                    title: '顶部弹出菜单',
                    link: 'blocks/popover-dropdown.html'
                },
                {
                    title: '底部弹出菜单 ',
                    link: 'blocks/popover-actionsheet.html'
                },
                {
                    title: '底部弹出菜单2 ',
                    link: 'blocks/popover-actionsheet2.html'
                },
                {
                    title: '侧滑菜单',
                    link: 'blocks/popover-offcanvas.html'
                },
                {
                    title: '侧滑菜单2',
                    link: 'blocks/popover-offcanvas2.html'
                },
                {
                    title: '侧滑菜单3',
                    link: 'blocks/popover-offcanvas3.html'
                }
]
        },
        {
            id: 'tips',
            blocks: [
                {
                    title: '加载框',
                    link: 'blocks/tips-loading.html'
                },
                {
                    title: '自动消失提示框',
                    link: 'blocks/tips-toast.html'
                },
                {
                    title: '自动消失提示框2',
                    link: 'blocks/tips-toast2.html'
                }
]
        },
        {
            id: 'text',
            blocks: [
                {
                    title: '文字语义标签',
                    link: 'elements/text1-semantic-tag.html'
                },
                {
                    title: '对齐方式',
                    link: 'elements/text1-align.html'
                },
                {
                    title: '文字溢出显示省略号',
                    link: 'elements/text1-ellipsis.html'
                }
]
        },
        {
            id: 'image',
            blocks: [
                {
                    title: '基本图片',
                    link: 'elements/image.html'
                },
                {
                    title: '圆角',
                    link: 'elements/image-round.html'
                },
                {
                    title: '圆形',
                    link: 'elements/image-circle.html'
                },
                {
                    title: '宽度自适应',
                    link: 'elements/image-responsive.html'
                }
]
        },
        {
            id: 'icon',
            blocks: [
                {
                    title: '基本图标',
                    link: 'elements/icon.html'
                },
                {
                    title: '自定义样式',
                    link: 'elements/icon-style.html'
                },
                {
                    title: '内置图标',
                    link: 'elements/icon-all.html'
                },
                {
                    title: '内置加载动画图标',
                    link: 'elements/icon-loading.html'
                },
                {
                    title: '添加外部图标',
                    link: 'elements/icon-custom.html'
                }
]
        },
        {
            id: 'badge',
            blocks: [
                {
                    title: '基本标记',
                    link: 'elements/badge.html'
                },
                {
                    title: '角标',
                    link: 'elements/badge-corner.html'
                },
                {
                    title: '主题',
                    link: 'elements/badge-theme.html'
                }
]
        },
        {
            id: 'button',
            blocks: [
                {
                    title: '基本按钮',
                    link: 'elements/button.html'
                },
                {
                    title: '块级按钮',
                    link: 'elements/button-block.html'
                },
                {
                    title: '轮廓线按钮',
                    link: 'elements/button-outlined.html'
                },
                {
                    title: '添加图标',
                    link: 'elements/button-icon.html'
                },
                {
                    title: '切换状态',
                    link: 'elements/button-toggle.html'
                },
                {
                    title: '按钮组',
                    link: 'elements/button-group.html'
                },
                {
                    title: '内置主题',
                    link: 'elements/button-theme.html'
                },
                {
                    title: '自定义主题',
                    link: 'elements/button-theme-custom.html'
                }
]
        },
        {
            id: 'link',
            blocks: [
                {
                    title: '文字链接',
                    link: 'elements/link.html'
                },
                {
                    title: '文字、图标链接',
                    link: 'elements/link-icon-text.html'
                },
                {
                    title: '使用图标样式',
                    link: 'elements/link-icon.html'
                },
                {
                    title: '使用按钮样式',
                    link: 'elements/link-btn.html'
                }
]
        },
        {
            id: 'radio',
            blocks: [
                {
                    title: '基本单选框',
                    link: 'elements/radio.html'
                },
                {
                    title: '在列表中-行选中模式',
                    link: 'elements/radio-list.html'
                },
                {
                    title: '自定义主题',
                    link: 'elements/radio-theme.html'
                }
]
        },
        {
            id: 'checkbox',
            blocks: [
                {
                    title: '基本复选框',
                    link: 'elements/checkbox.html'
                },
                {
                    title: '在列表中-行选中模式',
                    link: 'elements/checkbox-list.html'
                },
                {
                    title: '自定义主题',
                    link: 'elements/checkbox-theme.html'
                }
]
        },
        {
            id: 'input',
            blocks: [
                {
                    title: '默认',
                    link: 'elements/input.html'
                },
                {
                    title: '带清除按钮',
                    link: 'elements/input-clear.html'
                },
                {
                    title: '带有标签',
                    link: 'elements/input-label.html'
                },
                {
                    title: '在列表中-去边框模式',
                    link: 'elements/input-list.html'
                },
                {
                    title: '自定义主题',
                    link: 'elements/input-theme.html'
                }
]
        },
        {
            id: 'textarea',
            blocks: [
                {
                    title: '默认',
                    link: 'elements/textarea.html'
                },
                {
                    title: '带有标签',
                    link: 'elements/textarea-label.html'
                },
                {
                    title: '在列表中-去边框模式',
                    link: 'elements/textarea-list.html'
                },
                {
                    title: '自定义主题',
                    link: 'elements/textarea-theme.html'
                }
]
        },
        {
            id: 'search',
            blocks: [
                {
                    title: '默认',
                    link: 'elements/search.html'
                },
                {
                    title: '自定义主题',
                    link: 'elements/search-theme.html'
                }
]
        },
        {
            id: 'numbox',
            blocks: [
                {
                    title: '默认',
                    link: 'elements/numbox.html'
                },
                {
                    title: '设置最小值、最大值、步长',
                    link: 'elements/numbox-property.html'
                },
                {
                    title: '自定义大小、主题',
                    link: 'elements/numbox-custom.html'
                }
]
        },
        {
            id: 'switch',
            blocks: [
                {
                    title: '默认',
                    link: 'elements/switch.html'
                },
                {
                    title: '去文字',
                    link: 'elements/switch-simple.html'
                },
                {
                    title: '内置主题',
                    link: 'elements/switch-theme.html'
                },
                {
                    title: '自定义文字、样式',
                    link: 'elements/switch-custom.html'
                }
]
        },
        {
            id: 'range',
            blocks: [
                {
                    title: '默认',
                    link: 'elements/range.html'
                },
                {
                    title: '带有标签',
                    link: 'elements/range-label.html'
                },
                {
                    title: '自定义主题',
                    link: 'elements/range-custom.html'
                }
]
        },
        {
            id: 'picker',
            blocks: [
                {
                    title: '普通选择器',
                    link: 'elements/picker.html'
                },
                {
                    title: '二级联动',
                    link: 'elements/picker-lv2.html'
                },
                {
                    title: '三级联动',
                    link: 'elements/picker-lv3.html'
                },
                {
                    title: '在列表中',
                    link: 'elements/picker-list.html'
                }
]
        },
        {
            id: 'timepicker',
            blocks: [
                {
                    title: '默认',
                    link: 'elements/timepicker.html'
                },
                {
                    title: '设定年份区间',
                    link: 'elements/timepicker-set-range.html'
                },
                {
                    title: '设定选中时间',
                    link: 'elements/timepicker-set-all.html'
                },
                {
                    title: '指定类型',
                    link: 'elements/timepicker-type.html'
                },
                {
                    title: '自定义数据',
                    link: 'elements/timepicker-custom.html'
                }
]
        }
];

    function panelOpen() {
        panel.show();
    } 
    function panelClose() {
        panel.hide();
    }
    /*function _insert(btnObj){
        var editor = EditorManager.getFocusedEditor();
        if (!editor) {
            return;
        }
        var a = $(btnObj).attr('id').replace('insertBtn-','').split('_');
        var wIdx = parseInt(a[0]);
        var dIdx = parseInt(a[1]);
        var demo = widgetInfo[wIdx].demos[dIdx];
        var strHtml = demo.codes.html;
        var strCss = demo.codes.css;
        var strJs = demo.codes.js;
        var str;
        if(demo.view=='html'){
            str = strHtml;
        }else if(demo.view=='css'){
            str = strCss;
        }else if(demo.view=='js'){
            str = strJs;
        }else{
            str = strHtml;
            if(strCss!=undefined){
                str += '\n<!-- css 请将代码复制到适当的位置\n'+strCss+'\n-->';
            }
            if(strJs!=undefined){
                str += '\n<!-- js 请将代码复制到适当的位置\n'+strJs+'\n-->';
            }
        }
        var primarySel = editor.getSelection();
        var startPos = primarySel.start;
        var endPos = primarySel.end;
        var indent = '';
        for(var i=0;i<startPos.ch;i++){
          indent += ' ';
        }
        str = str.replace(/\n/g,'\n'+indent);
        editor.document.replaceRange(str,startPos,endPos);
        endPos = editor.getSelection().start;
        editor.setSelection(startPos,endPos,false,0);
    }
    */
    function getTabDataById(id){
        for(var i=0;i<tabDatas.length;i++){
            if(tabDatas[i].id ===id){
                return tabDatas[i];
            }
        }
    }
    function insertCode(tabId,blockIdx){
        var tabData = getTabDataById(tabId);
        console.log(tabData);
        var str = tabData.blocks[blockIdx].code;
        console.log(str);
        var editor = EditorManager.getFocusedEditor();
        if (!editor) {
            return;
        }
        var primarySel = editor.getSelection();
        var startPos = primarySel.start;
        var endPos = primarySel.end;
        var indent = '';
        for(var i=0;i<startPos.ch;i++){
          indent += ' ';
        }
        str = str.replace(/\n/g,'\n'+indent);
        editor.document.replaceRange(str,startPos,endPos);
        endPos = editor.getSelection().start;
        editor.setSelection(startPos,endPos,false,0);
    }
    var currTabData,currBlockIdx;
    function initBlockCode(){
        var block = currTabData.blocks[currBlockIdx];
        var path = extensionBase+'/'+block.link;
        FileSystem.getFileForPath(path).read(function(err, str, stau){
            block.code = str;
            currBlockIdx++;
            if(currBlockIdx <= currTabData.blocks.length-1){
                initBlockCode();
            }else{
                return;
            }
        });
    }
    function initTabCode(id){
        currTabData = getTabDataById(id);
        currBlockIdx = 0;
        initBlockCode();
            /*demo.codes = new Object();
            var htmlStr;
            var contentIdx = str.indexOf('<div class="ui-content">');
            if(contentIdx>=0){
                htmlStr = str.substring(contentIdx+24,str.lastIndexOf('</div>'));
            }else{
                htmlStr = str.substring(str.indexOf('<div id="codeBox"></div>')+24,str.indexOf('</body>'));
            }
            var startIdx = htmlStr.indexOf('\n');
            var endIdx = htmlStr.lastIndexOf('\n');
            demo.codes.html = _replaceImgPath(htmlStr.substring(startIdx+1,endIdx-1));
            if(str.indexOf('<!-- css -->')<0){
                var cssStr = str.substring(str.indexOf('<style>')+7,str.indexOf('</style>'));
                var startIdx = cssStr.indexOf('\n');
                var endIdx = cssStr.lastIndexOf('\n');
                demo.codes.css = _replaceImgPath(cssStr.substring(startIdx+1,endIdx-1));
            }*/
           // if(str.indexOf('/* script */')<0){
           /*     var jsStr = str.substring(str.indexOf('<script>')+8,str.lastIndexOf('</script>'));
                var startIdx = jsStr.indexOf('\n');
                var endIdx = jsStr.lastIndexOf('\n');
                demo.codes.js = _replaceImgPath(jsStr.substring(startIdx+1,endIdx-1));
            }
            if(++demoIdx4Init < widgetInfo[wIdx].demos.length){
                _initDemo(wIdx);
            }else{
                _initDemoView(wIdx);
            }*/
    }
    function showTab(id) {
        if ($('#imuiw-panel-' + id).length == 0) {
            var blocks;
            for (var i = 0; i < tabDatas.length; i++) {
                if (tabDatas[i].id == id) {
                    blocks = tabDatas[i].blocks;
                    break;
                }
            }
            var str = '<div class="showhide-tab clearfix" id="imuiw-panel-' + id + '">';
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                str += '<div class="block">' +
                    '<h5>' + block.title + '</h5>' +
                    '<button class="insert-btn" data-idx='+i+'>插入代码</button>'+
                    '<div class="subpage-loading"><span class="mui-spinner"></span></div>' +
                    '<iframe></iframe>' +
                    '</div>';
            }
            str += '</div>';
            $('#imuiw-panel-tabs').append(str);
            var iframes = $('#imuiw-panel-' + id + ' iframe');
            for (var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                var srcPath = extensionBase+'/'+blocks[i].link;
                iframes[i].src = srcPath;
                iframes[i].onload = function () {
                    $(this).parent().find('.subpage-loading').remove();
                };
            }
            $('#imuiw-panel-' + id).find('.insert-btn').click(function(){
                insertCode(id,parseInt($(this).data('idx')));
            });
            initTabCode(id);
        }
        $('#imuiw-panel .showhide-tab').css('display', 'none');
        $('#imuiw-panel-' + id).css('display', 'block');
    }
 	AppInit.appReady(function() {
	    var COMMAND_ID = "muiwidget.insert";  
	    CommandManager.register(Strings.COMMAND_NAME, COMMAND_ID, panelOpen);	
        
		ExtensionUtils.loadStyleSheet(module, "style.css");
        
        var btnHolder = $('<div id="imuiw-btn-holder"></div>');
		var button = $("<a>");	
		button.attr({
			title: Strings.COMMAND_NAME,
			id: "imuiw-btn",
			href: "#",
			"class": "disabled"
		}).click(panelOpen);
        btnHolder.insertAfter("#toolbar-go-live");
        btnHolder.html(button);
        
        var opts = {Strings: Strings};
        var html_panel = $(Mustache.render(PanelTemplate, opts));
        $('.mui-collapse > a', html_panel).click(function(){
            var $li = $(this).parent();
            if($li.hasClass('mui-active')){
                $li.removeClass('mui-active');
            }else{
                $('.mui-collapse', html_panel).removeClass('mui-active');
                $li.addClass('mui-active');
            }
        });
        
        $('#imuiw-panel-nav a', html_panel).click(function (e) {
            var tabId = this.hash ? this.hash.replace('#', '') : '';
            if (tabId != '') {
                showTab(tabId);
                $('.mui-table-view-cell > a.active', html_panel).removeClass('active');
                $(this).addClass('active');
            }
        });
        
        
        $(".close", html_panel).click(panelClose);    

        panel = WorkspaceManager.createBottomPanel("InsertMuiWidget", html_panel, 260);
        
        showTab('page');
    });
});
