<template>
    <div :class="['toast', `toast-${type}`, { 'toast-lock': lock }]">
        <div
            :class="['toast-content', { hidden: !active }]"
            v-html="message"
        ></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            active: false
        }
    },
    props: {
        message: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'info'
        },
        duration: {
            type: Number,
            default: 2500
        },
        lock: {
            type: Boolean,
            default: false
        },
        onClose: {
            type: Function,
            default: () => { }
        }
    },
    methods: {
        show () {
            this.addElement()
            this.active = true
            setTimeout(() => {
                this.close()
                this.destroyElement()
            }, this.duration)
        },
        addElement () {
            document.body.appendChild(this.$el)
        },
        destroyElement () {
            setTimeout(() => {
                this.$el.parentNode.removeChild(this.$el)
            }, 300)
        },
        close () {
            this.active = false
            this.onClose.apply(null, arguments)
        }
    },
    mounted () {
        this.show()
    }
}
</script>
<style lang="less" scoped>
html {
    font-size: 50px;
}

.toast {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    text-align: center;
    color: #fff;
    z-index: 999;
    &.toast-lock {
        width: 100%;
        width: 100vw;
        height: 100%;
        height: 100vh;
    }
    &.toast-success {
        color: #43b149;
    }
    &.toast-warning {
        color: #e6a23c;
    }
    &.toast-error {
        color: #f56c6c;
    }
    .toast-content {
        display: block;
        max-width: 6rem;
        padding: 0.2rem 0.4rem;
        line-height: 0.36rem;
        border-radius: 0.05rem;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.8);
        font-size: 0.28rem;
        opacity: 0;
        transform: translateY(0.4rem);
        animation: toasted 0.3s ease forwards;
        &.hidden {
            animation: fadeOut 0.25s ease forwards;
        }
    }
}
@keyframes toasted {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes fadeOut {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-0.4rem);
    }
}
</style>
