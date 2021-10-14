const re=/^[SI][0-9]{7}[A-Z]$/

const result=re.test('S1111111A')

console.log('result',result)

//  ^  means starts with...
//  \d+   means any number of digits
//  \.  just means ".", it has a forward slash because it is special character and we need to escape it
//  \d{2} means 2 digits
//  $  means ends with

//put together..it means start with any number digits, followed by a period, followed by 2 digits, and it should end here.  