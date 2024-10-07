import { fork } from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
    const pathToFile = path.join(path.resolve(), 'src', 'cp', 'files', 'script.js');
    fork(pathToFile, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 'three', false, 'CLOSE']);
