import Realm from "realm";

export class UserSchema extends Realm.Object<UserSchema> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  userId!: string;
  imageProfile!: string;
  correctAnswers!: number;
  wrongAnswers!: number;
  totalQuestions!: number;

  static schema: Realm.ObjectSchema = {
    name: 'user',
    primaryKey: '_id',
    properties: {
      _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId() },
      name: 'string',
      userId: 'string',
      imageProfile: 'string',
      correctAnswers: { type: 'int', default: 0 },
      wrongAnswers: { type: 'int', default: 0 },
      totalQuestions: { type: 'int', default: 0 },
    },
  };
}
