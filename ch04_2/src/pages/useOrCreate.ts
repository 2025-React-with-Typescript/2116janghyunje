const cache: Record<string, any> = {};
export const useOrCreate = <T>(key: string, callback: () => T): T => {
  // 특정 키에 값이 없으면 콜백을 실행해 저장
  if (!cache[key]) cache[key] = callback();
  // 값이 있으면 바로 리턴
  return cache[key] as T;
};
