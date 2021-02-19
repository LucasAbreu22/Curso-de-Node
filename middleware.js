//middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mdl1'
    next()

}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'midl2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'midl3'

const exec = (ctx, ...middlewares) => {
    const excPasso = indice =>{
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => excPasso(indice + 1))
    }

    excPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)