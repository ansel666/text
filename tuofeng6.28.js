function toCamel(o) {
    if (typeof (o) == 'string') {
        o = JSON.parse(o)
    }
    var newO, origKey, newKey, value
    if (o instanceof Array) {
        newO = []
        for (origKey in o) {
            value = o[origKey]
            if (typeof value === 'object') {
                value = toCamel(value)
            }
            newO.push(value)
        }
    } else {
        newO = {}
        for (origKey in o) {
            if (o.hasOwnProperty(origKey)) {
                newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString()
                value = o[origKey]
                if (value !== null && (value.constructor === Object || value instanceof Array)) {
                    value = toCamel(value)
                }
                newO[newKey] = value
            }
        }
    }
    return newO
}

var obj = {
    Name: 'Object Test',
    Children: {
        Name: 'Children Name', 
    }
}

var arr = [{Name:'Array Test'},obj]

var jsonStr ='[{"Name":"Json Test"},{"Name":"Object Test","Children":{"Name":"Children Name"}}]'

console.log('对象测试:',toCamel(obj))
console.log('数组测试:',toCamel(arr))
console.log('json测试:', toCamel(jsonStr))
