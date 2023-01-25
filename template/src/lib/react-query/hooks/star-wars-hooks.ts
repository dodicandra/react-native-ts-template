import {useRQ, UseRQOptions} from '@lib/react-query/custom-hooks';
import {QueryKey} from '@lib/react-query/query-key';
import {starWarsService} from '@lib/react-query/service/star-wars';
import {IStarWars} from '@models/API';

export function usePeopleList(options?: UseRQOptions<IStarWars.People.Response>) {
  return useRQ([QueryKey.GET_STAR_PEOPLE], starWarsService.people, options);
}
