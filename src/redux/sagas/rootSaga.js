import repoActionsWatcher from "./watchers/repoActionsWatcher";
import userActionsWatcher from "./watchers/userActionsWatcher";

export default function* () {
  yield* repoActionsWatcher();
  yield* userActionsWatcher();
}