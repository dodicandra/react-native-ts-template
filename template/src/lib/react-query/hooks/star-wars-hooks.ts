import {IStarWars} from '@models/API';

import {useRQ, UseRQOptions} from '../custom-hooks';
import {QueryKey} from '../query-key';
import {starWarsService} from '../service/star-wars';

export function usePeopleList(options?: UseRQOptions<IStarWars.People.Response>) {
  return useRQ([QueryKey.GET_STAR_PEOPLE], starWarsService.people, options);
}
