const parseArgs = () => {
    const args = process.argv.reduce((acc, curr, i, arr) => {
        if (curr.startsWith('--')) {
            acc += `${curr.slice(2)} is ${arr[i + 1]}, `;
        }
        return acc;
    }, '');

    console.log(args.slice(0, -2));
};

parseArgs();