import { createRealmContext } from "@realm/react";
import { Activity } from "./toDoListSchema";
import { UserSchema } from "./userSchema";
import { BaralhoSchema } from "./baralhoSchema";
import { FlashCardSchema } from "./FlashCard";
import { EditalSchema } from "./EditalSchema";

export const realmContext = createRealmContext({
    schema: [Activity, UserSchema, BaralhoSchema, FlashCardSchema, EditalSchema],
});


