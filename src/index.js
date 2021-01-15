import x from './x.js'
import png from './assets/柯基.jpeg'
console.log(png);
console.log('hi')
console.log(x)

const div = document.getElementById('app')
console.log('div');
console.log(div);
div.innerHTML = `
    <img src="${png}">
`
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    // 这是一个延迟对象
    const promise = import('./lazy')
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{
        console.log('模块加载错误');
    })
}
div.appendChild(button)

console.log('前端开发')
console.log('雪儿好')