import {MoveLearnMethod} from './moveLearnMethoud';
import {VersionGroup} from './versionGroup';

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: MoveLearnMethod
  order?: number
  version_group: VersionGroup
}
