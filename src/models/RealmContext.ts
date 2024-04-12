import { createRealmContext } from "@realm/react";
import { Activity } from "./toDoListSchema";

export const realmContext = createRealmContext({
    schema: [Activity],
});