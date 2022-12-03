<template>
  <div class="container">
    <div style="width: 200px; height: 100px;">
      <input v-model="inputValue" @input="handleInput" />
    </div>
    <div style="font-size: 28px">
      <div v-for="item of convertedResult">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import MAP_OBJ from './FontUtils'
const fontFamilies = Object.keys(MAP_OBJ['a'].types)
console.log(MAP_OBJ)

export default {
  data() {
    return {
      inputValue: '',
      convertedResult: [],
    }
  },
  methods: {
    handleInput() {
      this.convert()
    },
    convert() {
      let result = []
      const inputs = this.inputValue.split('')
      function joint(key, bold = false) {
        let temp = `${key}：`
        inputs.forEach((i) => {
          const target = MAP_OBJ[i.toLowerCase()]
          if (target) {
            const isSmall = i.toLowerCase() === i
            if (isSmall) {
              temp += bold ? target.types[key].smallBold : target.types[key].small
            } else {
              temp += bold ? target.types[key].capitalBold : target.types[key].capital
            }
          } else {
            temp += i
          }
        })
        result.push(temp)
      }
      fontFamilies.forEach((i) => {
        if (!['copperplate', 'mathematical'].includes(i)) {
          joint(i)
        }
        joint(i, true)
      })
      this.convertedResult = result
    },
  }
}
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>