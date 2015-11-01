/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({
    "COMMAND_NAME"					        : "MUI代码助手",
/*******************  Pages  *******************/
    "Widget_Pages"					            : "页面",
    "Widget_Pages_Demo1"					    : "基本页面",
    "Widget_Pages_Demo2"					    : "多页面、固定标题栏和页脚",
    "Widget_Pages_Demo3"					    : "底部导航菜单",
    "Widget_Pages_Demo4"					    : "侧边推出式菜单",
    "Widget_Pages_Demo5"					    : "全屏",
/*******************  Loader  *******************/
    "Widget_Loader"					            : "等待框",
    "Widget_Loader_Demo1"					    : "样式 1",
    "Widget_Loader_Demo2"					    : "样式 2",
    "Widget_Loader_Demo3"					    : "自定义内容",
/*******************  Tabs  *******************/
    "Widget_Tabs"					        : "标签页",
    "Widget_Tabs_Demo1"					    : "横向",
    "Widget_Tabs_Demo2"					    : "纵向",
/*******************  Popup  *******************/
    "Widget_Popup"					            : "弹出框",
    "Widget_Popup_Demo1"					    : "基本弹出框",
    "Widget_Popup_Demo2"					    : "小贴士",
    "Widget_Popup_Demo3"					    : "灯箱",
    "Widget_Popup_Demo4"					    : "菜单",
    "Widget_Popup_Demo5"					    : "多级菜单",
    "Widget_Popup_Demo6"					    : "表单",
    "Widget_Popup_Demo7"					    : "对话框",
    "Widget_Popup_Demo8"					    : "关闭按钮",
    "Widget_Popup_Demo9"					    : "箭头",
    "Widget_Popup_Demo10"					    : "嵌入iframe",
/*******************  Listview  *******************/
    "Widget_Listview"					        : "列表",
    "Widget_Listview_Demo1"					    : "基本列表",
    "Widget_Listview_Demo2"					    : "链接、内嵌式",
    "Widget_Listview_Demo3"					    : "自定义图标",
    "Widget_Listview_Demo4"					    : "分组",
    "Widget_Listview_Demo5"					    : "计数泡泡",
    "Widget_Listview_Demo6"					    : "小图标：16x16",
    "Widget_Listview_Demo7"					    : "缩略图、独立按钮",
    "Widget_Listview_Demo8"					    : "格式化内容",
    "Widget_Listview_Demo9"					    : "表单",
/*******************  Collapsible  *******************/
    "Widget_Collapsible"					        : "折叠框",
    "Widget_Collapsible_Demo1"					    : "基本折叠框",
    "Widget_Collapsible_Demo2"					    : "带样式的折叠框",
    "Widget_Collapsible_Demo3"					    : "折叠框组",
/*******************  Table  *******************/
    "Widget_Table"					            : "表格",
    "Widget_Table_Demo1"					    : "回流式",
    "Widget_Table_Demo2"					    : "列开关式",
/*******************  Filterable  *******************/
    "Widget_Filterable"					            : "搜索",
    "Widget_Filterable_Demo1"					    : "列表",
    "Widget_Filterable_Demo2"					    : "表格",
    "Widget_Filterable_Demo3"					    : "段落",
    "Widget_Filterable_Demo4"					    : "输入提示",
/*******************  Checkbox  *******************/
    "Widget_Checkbox"					        : "复选框",
    "Widget_Checkbox_Demo1"					    : "基本复选框",
    "Widget_Checkbox_Demo2"					    : "纵向组、选框靠右",
    "Widget_Checkbox_Demo3"					    : "横向组",
/*******************  Radio buttons  *******************/
    "Widget_RadioButtons"					        : "单选框",
    "Widget_RadioButtons_Demo1"					    : "基本单选框",
    "Widget_RadioButtons_Demo2"					    : "纵向组、选框靠右",
    "Widget_RadioButtons_Demo3"					    : "横向组",
/*******************  Select menu  *******************/
    "Widget_SelectMenu"					            : "选择框",
    "Widget_SelectMenu_Demo1"					    : "基本选择框",
    "Widget_SelectMenu_Demo2"					    : "选项分组、默认值",
    "Widget_SelectMenu_Demo3"					    : "纵向组",
    "Widget_SelectMenu_Demo4"					    : "横向组",
    "Widget_SelectMenu_Demo5"					    : "自定义弹出框",
    "Widget_SelectMenu_Demo6"					    : "多选",
/*******************  Flip switch  *******************/
    "Widget_FlipSwitch"					            : "开关",
    "Widget_FlipSwitch_Demo1"					    : "基本开关",
    "Widget_FlipSwitch_Demo2"					    : "自定义宽度",
/*******************  Slider  *******************/
    "Widget_Slider"					            : "滑块",
    "Widget_Slider_Demo1"					    : "基本滑块",
    "Widget_Slider_Demo2"					    : "全宽、高亮",
    "Widget_Slider_Demo3"					    : "双向",
/*******************  Input buttons  *******************/
    "Widget_InputButtons"					        : "按钮",
    "Widget_InputButtons_Demo1"					    : "基本Input按钮",
    "Widget_InputButtons_Demo2"					    : "基本Anchor按钮",
    "Widget_InputButtons_Demo3"					    : "带样式的按钮",
    "Widget_InputButtons_Demo4"					    : "图标按钮",
    "Widget_InputButtons_Demo5"					    : "图标按钮 2",
/*******************  Text inputs  *******************/
    "Widget_TextInputs"					            : "输入框",
    "Widget_TextInputs_Demo1"					    : "文本框",
    "Widget_TextInputs_Demo2"					    : "文本域",
    "Widget_TextInputs_Demo3"					    : "搜索",
    "Widget_TextInputs_Demo4"					    : "密码",
    "Widget_TextInputs_Demo5"					    : "数字",
    "Widget_TextInputs_Demo6"					    : "日期",
    "Widget_TextInputs_Demo7"					    : "文件",
/*******************  Grids  *******************/
    "Widget_Grids"					            : "网格",
    "Widget_Grids_Demo1"					    : "两列布局",
    "Widget_Grids_Demo2"					    : "四格布局",
    "Widget_Grids_Demo3"					    : "多格布局",
    "Widget_Grids_Demo4"					    : "单列 + 三列",
/*******************  ContentBlock  *******************/
    "Widget_ContentBlock"					        : "内容块",
    "Widget_ContentBlock_Demo1"					    : "样式 1",
    "Widget_ContentBlock_Demo2"					    : "样式 2",
    "Widget_ContentBlock_Demo3"					    : "样式 3",
/*******************  Form  *******************/
    "Widget_Form"					        : "表单框架",
    "Widget_Form_Demo1"					    : "样式 1",
    "Widget_Form_Demo2"					    : "样式 2"
});