import Realm from "realm";

export class Activity extends Realm.Object<Activity> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  userId!: string;
  isComplete!: boolean;

  static schema: Realm.ObjectSchema = {
    name: 'Activity',
    primaryKey: '_id',
    properties: {
      _id: { type: 'objectId', default: () => new Realm.BSON.ObjectId() },
      name: 'string',
      userId: 'string',
      isComplete: {type: 'bool', default: false},
    },
  };
}
