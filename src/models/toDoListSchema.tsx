import Realm, { BSON } from "realm";
import 'react-native-get-random-values';

export class Activity extends Realm.Object<Activity> {
  _id!: BSON.ObjectId;
  name!: string;
  userId!: string;

  static schema: Realm.ObjectSchema = {
    name: 'Activity',
    primaryKey: '_id',
    properties: {
      _id: { type: 'objectId', default: () => new BSON.ObjectId()},
      name: 'string',
      userId: 'string',
    },
  };
}
