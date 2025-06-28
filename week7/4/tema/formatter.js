
export const formatMessage = (level, message) => {
  const timestamp = new Date().toISOString()
  return `[${timestamp}] ${level}: ${message}`
}
