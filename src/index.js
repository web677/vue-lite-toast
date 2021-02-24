import { render, h } from 'vue'
import Toast from './toast.vue'

const createElement = () => typeof document !== 'undefined' && document.createElement('div')

const mount = (component, { props, children, element, app } = {}) => {
    let el = element || createElement()

    let vNode = h(component, props, children)
    if (app && app._context) {
        vNode.appContext = app._context
    }

    render(vNode, el)

    const destroy = () => {
        if (el) {
            render(null, el)
        }
        el = null
        vNode = null
    }

    return { vNode, destroy, el }
}

Toast.install = (app) => {
    const methods = {
        open (message, options = {}) {
            return mount(Toast, {
                props: { message, ...options }
            })
        },
        info (message, options = {}) {
            options.type = 'info'
            this.open(message, options)
        },
        success (message, options = {}) {
            options.type = 'success'
            this.open(message, options)
        },
        warning (message, options = {}) {
            options.type = 'warning'
            this.open(message, options)
        },
        error (message, options = {}) {
            options.type = 'error'
            this.open(message, options)
        }
    }
    app.$toast = methods
    app.config.globalProperties.$toast = methods
}

export { Toast }
export default Toast
