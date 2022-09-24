type KeyOf<T> = keyof T;
type PickOnce<T, K extends keyof T> = Pick<T, K>[K];
