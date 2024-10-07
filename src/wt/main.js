import path from 'path';
import os from 'os';
import { Worker } from "worker_threads";

const performCalculations = async () => {
    const cpus = os.cpus().length;
    const workerFile = path.join(path.resolve(), 'src', 'wt', 'worker.js');
    const workers = [];

    for (let i = 0; i < cpus; i++) {
        workers.push(
        new Promise((resolve, reject) => {
            const worker = new Worker(workerFile, {
            workerData: i + 10,
            });
            worker.on("message", resolve);
            worker.on("error", reject);
        })
        );
    }

    const results = await Promise.allSettled(workers);

    const logs = results.map((result) => ({
        status: result.status === `fulfilled` ? "resolved" : "error",
        data: result.value ? result.value : null,
    }));
    console.log(logs);
};

await performCalculations();