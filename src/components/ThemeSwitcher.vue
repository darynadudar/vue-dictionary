<script>
export default {
    data() {
        return {
            light: null,
        };
    },
    mounted() {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            this.light = false;
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.removeItem('theme');
            this.light = true;
        }
    },
    methods: {
        switchTheme() {
            if (this.light) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                this.light = false;
                return false;
            }

            document.documentElement.classList.remove('dark');
            localStorage.removeItem('theme');
            this.light = true;
        },
    },
}
</script>

<template>
    <label class="switch" for="checkbox">
        <input type="checkbox" id="checkbox" @click="switchTheme"/>
        <div class="slider round"></div>
    </label>
</template>

<style scoped>
.switch {
    display: inline-block;
    height: 20px;
    position: relative;
    width: 40px;
}

.switch input {
    display:none;
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
}

.slider:before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    height: 14px;
    width: 14px;
    background-color: #fff;
    transition: .4s;
}

input:checked + .slider {
    background-color: #A445ED;
}

input:checked + .slider:before {
    transform: translateX(20px);
}

.slider.round {
    border-radius: 10px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>