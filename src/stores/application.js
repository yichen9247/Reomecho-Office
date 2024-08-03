
import { ref } from 'vue'
import { defineStore } from 'pinia'

const isMobile = () => {
  
  if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) || window.innerWidth <= 1000) {
      return true;
  } else return false;
}

onresize = async () => {
  let state = isMobile();
  const applicationStore = useApplicationStore();
  applicationStore.setIsDeviceMobile(state);
}

export const useApplicationStore = defineStore('application', () => {
  const isDeviceMobile = ref(isMobile());

  const setIsDeviceMobile = (value) => isDeviceMobile.value = value;

  return { isDeviceMobile, setIsDeviceMobile }
})
