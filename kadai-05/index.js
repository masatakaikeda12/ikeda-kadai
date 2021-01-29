const profile = {
    name: 'masataka',
    age:20,
    hobby: 'soccer',
    major: 'japanese history',
    gender: 'Male',
    hometown: 'Shiga',
    job: 'McDonald'
}
const keys = Object.keys(profile)
console.log(keys)

for (let index = 0; index < keys.length; index = index + 1) {
    const key = keys[index]
    const value = profile[key]
    console.log('私の ' + key + ' は ' + value + ' です。')
}