const UNIT_NAMES = ["Bytes", "KB", "MB", "GB", "TB"];
const KILOBYTES_SIZE_IN_BYTES = 1024;
const EMPTY_FILE_VALUE = "0 Bytes";

export const formatFileSize = (size: number): string => {
  if (size === 0) return EMPTY_FILE_VALUE;
  const i = Math.floor(Math.log(size) / Math.log(KILOBYTES_SIZE_IN_BYTES));
  return `${parseFloat(
    (size / Math.pow(KILOBYTES_SIZE_IN_BYTES, i)).toFixed(2)
  )} ${UNIT_NAMES[i]}`;
};
