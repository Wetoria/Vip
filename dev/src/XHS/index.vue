<template>
  <div style="display: flex; width: 100%; height: 100%;">
    <div class="input-area">
      <h1>在下方文本框中，输入复制的图片链接，点击确认按钮（或回车）即可查看图片</h1>
      <textarea @input="handleInputChange" @keypress.enter="handleShowPic" placeholder="请输入图片链接" rows="20" style="resize:none; font-size: 20px;"  />
      <span 
        style="
          font-size: 17px;
          color: red;
          padding: 8px 0;
        "
        v-if="errorMsg"
      >{{ errorMsg }}</span>
      <button 
        style="
          width: 100px;
          height: 30px;
          cursor: pointer;
          margin-top:10px;
        "
        @click="handleShowPic"
      >确认</button>
    </div>
    <div class="display-area">
      <div 
        style="
          width: 20%;
          height: fit-content;
          margin-right: 15px;
          margin-bottom: 15px;
          position: relative;
        "
        v-for="item of images"
        :key="item"
      >
        <div 
          class="image-item"
          :style="{
            background: `url(${item}.jpeg) no-repeat`,
            backgroundSize: `100%`,
          }"
        >
        </div>
        <div
          style="
            width: calc(100% - 20px);
            background: rgba(0,0,0,0.7);
            position: absolute;
            bottom: 0;
            font-size: 20px;
            color: white;
            padding: 8px 10px;
            cursor: pointer;
          " 
        >
          <!-- <span
            class="opt-btn"
            @click="handleOperation(item)"
          >下载</span>
          <span>｜</span> -->
          <span
            class="opt-btn"
            @click="handleOperation(item, true)"
          >查看大图</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XHS',
  data() {
    return {
      images: [],
      errorMsg: '',
      tempInput: '',
      downloadCount: 0,
    }
  },
  methods: {
    handleInputChange(event) {
      console.log('values is ', event)
      this.tempInput = event.target.value
    },
    handleShowPic() {
      this.images = this.tempInput.split('，').filter(i => i)
    },
    handleOperation(path, preview) {
      const downloadElement = document.createElement('a');
      downloadElement.href = path
      if (preview) {
        downloadElement.href += '.jpeg'
        downloadElement.target = '_blank'

      }
      downloadElement.download = `Photo${++this.downloadCount}.jpeg`; // 下载后文件名
      document.body.appendChild(downloadElement);
      downloadElement.click(); // 点击下载
      setTimeout(()=>{
        document.body.removeChild(downloadElement); // 下载完成移除
      },100)
    },
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.input-area {
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.display-area {
  width: calc(100% - 40px);
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
.image-item {
  width: 100%;
  /* height: 400px; */
  padding-bottom: 133%;
  border: 1px solid white;
}
.opt-btn:hover {
  color: #00bd7e;
}
</style>