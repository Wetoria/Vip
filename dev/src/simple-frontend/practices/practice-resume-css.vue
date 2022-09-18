<template>
  <div class="container">
    <div class="question-container">
      <div class="resume-container">
        <h1>Vip</h1>
        <h2>联系方式</h2>
        <ul>
          <li>手机：13700001234</li>
          <li>Email：myemail@163.com</li>
          <li>QQ/微信：637737373/1370001234</li>
        </ul>
        <h2>个人信息</h2>
        <ul>
          <li>Vip/男/1995</li>
          <li>本科/XXX大学/软件工程/18年毕业</li>
          <li>工作年限：2年</li>
          <li>Github：https://github.com/wetoria</li>
        </ul>
        <h2>技能清单</h2>
        <ul>
          <li>熟练使用HTML、CSS、JavaScript等技术</li>
          <li>熟练使用Vue、React、jQuery等JS框架</li>
          <li>熟练使用ES6常用新特性</li>
          <li>熟练使用Ant Design、Element UI、Kendo UI等前端UI框架</li>
          <li>熟练使用axios、Promise、asnyc/await</li>
        </ul>
        <h2>工作经历</h2>
        <h3>XX公司（2018年5月～至今）</h3>
        <h4>XXXX项目</h4>
        <ul>
          <li>
            在这个项目中，承担前端负责人的角色，负责整个系统的前端架构、规范制定、代码审计、版本控制、进度把控。
          </li>
          <li>
            负责前端开发任务的澄清、任务的拆分、相关负责人员的分配、以及任务进度的确认。
          </li>
          <li>攻克XX功能，实现XXX。</li>
          <li>封装XXXX组件，提高整个系统的开发效率。</li>
          <li>
            负责项目性能优化。通过XXX，分析出系统性能瓶颈所在，包括XXX的渲染时间优化，以及XXX全选的响应时间，优化效果显著。
          </li>
          <li>
            处理XXXX问题。根据XXX、XXX、XXX等字段，区分字符串以及数字两种情况进行排序。
          </li>
          <li>
            XXXX的导出。封装导出XXXX表格为图片，以及导出为 Excel
            的方法，并提供一定的扩展性。
          </li>
        </ul>
        <h2>其他</h2>
        <ul>
          <li>学习理解能力优秀。</li>
          <li>业务感知能力优秀。</li>
          <li>英语四级。具备良好的英语阅读能力。</li>
          <li>
            爱好折腾。个人时间记录系统，微信(macOS)消息转发给指定账户，以及通过指定账户给特定好友发送消息。
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: calc(100% - 40px);
  min-height: 100%;
  padding: 10px 20px;
  min-width: 800px;
  color: black;
}
h1,
h2 {
  border-bottom: 1px solid #409eff;
}
h1, h2, h3, h4 {
  color: #409eff
}
body {
  background: #d1d1d1;
}
.resume-container {
  background: white;
  width: 550px;
  padding: 10px 25px;
  border-radius: 8px;
  margin: 0 auto;
  position: relative;
}
</style>