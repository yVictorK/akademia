import Realm from 'realm';


export class newActivity extends Realm.Object {
  public _id!: string;
  public name!: string;
  public userId!: string;

  public static schema: Realm.ObjectSchema = {
    name: 'Activity',
    primaryKey: '_id',
    properties: {
      _id: 'string',
      name: {type: 'string', indexed: true},
      userId: 'string',
    },
  };
}
