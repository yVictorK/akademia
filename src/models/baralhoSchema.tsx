import Realm from "realm";
import { FlashCardSchema } from "./FlashCard";

export class BaralhoSchema extends Realm.Object<BaralhoSchema> {
    _id!: Realm.BSON.ObjectId;
    name!: string;
    userId!: string;
    cards?: Realm.List<FlashCardSchema>;

    static schema: Realm.ObjectSchema = {
        name: 'baralho',
        primaryKey: '_id',
        properties: {
            _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId() },
            name: 'string',
            userId: 'string',
            cards: { type: 'list', objectType: 'flashcard' },
        },
    };
}
