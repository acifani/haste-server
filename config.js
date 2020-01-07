{

  "host": "0.0.0.0",
  "port": 7777,

  "keyLength": 10,

  "maxLength": 400000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 500,
        "every": 60000
      }
    }
  },

  "storage": {
    "type": "redis",
    "host": process.env.REDIS_HOST || "127.0.0.1",
    "port": process.env.REDIS_PORT || "6379",
    "password": process.env.REDIS_PASSWORD
  },

  "documents": {
    "about": "./about.md"
  }

}
