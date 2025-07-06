import {Move} from './move';
import {VersionGroupDetail} from './versionGroupDetail';

export interface Mfe {
  move: Move
  version_group_details: VersionGroupDetail[]
}
