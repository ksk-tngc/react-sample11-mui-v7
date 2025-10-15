/**
 * ダミー画像のURLを取得する
 */
export const getUserImageUrl = (userId: number, size: number = 300) => {
  return `https://picsum.photos/id/${userId * 3 - 2}/${size}`;
};
