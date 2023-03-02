const { stdin: input, stdout: output } = require('process');
const readline = require('readline/promises');

const question = async (query, defaultValue) => {
    const readlineInterface = readline.createInterface({ input, output });

    try {
        return await readlineInterface.question(query) || defaultValue;
    } catch (err) {
        console.log(`Error: `, err);
    } finally {
        readlineInterface.close();
    }
}

module.exports = {
    question,
};
