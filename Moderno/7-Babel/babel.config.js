const presets = [
    [//primeiro termo do array é outro array com
     //qual pacote vamos utilizar para converter
     //o código
        "@babel/preset-env",
     //assim não presizaremos setar o presets=...
        {
            useBuiltIns: "usage",
            corejs: "3.21.1"
        }
    ]
]

module.exports = { presets }