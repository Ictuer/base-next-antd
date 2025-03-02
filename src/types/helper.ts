export type AwaitedReturnType<T extends (...args: any[]) => Promise<any>> =
  Awaited<ReturnType<T>>

export type RequestDataItemType<
  T extends (...args: any[]) => Promise<{ data: any[] }>,
> = AwaitedReturnType<T>['data'][0]
