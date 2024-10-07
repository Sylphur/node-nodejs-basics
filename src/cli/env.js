const parseEnv = () => {
    const prefix = 'RSS_';
    let result = '';

    const env = process.env;
    const keys = Object.keys(env).filter((key) => key.startsWith(prefix));
    keys.map((key) => {
        result += `${key}=${process.env[key]}; `;
    })
    console.log(result.slice(0, -2));
    
};

parseEnv();