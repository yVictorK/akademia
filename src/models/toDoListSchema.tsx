import Realm, { BSON } from "realm";

export class Activity extends Realm.Object<Activity> {
  _id!: BSON.ObjectId;
  name!: string;
  userId!: string;

  static schema: Realm.ObjectSchema = {
    name: 'Activity',
    primaryKey: '_id',
    properties: {
      _id: { type: 'objectId', default: () => new BSON.ObjectId() },
      name: 'string',
      userId: 'string',
    },
  };
}
