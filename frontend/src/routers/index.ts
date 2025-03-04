import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes
})

router.beforeEach((to, from, next) => {
    if(!to.meta.middleware) return next()
    const middleware = to.meta.middleware
    const context = {
        to,
        from,
        next
    }
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})

function middlewarePipeline(context: any, middleware: any, index: number) {
    const nextMiddleware = middleware[index]
    if(!nextMiddleware) return context.next
    return () => {
        const nextPipeline = middlewarePipeline(context, middleware, index + 1)
        nextMiddleware({ ...context, nextMiddleware: nextPipeline })
    }
}

export default router