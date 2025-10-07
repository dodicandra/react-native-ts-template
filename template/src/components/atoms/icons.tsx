import React, {ComponentProps} from 'react';

import * as ExpoIcons from '@expo/vector-icons';

type IconType = keyof typeof ExpoIcons;
type ExpoIconType = typeof ExpoIcons;

type IconsProps<T extends IconType> = {
  iconType: T;
  name: ComponentProps<(typeof ExpoIcons)[T]>['name'];
} & Remove<ComponentProps<ExpoIconType[T]>, 'name'>;

function Icons<T extends IconType>({name, iconType, ...props}: IconsProps<T>) {
  const IconCom = ExpoIcons[iconType];
  return <IconCom size={28} {...props} name={name} />;
}

export {Icons, IconType};
