import {Swapi} from '@lib/ky';
import {IStarWars} from '@models/API';
import {QueryFunction} from '@tanstack/react-query';

const people: QueryFunction<IStarWars.People.Response> = () => {
  try {
    const resp = Swapi.get<IStarWars.People.Response>('people').json();
    return resp;
  } catch (error) {
    throw error;
  }
};

export const starWarsService = {
  people,
};
