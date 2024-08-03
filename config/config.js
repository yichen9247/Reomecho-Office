
import display1 from "./display/display_1.png"
import display2 from "./display/display_2.png"
import display3 from "./display/display_3.png"
import screenhot from "./images/screenhot.png"

export default {
    header: {
        nav_title: 'Reomecho',
        linkList: [{
            title: '预览',
            toast: false,
            target: '_blank',
            href: 'https://boke.xiaokolomi.cn/',
        },{
            title: '下载',
            toast: false,
            target: '_blank',
            href: 'https://github.com/yichen9247/release',
        },{
            title: '仓库',
            toast: false,
            target: '_blank',
            href: 'https://github.com/yichen9247',
        },{
            title: '文档',
            toast: true,
            target: '_blank',
            toastText: '文档建设中',
            href: 'https://github.com/yichen9247/wiki',
        }]
    },

    footer: {
        html: `
            <p>@ Copyright TimeX 保留所有权利.</p>
        `
    },

    global: {
        site_title: 'Reomecho'
    },

    main: {
        title: 'Reomecho',
        image: screenhot,
        desc: 'Reomecho是一个以Vite为框架构建的高性能博客平台，它采用无服务器后端架构和简洁的文档语言，致力于为用户提供一个快速、易于维护的博客系统，Reomecho的下一代版本Next提供了前后端分离的技术架构，即使后端出现问题前端依旧能稳定运行。',
        desc_mobile: '一个以Vite为框架构建的高性能博客平台，它采用无服务器后端架构和简洁的文档语言。',

        button: [{
            title: '立即下载',
            target: '_blank',
            background: '#495057',
            href: 'https://github.com/yichen9247/release',
        },{
            title: '开源地址',
            target: '_blank',
            background: '#f0323c',
            href: 'https://github.com/yichen9247',
        },{
            title: '使用文档',
            target: '_blank',
            background: '#3cd278',
            href: 'https://github.com/yichen9247/wiki',
        }]
    },

    statistics: {
        title: '简单的统计安心的数据',
        desc: '无需因陌生而胆怯，我眼里都是灰烬~',

        data: [{
            title: '代码量',
            value: '1W+'
        },{
            title: '运行天数',
            value: '100+'
        },{
            title: '团队服务',
            value: '15+'
        },{
            title: '站点数量',
            value: '2700+'
        }]
    },

    selectntro: {
        title: '让写作回归写作',
        desc: '无需因陌生而胆怯，我眼里都是灰烬~',
        data: [{
            title: '强大的支持团队',
        },{
            title: '持久且稳定运行',
        },{
            title: '独家自研解析器',
        },{
            title: '高活跃度的群聊'
        },{
            title: '内置了后台系统',
        },{
            title: '免费且长期开源'
        }]
    },

    display: [{
        title: '稳定可靠',
        image: display1,
        desc: '轻松地安装和搭建博客系统',
        data: [{
            title: '再不用因为内容安全而担忧'
        },{
            title: '只需一次配置便可一劳永逸'
        },{
            title: '无需费心去寻找和下载主题'
        }]
    },{
        title: '新兴势力',
        image: display2,
        desc: '新的势力开始都是高速发展',
        data: [{
            title: '可以方便地查找你写的文章'
        },{
            title: '不再为搜索引擎收录而安心'
        },{
            title: '不断精进的技术全新的大门'
        }]
    },{
        title: '快人一步',
        image: display3,
        desc: '整体建立在快速构建的Vite之上',
        data: [{
            title: '文章的测试达到了近一千次'
        },{
            title: '性能优化和释放达到了极致'
        },{
            title: '使用原生文档语法构建文章'
        }]
    }]
}