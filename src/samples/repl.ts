import { Pipeline, printToken, tokenToString } from '../pipeline';
import * as readlineSync from 'readline-sync';

export function repl(
    menuFile: string,
    intentFile: string,
    attributesFile: string,
    quantifierFile: string
) {
    console.log('Welcome to the ShortOrder REPL.');
    console.log('Type your order below.');
    console.log('A blank line exits.');
    console.log();

    const pipeline = new Pipeline(menuFile, intentFile, attributesFile, quantifierFile);

    while (true) {
        const line = readlineSync.question('% ');
        if (line.length === 0) {
            console.log('bye');
            break;
        }

        console.log();

        const tokens = pipeline.processOneQuery(line);
        tokens.forEach(printToken);

        console.log();
    }
}

repl(
    './src/samples/data/menu.yaml',
    './src/samples/data/intents.yaml',
    './src/samples/data/attributes.yaml',
    './src/samples/data/quantifiers.yaml',
);