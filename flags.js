function getFlagValue(flag) {
    const index = Process.argv.indexOf(flag) + 1 
    return Process.argv[index]
}

Module.exports = getFlagvalue;