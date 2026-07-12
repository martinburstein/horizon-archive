export const ADVENTURE_VERBS = Object.freeze(["LOOK AT", "USE", "TALK TO"]);

export function getVerbPressedState(selectedVerb) {
  return Object.fromEntries(ADVENTURE_VERBS.map((verb) => [verb, verb === selectedVerb]));
}
