function fixFiles(files) {
    // 1. Create an object that holds unique names with repetitions set to 0
    let labels = [... new Set(files)]
        .reduce((ac, label) => {
            return { ...ac, [label]: 0 }
        }, {});

    // 2. Going through the array checking if the index in the object is greater than zero (repeated). In that case, create a sufix and always update the object
    let fixedFiles = files.map(file => {
        const sufix = (labels[file] > 0) ? `(${labels[file]})` : '';
        labels[file]++;
        return file + sufix;
    });

    return fixedFiles;
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
console.log(fixFiles(files2)); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
console.log(fixFiles(files3)); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']