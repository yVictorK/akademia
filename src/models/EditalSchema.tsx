import Realm from "realm";

export class EditalSchema extends Realm.Object<EditalSchema> {
    _id!: Realm.BSON.ObjectId;
    title!: string;
    link!: string;
    category!: string; 
    year?: number;

    static schema: Realm.ObjectSchema = {
        name: 'edital',
        primaryKey: '_id',
        properties: {
            _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId() },
            title: 'string',
            link: 'string',
            category: 'string',
            year: 'int?',
        },
    };
}
