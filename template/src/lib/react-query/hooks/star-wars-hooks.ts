import {IStarWars} from '@models/API';
import {useRQ, UseRQOptions} from '@react-query/custom-hooks';
import {QueryKey} from '@react-query/query-key';
import {starWarsService} from '@react-query/service/star-wars';

export function usePeopleList(options?: UseRQOptions<IStarWars.People.Response>) {
  return useRQ([QueryKey.GET_STAR_PEOPLE], starWarsService.people, options);
}
