import Realm from "realm";

export class FlashCardSchema extends Realm.Object<FlashCardSchema> {
    name!: string;
    pergunta!: string;
    resposta!: string;
    timer?: number;

    static schema: Realm.ObjectSchema = {
        name: 'flashcard',
        properties: {
            name: 'string',
            pergunta: 'string',
            resposta: 'string',
            timer: 'int?',
        },
        embedded: true,
    };
}
