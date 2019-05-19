let ids = [1, 2, 3]
let count = 0
let len = ids.length

let start


let get = () => {
    setTimeout(() => {
        console.log(`get:${new Date() -start}ms`)
    }, 1000)
}

let del = (id, cb) => {
    setTimeout(() => {
        console.log(id)
        count++
        if (count === len) {
            cb()
        }
    }, 1000)
}

let confirmDel = () => {
    start = new Date()
    for (id of ids) {
        del(id, get)
    }
    console.log(`done:${new Date() -start}ms`)
}

// confirmDel()

let getP = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`get:${new Date() -start}ms`)
            resolve()
        }, 1000)
    })
}

let delP = (id, cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(id)
            count++
            if (count === len) {
                cb()
            }
            resolve()
        }, 1000)
    })
}

let confirmDelP = () => {
    start = new Date()
    for (id of ids) {
        delP(id, getP)
    }
    console.log(`done:${new Date() -start}ms`)
}

// confirmDelP()

let delP_1 = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(id)
            resolve()
        }, 1000)
    })
}

let getP_1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`get:${new Date() -start}ms`)
            resolve()
        }, 1000)
    })
}

let confirmDelP_all = () => {
    start = new Date()
    let p_Arr = ids.map(id => delP_1(id))

    Promise.all(p_Arr)
        .then(() => {
            return getP_1()
        })
        .then(() => {
            console.log(`done:${new Date() -start}ms`)
        })
}

// confirmDelP_all()

let generator
let getG = () => {
    setTimeout(() => {
        console.log(`get:${new Date() -start}ms`)
        generator.next()
    }, 1000)
}
let delG = (id) => {
    setTimeout(() => {
        console.log(id)
        generator.next()
    }, 1000)
}
function *confimrDelG () {
    start = new Date()
    for (id of ids) {
        yield delG(id)
    }
    yield getG()
    console.log(`done:${new Date() -start}ms`)
}

// generator = confimrDelG()
// generator.next()
// console.log('会被阻塞吗？')

async function confimrDelAsync () {
    start = new Date()
    for (id of ids) {
        await delP_1(id)
    }
    await getP_1()
    console.log(`done:${new Date() -start}ms`)
}

// confimrDelAsync()
// console.log('被阻塞了吗？')

async function confimrDelAsync_all () {
    start = new Date()

    let p_Arr = ids.map(id => delP_1(id))

    await Promise.all(p_Arr)
    await getP_1()
    console.log(`done:${new Date() -start}ms`)
}

// confimrDelAsync_all()
// console.log('被阻塞了吗？')


let get_1 = () => {
    setTimeout(() => {
        console.log(`get:${new Date() -start}ms`)
    }, 1000)
}
let del_1 = (id) => {
    setTimeout(() => {
        console.log(id)
    }, 1000)
}

async function confimrDelAsync_1 () {
    start = new Date()
    for (id of ids) {
        await del_1(id)
    }
    await get_1()
    console.log(`done:${new Date() -start}ms`)
}

// confimrDelAsync_1()

let delP_11 = (id) => {
    setTimeout(() => {
        console.log(id)
    }, 1000)
}

let getP_11 = () => {
    setTimeout(() => {
        console.log(`get:${new Date() -start}ms`)
    }, 1000)
}

async function confimrDelAsync_11 () {
    start = new Date()
    for (id of ids) {
        await delP_11(id)
    }
    await getP_11()
    console.log(`done:${new Date() -start}ms`)
}

confimrDelAsync_11()
console.log('被阻塞了吗？')
