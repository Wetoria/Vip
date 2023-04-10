<template>
  <span>This is Jumper Page</span>
</template>

<script setup lang="ts">
import JumpMap from '/public/data/Jumper'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute();
const formatPath = route.path.replace('/dist', '')
const target = JumpMap[formatPath]
const stopJump = route?.query?.stop === null
console.log('Jumper ', route, route.path, target, stopJump)

if (!stopJump) {
  if (target) {
    window.location.href = target
  } else {
    const router = useRouter();
    router.replace({
      name: 'Home'
    })
  }
}


</script>