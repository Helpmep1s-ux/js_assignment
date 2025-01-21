export function log1(message){
    const timestamp = new Date().toISOString();
    console.log('from log1');
    console.log(`[${timestamp}]--${message}`);
}

export function log2(message){
    const timestamp = new Date().toISOString();
    console.log('from log2');
    console.log(`[${timestamp}]--${message}`);
}

// module.exports = {log1:log1,log2:log2};
// also 