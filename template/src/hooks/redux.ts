import {shallowEqual, TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {AppDispatch, AppState} from '@redux-store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppEqulitySelector = <Select>(selector: (state: AppState) => Select) =>
  useSelector(selector, shallowEqual) as Select;
