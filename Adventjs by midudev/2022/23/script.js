export default function executeCommands(commands) {
    const records = new Array(8).fill(0);
    const processCommand = (command) => {
        const [keyword, args] = command.split(' ');
        const argsList = args.split(',');
        return {
            keyword,
            argsList,
        };
    };
    const extractRecordIndex = (name) => parseInt(name.substr(1));
    const getRealValue = (value) =>
        value.substr(0, 1) === 'V'
            ? records[extractRecordIndex(value)]
            : parseInt(value);

    const putResultIntoBounds = (value) => {
        if (value < 0) {
            return 256 + value;
        }
        if (value > 255) {
            return value - 255;
        }
        return value;
    };

    const mov = (args) => {
        console.log('MOV');

        const [value, storage] = args;
        const recordIndex = extractRecordIndex(storage);
        const realValue = getRealValue(value);
        records[recordIndex] = realValue;
    };

    const add = (args) => {
        console.log('ADD');

        const [a, b] = args;
        const recordIndex = extractRecordIndex(a);
        const sum = getRealValue(a) + getRealValue(b);
        const validResult = putResultIntoBounds(sum);
        records[recordIndex] = validResult;
    };

    const dec = (args) => {
        console.log('DEC');

        const [record] = args;
        const recordIndex = extractRecordIndex(record);
        const validResult = putResultIntoBounds(records[recordIndex] - 1);
        records[recordIndex] = validResult;
    };

    const inc = (args) => {
        console.log('INC', args);

        const [record] = args;
        const recordIndex = extractRecordIndex(record);
        const validResult = putResultIntoBounds(records[recordIndex] + 1);
        records[recordIndex] = validResult;
    };

    const jump = (args) => {
        const [newIndex] = args;
        if (records[0] === 0) {
            return;
        }
        currentCommandIndex = newIndex;
    };

    let currentCommandIndex = 0;
    while (currentCommandIndex < commands.length) {
        const currentCommand = commands[currentCommandIndex];
        const statement = processCommand(currentCommand);
        switch (statement.keyword) {
            case 'MOV':
                mov(statement.argsList);
                break;
            case 'ADD':
                add(statement.argsList);
                break;
            case 'DEC':
                dec(statement.argsList);
                break;
            case 'INC':
                inc(statement.argsList);
                break;
            case 'JUMP':
                jump(statement.argsList);
                break;
            default:
                break;
        }
        console.log(statement.keyword, records);

        currentCommandIndex++;
    }

    return records;
}
const statements = ['MOV 10,V00', 'DEC V00', 'INC V01', 'JMP 1', 'INC V06'];
console.log(executeCommands(statements));
