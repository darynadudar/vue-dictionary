<script setup>
import { ref, onMounted } from 'vue';

const light = ref(null);

onMounted(() => {
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        light.value = false;
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.removeItem('theme');
        light.value = true;
    }
});

const switchTheme = () => {
    if (light.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        light.value = false;
        return false;
    }

    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
    light.value = true;
};
</script>

<template>
    <div :class="light ? 'light' : 'dark'"
         class="theme-switcher flex items-center gap-5">
        <label class="switch" for="checkbox">
            <input
                type="checkbox"
                id="checkbox"
                class="hidden"
                :checked="!light"
                @click="switchTheme"/>
            <div class="slider round"></div>
        </label>

        <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.theme-switcher {
    &.dark {
        svg > * {
            @apply stroke-purple;
        }
    }

    .switch {
        display: inline-block;
        height: 20px;
        position: relative;
        width: 40px;
    }

    .slider {
        background-color: #757575;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: .4s;

        &:before {
            content: '';
            position: absolute;
            top: 3px;
            left: 3px;
            height: 14px;
            width: 14px;
            background-color: #fff;
            transition: .4s;
        }

        &.round {
            border-radius: 10px;

            &:before {
                border-radius: 50%;
            }
        }
    }

    input {
        &:checked {
            & + .slider {
                @apply bg-purple;

                &:before {
                    transform: translateX(20px);
                }
            }
        }
    }
}

</style>