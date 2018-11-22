import typescript from 'rollup-plugin-typescript';

export default {
    input: './lit-html+custom-element+ts-decorators/index.ts',
    external: ['./../node_modules/lit-html/lit-html.js'],
    output: {
        file: './lit-html+custom-element+ts-decorators/index.js',
        format: 'es'
    },
    plugins: [
        typescript({
            "lib": ["dom", "es6"],
            "target": "es6",
            "experimentalDecorators": true
        })
    ]
}