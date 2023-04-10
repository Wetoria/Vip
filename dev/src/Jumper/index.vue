<template>
  <span></span>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from 'vue-router'
import { onBeforeMount } from 'vue';
import {getProjectData} from '../Tools/request'

const route = useRoute();
const router = useRouter();

const getMap = async () => {
  const res = await getProjectData(`/data/Jumper.json`)
  const formatPath = route.path.replace('/dist', '')
  const stopJump = route?.query?.stop === null
  console.log('res is ', res)
  const map = res?.data || {}
  const target = map[formatPath]
  console.log('Jumper ', map, route, route.path, target, stopJump)
  if (!stopJump) {
    if (target) {
      window.location.href = target
    } else {
      router.replace({
        name: 'Home'
      })
    }
  }
}
onBeforeMount(() => {
  getMap()
})
</script>