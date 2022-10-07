export const splitArrayInChuncks = <T>(arr: T[], chunkSize = 3): T[][] => {
  return arr.reduce((all: any, one: any, i: number) => {
    const ch = Math.floor(i / chunkSize);
    all[ch] = [].concat(all[ch] || [], one);
    return all;
  }, []);
};
