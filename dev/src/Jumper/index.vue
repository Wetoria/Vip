<template>
  <span>This is Jumper Page</span>
</template>

<script setup lang="ts">
import JumpMap from '/public/Jumper'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute();
const target = JumpMap[route.path]
const stopJump = route?.query?.stop === null

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