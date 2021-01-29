  
// 生まれた日を入力
const day = parseInt(process.argv[2])

if (day % 3 === 0) {
    console.log('あなたは陽気な性格です')
} else if (day % 3 === 1) {
    console.log('あなたは内気な性格です')
} else {
    console.log('あなたは寛大な性格です')
}