module.exports = function override(config, env) {
    config.resolve.fallback = {
        path: false,
        fs: false,
        crypto: false,
    };

    return config;
};
