import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";
import cleanup from 'rollup-plugin-cleanup';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: "dist/crossecore.cjs.js",
            format: 'cjs'
        }
        ,
        {
            file: "dist/crossecore.cjs.min.js",
            format: 'cjs',
            plugins: [terser({ format: { comments: false } })]
        }
        ,
        {
            file: "dist/crossecore.umd.js",
            format: 'umd',
            name: "crossecore"
        }
        ,
        {
            file: "dist/crossecore.umd.min.js",
            format: 'umd',
            name: "crossecore",
            plugins: [terser({ format: { comments: false } })]
        }
        ,
        {
            file: "dist/crossecore.amd.js",
            format: 'amd',
            name: "crossecore"
        }
        ,
        {
            file: "dist/crossecore.amd.min.js",
            format: 'amd',
            name: "crossecore",
            plugins: [terser({ format: { comments: false } })]
        }
        ,
        {
            file: "dist/crossecore.es.js",
            format: 'es',

        }
        ,
        {
            file: "dist/crossecore.es.min.js",
            format: 'es',
            plugins: [terser({ format: { comments: false } })]
        }
    ],
    plugins: [typescript(), cleanup({comments: "none"})]
};