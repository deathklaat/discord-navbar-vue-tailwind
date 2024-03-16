import { ref } from 'vue';

const useDarkMode = () => {
    const isEnabled = ref(localStorage.darkMode ?? false)

    const toggle = () => {
        const className = 'dark'
        const bodyClass = document.body.classList

        isEnabled.value = !isEnabled.value
        localStorage.setItem('darkMode', isEnabled.value)

        isEnabled.value ? bodyClass.add(className) : bodyClass.remove(className)
    }

    return {
        isEnabled,
        toggle,
    }
}
export default useDarkMode