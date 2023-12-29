const getString = (len)=>{
    let result = '';
    const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?*#!';
    const charactersLength = allCharacters.length;
    let counter = 0;
    while (counter < len) {
        result += allCharacters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
module.exports = {
    getString
}